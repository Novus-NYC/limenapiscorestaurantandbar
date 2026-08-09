"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { business } from "@/content/business"
import { Button } from "@/components/ui/kit"
import { RevealText } from "@/components/motion/RevealText"
import { DURATION, EASE, prefersReducedMotion } from "@/lib/motion"

/**
 * Full-viewport opening. The generated ember atmosphere (EmberField) shows through
 * behind it — the hero contributes only type, so the backdrop stays the focal object,
 * the way the reference keeps its canvas scene unobstructed.
 *
 * The scroll cue and supporting lines fade out on scrub as you leave the fold.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: DURATION.cinematic, ease: EASE.out, stagger: 0.12, delay: 0.35 }
      )

      // Slow lift as the fold leaves — the reference's scrubbed, unhurried exit.
      gsap.to("[data-hero-inner]", {
        yPercent: -14,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 1 },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--nav-h)]"
    >
      {/* Grounding gradient so type stays legible over the moving canvas. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bone/80 via-bone/30 to-bone"
      />

      <div data-hero-inner className="shell relative w-full">
        <p data-hero-fade className="label opacity-0">
          {business.address.locality}, Queens · Est. 2023
        </p>

        <RevealText
          as="h1"
          immediate
          delay={0.15}
          className="mt-8 max-w-[20ch] font-display text-display-xl text-ink"
        >
          Experience the taste of Peru
        </RevealText>

        <p
          data-hero-fade
          className="mt-8 max-w-prose text-lg leading-relaxed text-ink/75 opacity-0 sm:text-xl"
        >
          A family-run Peruvian kitchen and pisco bar on Greenpoint Ave. Ceviche cut to
          order, chicken turned over the fire, and a sour that changes colour in the glass.
        </p>

        <div data-hero-fade className="mt-11 flex flex-wrap gap-4 opacity-0">
          <Button href="/menu">View the menu</Button>
          <Button href={business.phoneHref} variant="outline">
            Call to book
          </Button>
        </div>

        <div
          data-hero-fade
          className="mt-20 flex items-center gap-4 opacity-0"
          aria-hidden
        >
          <span className="label">Scroll</span>
          <span className="block h-px w-16 bg-gradient-to-r from-gold to-transparent" />
        </div>
      </div>
    </section>
  )
}
