"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "@/lib/motion"

interface PinnedChapterProps {
  /** Holds position while the text column scrolls past it. */
  media: ReactNode
  children: ReactNode
  /** Chapter number, shown as a mono micro-label. */
  index: string
  eyebrow: string
  /** Flip which side the media sits on, so chapters alternate down the page. */
  flip?: boolean
}

/**
 * A pinned chapter: the media column holds while the text scrolls past, then releases.
 * The reference capture registered six of these and they set its whole pace.
 *
 * Two implementation notes, both learned the hard way:
 *
 * 1. The hold is CSS `position: sticky`, not a GSAP pin — same result, without the
 *    pin-spacer height math that leaves dead gaps when the columns disagree.
 *
 * 2. The drift is a TRANSLATE, never a scale, and the element carries no
 *    `will-change: transform`. Scaling a composited layer makes Chrome rasterize it
 *    once at ~1x CSS and then stretch that bitmap, which throws away half the
 *    resolution on a 2x display and leaves the photo visibly soft. Translating an
 *    over-tall child inside an `overflow-hidden` frame gives the same parallax with
 *    no resolution loss.
 */
export function PinnedChapter({
  media,
  children,
  index,
  eyebrow,
  flip = false,
}: PinnedChapterProps) {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const inner = el.querySelector("[data-pin-inner]")
      if (!inner) return

      // Translate only. The child is 112% tall, so ±6% stays inside the frame.
      gsap.fromTo(
        inner,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="shell grid gap-10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <div className={flip ? "lg:order-2" : ""}>
        <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
          {/*
            Capped width: our source photographs top out at 1000px, so a frame much
            wider than this would demand more pixels than exist and go soft on a
            high-DPI screen. Held to a size the real assets can actually fill.
          */}
          <div className="relative mx-auto h-[58vh] max-w-[34rem] overflow-hidden rounded-card lg:h-[calc(100svh-var(--nav-h)-7rem)]">
            <div data-pin-inner className="absolute inset-x-0 -top-[6%] h-[112%]">
              {media}
            </div>
          </div>
        </div>
      </div>

      {/* Taller than the media column, which is what gives the sticky hold its travel. */}
      <div
        className={`flex flex-col justify-center lg:min-h-[125vh] lg:py-24 ${
          flip ? "lg:order-1" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-label text-gold">{index}</span>
          <span className="h-px w-8 bg-gold/40" aria-hidden />
          <span className="label">{eyebrow}</span>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
