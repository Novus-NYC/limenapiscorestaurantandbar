import { getAsset } from "@/lib/media"

interface ImgProps {
  /** Key into the media manifest. */
  id: string
  alt: string
  /** Responsive `sizes`. Get this right — it's what makes the srcset worth having. */
  sizes?: string
  className?: string
  /** Above-the-fold images should load eagerly with high priority. */
  priority?: boolean
}

/**
 * Picture element backed by the build-time media manifest.
 *
 * Serves AVIF with a WebP fallback, reserves layout with the real intrinsic aspect
 * ratio (so nothing shifts), and paints the inline LQIP underneath while the real
 * bytes arrive. Deliberately not next/image: our assets are pre-optimized and
 * fingerprinted at build time, so runtime optimization would be pure overhead.
 */
export function Img({ id, alt, sizes = "100vw", className, priority = false }: ImgProps) {
  const asset = getAsset(id)

  return (
    <picture>
      {asset.srcSet && <source type="image/avif" srcSet={asset.srcSet.avif} sizes={sizes} />}
      {asset.srcSet && <source type="image/webp" srcSet={asset.srcSet.webp} sizes={sizes} />}
      <img
        src={asset.src}
        alt={alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={{
          backgroundImage: `url(${asset.lqip})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </picture>
  )
}
