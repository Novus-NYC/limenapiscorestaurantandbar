"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DURATION, EASE, prefersReducedMotion } from "@/lib/motion"

interface GrowRuleProps {
  /** Horizontal hairline (rowGrow) or vertical (colGrow). */
  orientation?: "row" | "col"
  className?: string
}

/**
 * The reference's `rowFrom0` / `colFrom0` keyframes: a hairline that scales in from
 * zero as it enters view. Used as the section divider throughout the site — it's the
 * quiet motion that makes the whole page feel authored rather than assembled.
 */
export function GrowRule({ orientation = "row", className = "" }: GrowRuleProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const axis = orientation === "row" ? "scaleX" : "scaleY"

    if (prefersReducedMotion()) {
      gsap.set(el, { [axis]: 1 })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { [axis]: 0 },
        {
          [axis]: 1,
          duration: DURATION.cinematic,
          ease: EASE.cinematic,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [orientation])

  return (
    <div
      ref={ref}
      aria-hidden
      className={
        orientation === "row"
          ? `h-px w-full origin-left scale-x-0 bg-ink/15 ${className}`
          : `w-px h-full origin-top scale-y-0 bg-ink/15 ${className}`
      }
    />
  )
}
