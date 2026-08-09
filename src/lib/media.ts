import manifest from "@/content/generated/media-manifest.json"

export interface MediaAsset {
  src: string
  width: number
  height: number
  aspectRatio: number
  /** Inline base64 blur placeholder — no extra network request. */
  lqip: string
  srcSet?: { avif: string; webp: string }
}

const assets = manifest as Record<string, MediaAsset>

/**
 * Look up an optimized asset by id. Throws at build time on a typo rather than
 * shipping a broken image — every caller here is a server component, so a bad key
 * fails the build instead of the page.
 */
export function getAsset(id: string): MediaAsset {
  const asset = assets[id]
  if (!asset) {
    throw new Error(
      `Unknown media asset "${id}". Available: ${Object.keys(assets).join(", ")}`
    )
  }
  return asset
}

export function hasAsset(id: string | undefined): id is string {
  return Boolean(id && id in assets)
}
