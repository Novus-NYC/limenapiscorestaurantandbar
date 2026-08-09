/**
 * Media pipeline.
 *
 * Reads every image in assets/source/, emits responsive AVIF + WebP renditions
 * into public/media/, and writes src/content/generated/media-manifest.json with
 * intrinsic dimensions and an inline base64 LQIP for each asset.
 *
 * Source images came from the legacy site; nothing at runtime touches that host.
 *
 *   node scripts/optimize-media.mjs
 */
import { createHash } from "node:crypto"
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const ROOT = path.resolve(import.meta.dirname, "..")
const SOURCE_DIR = path.join(ROOT, "assets/source")
const OUT_DIR = path.join(ROOT, "public/media")
const MANIFEST = path.join(ROOT, "src/content/generated/media-manifest.json")

/** Rendition widths. An asset only gets widths below its intrinsic width, plus its own. */
const WIDTHS = [400, 800, 1200, 1600]
const LQIP_WIDTH = 20

/** Assets that must keep their alpha channel and skip lossy resizing. */
const LOSSLESS = new Set(["logo-limena"])

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true })
  await mkdir(OUT_DIR, { recursive: true })
  await mkdir(path.dirname(MANIFEST), { recursive: true })

  const files = (await readdir(SOURCE_DIR)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort()

  const seen = new Map()
  const manifest = {}

  for (const file of files) {
    const id = path.basename(file, path.extname(file))
    const buffer = await readFile(path.join(SOURCE_DIR, file))

    // Content-hash dedupe: identical bytes under different names collapse to one entry.
    const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 12)
    if (seen.has(hash)) {
      console.log(`  ${id} -> duplicate of ${seen.get(hash)}, skipped`)
      manifest[id] = manifest[seen.get(hash)]
      continue
    }
    seen.set(hash, id)

    const image = sharp(buffer)
    const { width, height } = await image.metadata()

    const widths = [...new Set(WIDTHS.filter((w) => w < width).concat(width))].sort((a, b) => a - b)

    if (LOSSLESS.has(id)) {
      // The logo is a small transparent PNG — ship it as-is, no renditions.
      await writeFile(path.join(OUT_DIR, `${id}.png`), buffer)
      manifest[id] = {
        src: `/media/${id}.png`,
        width,
        height,
        aspectRatio: Number((width / height).toFixed(4)),
        lqip: await lqip(buffer),
      }
      console.log(`  ${id} -> passthrough png (${width}x${height})`)
      continue
    }

    const sources = { avif: [], webp: [] }
    for (const w of widths) {
      const resized = image.clone().resize({ width: w, withoutEnlargement: true })
      await resized.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(OUT_DIR, `${id}-${w}.avif`))
      await resized.clone().webp({ quality: 76 }).toFile(path.join(OUT_DIR, `${id}-${w}.webp`))
      sources.avif.push({ w, src: `/media/${id}-${w}.avif` })
      sources.webp.push({ w, src: `/media/${id}-${w}.webp` })
    }

    manifest[id] = {
      src: sources.webp.at(-1).src,
      width,
      height,
      aspectRatio: Number((width / height).toFixed(4)),
      lqip: await lqip(buffer),
      srcSet: {
        avif: sources.avif.map((s) => `${s.src} ${s.w}w`).join(", "),
        webp: sources.webp.map((s) => `${s.src} ${s.w}w`).join(", "),
      },
    }
    console.log(`  ${id} -> ${widths.length} widths x2 formats (${width}x${height})`)
  }

  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`\nWrote ${Object.keys(manifest).length} entries to ${path.relative(ROOT, MANIFEST)}`)
}

/** Tiny blurred base64 placeholder, inlined into the manifest so there's no extra request. */
async function lqip(buffer) {
  const out = await sharp(buffer)
    .resize({ width: LQIP_WIDTH })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer()
  return `data:image/webp;base64,${out.toString("base64")}`
}

await main()
