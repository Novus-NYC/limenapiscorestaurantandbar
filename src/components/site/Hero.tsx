"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { business } from "@/content/business"
import { Img } from "@/components/ui/Img"
import { Button } from "@/components/ui/kit"
import { RevealText } from "@/components/motion/RevealText"
import { DURATION, EASE, prefersReducedMotion } from "@/lib/motion"

/**
 * Full-viewport opening: type on the left, one photograph on the right.
 *
 * The photograph is desktop-only. On a phone the fold is already full of headline and
 * buttons, and pushing an image in below them costs the scroll cue its place on screen.
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

      <div
        data-hero-inner
        className="shell relative grid w-full items-center gap-14 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.1fr]"
      >
        <div>
          <p data-hero-fade className="label opacity-0">
            {business.address.locality}, Queens · Est. 2023
          </p>

          {/*
            Held below the display-xl clamp: the headline now shares the fold with the
            photograph, so it's sized to the narrower column rather than the viewport.
            The 6.25rem cap lands before the shell stops growing, so "Experience" never
            outruns its column on a wide screen.
          */}
          <RevealText
            as="h1"
            immediate
            delay={0.15}
            className="mt-8 max-w-[16ch] font-display text-[clamp(2.75rem,7.2vw,6.25rem)] leading-[0.95] tracking-[-0.03em] text-ink"
          >
            Experience the taste of Peru
          </RevealText>

          <p
            data-hero-fade
            className="mt-8 max-w-prose text-lg leading-relaxed text-ink/75 opacity-0 sm:text-xl"
          >
            A family-run Peruvian kitchen and pisco bar on Greenpoint Ave. Ceviche cut to
            order, chicken turned over the fire, and a sour that changes colour in the
            glass.
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

        {/* Native 4:3, filling its column. The source tops out at 1000px, so the 38rem
            frame asks for a ~1.2x upsample on a 2x display — invisible on a photograph,
            and worth it for the presence it buys the fold. The narrower cap below xl
            keeps the headline column wide enough to hold "Experience the" on one line. */}
        <div data-hero-fade className="hidden opacity-0 lg:block">
          <div className="mx-auto aspect-[4/3] max-w-[32rem] overflow-hidden rounded-card border border-ink/12 xl:max-w-[38rem]">
            <Img
              id="dish-steak-plancha"
              alt="Grilled steak on a cast-iron plancha with roasted potatoes and a cup of salsa criolla."
              sizes="(min-width: 1280px) 608px, 512px"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
