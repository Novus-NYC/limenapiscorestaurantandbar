import type { Metadata } from "next"
import { gallery } from "@/content/gallery"
import { PageHeader } from "@/components/site/PageHeader"
import { Img } from "@/components/ui/Img"
import { Reveal } from "@/components/motion/Reveal"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside Limeña — the dining room, the storefront on Greenpoint Ave, and plates from the Peruvian kitchen.",
  alternates: { canonical: "/gallery" },
}

/**
 * Editorial mosaic rather than a uniform grid: the first tile runs wide and the
 * portrait shots take a taller cell, so the page reads as composed rather than dumped.
 */
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
]

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The room and the plates"
        intro="Photographs from our own kitchen and dining room in Sunnyside."
      />

      <div className="shell pb-8">
        <Reveal
          className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-3 lg:auto-rows-[19rem] lg:grid-cols-4"
          stagger
          y={30}
        >
          {gallery.map((image, i) => (
            <figure
              key={image.id}
              className={`group relative overflow-hidden rounded-card border border-ink/12 ${SPANS[i] ?? ""}`}
            >
              <Img
                id={image.id}
                alt={image.alt}
                /* Accurate to the mosaic: wide tiles span two of four columns (~46vw),
                   the rest one (~23vw). Getting this right is what makes the srcset
                   worth generating. */
                sizes={
                  (SPANS[i] ?? "").includes("col-span-2")
                    ? "(min-width: 1024px) 46vw, (min-width: 640px) 62vw, 92vw"
                    : "(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 92vw"
                }
                className="h-full w-full object-cover transition-transform duration-cinematic ease-cinematic group-hover:scale-[1.05]"
              />
              {/* This caption sits ON the photograph, so it keeps a dark scrim and light
                  text even though the page around it is light. */}
              {/* This caption sits ON the photograph, so it keeps a dark scrim and light
                  text even though the page around it is light. The scrim holds ~95% at
                  the baseline and fades through 55% — several of these plates are very
                  light-toned, and a thinner gradient let the type wash out. */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent p-5 pt-16">
                <span className="font-mono text-label uppercase text-white">
                  {image.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-14 max-w-prose text-sm leading-relaxed text-ink/70">
            More photographs — including plenty we didn&apos;t take ourselves — live on our{" "}
            <a
              href="https://www.instagram.com/limenapiscobarnyc/"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              Instagram
            </a>
            , where we also post the daily lunch plate.
          </p>
        </Reveal>
      </div>
    </>
  )
}
