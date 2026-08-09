"use client"

import { useEffect, useRef, type ElementType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DURATION, EASE, REVEAL_START, prefersReducedMotion } from "@/lib/motion"

interface RevealTextProps {
  children: string
  as?: ElementType
  className?: string
  /** Fire immediately on mount rather than waiting for scroll (for the hero). */
  immediate?: boolean
  delay?: number
}

/**
 * Word-by-word masked reveal — the reference's `showLetters` keyframe, at word
 * granularity so text selection and screen readers still get a normal string.
 *
 * Each word sits in an `overflow-hidden` span and rises into view. The whole phrase is
 * exposed to assistive tech once via aria-label, with the animated spans aria-hidden,
 * so nobody hears the headline read out one word per element.
 */
export function RevealText({
  children,
  as: Tag = "h2",
  className = "",
  immediate = false,
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const words = children.split(" ")

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll("[data-word]")

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: DURATION.cinematic,
          ease: EASE.out,
          delay,
          stagger: 0.055,
          ...(immediate
            ? {}
            : { scrollTrigger: { trigger: el, start: REVEAL_START, once: true } }),
        }
      )
    }, el)

    return () => ctx.revert()
  }, [children, immediate, delay])

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => {
        // The gap between words comes from margin, not a text node: a trailing
        // space would collapse inside the inline-block mask.
        const gap = i < words.length - 1 ? " mr-[0.25em]" : ""
        return (
          <span key={i} aria-hidden className={`inline-block overflow-hidden align-bottom${gap}`}>
            <span data-word className="inline-block opacity-0 will-change-transform">
              {word}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}
