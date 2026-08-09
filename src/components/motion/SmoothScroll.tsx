"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "@/lib/motion"

/**
 * Smooth scroll, driving GSAP ScrollTrigger from Lenis's RAF loop.
 *
 * The reference profile pairs a scroll-smoother with pinned chapters; this is that
 * pairing. Lenis owns the loop and ScrollTrigger reads from it, so pins and scrubs
 * stay in lockstep with the eased scroll position instead of the native one.
 *
 * Mounted once in the root layout. Renders nothing.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Reduced motion: skip smoothing entirely and let the browser scroll natively.
    if (prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      // Slow and heavy, per the reference's motion intensity.
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      touchMultiplier: 1.6,
    })

    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
