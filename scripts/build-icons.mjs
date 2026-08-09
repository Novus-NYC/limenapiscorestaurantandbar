/**
 * Favicon pipeline.
 *
 * The wordmark in assets/source/logo-limena.png is a wide script lockup — at 16px
 * it collapses into a red smear, and its "L" is joined to the letters after it, so
 * there is no clean glyph to crop out. Instead the icon is drawn: the logo red as a
 * solid tile, a single serif "L" in bone. It survives a browser tab, and it keeps
 * the two brand colours the rest of the site is built from.
 *
 * Emits Next's file-based icon metadata into src/app/, so no <link> tags are needed.
 *
 *   node scripts/build-icons.mjs
 */
import path from "node:path"
import sharp from "sharp"

const ROOT = path.resolve(import.meta.dirname, "..")
const APP_DIR = path.join(ROOT, "src/app")

const CRIMSON = "#E0121B"
const BONE = "#F7F3EC"

/** x sits left of centre: the "L" carries all its weight on the left stem. */
const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="${CRIMSON}"/>
  <text x="246" y="258" text-anchor="middle" dominant-baseline="central"
        font-family="Georgia, 'Times New Roman', serif" font-size="360" fill="${BONE}">L</text>
</svg>`

const outputs = [
  ["icon.png", 512],
  ["apple-icon.png", 180],
]

for (const [name, size] of outputs) {
  await sharp(Buffer.from(tile)).resize(size, size).png().toFile(path.join(APP_DIR, name))
  console.log(`${name} — ${size}x${size}`)
}
