"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DURATION, EASE, REVEAL_START, STAGGER, prefersReducedMotion } from "@/lib/motion"

interface RevealProps {
  children: ReactNode
  /** Render as something other than a div. */
  as?: ElementType
  className?: string
  /** Stagger direct children instead of moving the container as one block. */
  stagger?: boolean
  /** Travel distance in px. The reference's transform-reveal is subtle — 24px default. */
  y?: number
  delay?: number
}

/**
 * The workhorse. The reference capture registered fade ×221 and transform-reveal ×88 —
 * this is that vocabulary: a slow, eased fade-up fired once as the element scrolls in.
 *
 * Elements start hidden via `.will-reveal` (CSS), so there's no flash before hydration.
 * Under reduced motion the class is neutralized in CSS and this effect no-ops.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = false,
  y = 24,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      gsap.set(stagger ? el.children : el, { opacity: 1, y: 0 })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const targets = stagger ? Array.from(el.children) : el
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.cinematic,
          ease: EASE.out,
          delay,
          stagger: stagger ? STAGGER : 0,
          scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [stagger, y, delay])

  return (
    <Tag ref={ref} className={`${stagger ? "will-reveal-children" : "will-reveal"} ${className}`}>
      {children}
    </Tag>
  )
}
