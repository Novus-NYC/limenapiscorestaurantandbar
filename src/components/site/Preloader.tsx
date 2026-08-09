"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { EASE, prefersReducedMotion } from "@/lib/motion"

/**
 * The entry gate. The reference template is preloader-gated, and it's the single
 * cheapest way to make an arrival feel authored — but a preloader that blocks content
 * is a real cost, so this one is strictly bounded:
 *
 * - It never blocks: content renders underneath immediately and is reachable by
 *   keyboard the moment the curtain lifts.
 * - It shows once per session (sessionStorage), not on every navigation.
 * - It is skipped entirely under reduced motion.
 * - It lifts on `window.load` or after 1.6s, whichever comes first — a slow image
 *   can never strand a visitor behind it.
 */
export function Preloader() {
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || sessionStorage.getItem("limena:arrived")) return
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = rootRef.current
    if (!root) return

    sessionStorage.setItem("limena:arrived", "1")
    document.body.style.overflow = "hidden"

    let done = false
    const lift = () => {
      if (done) return
      done = true

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ""
          setMounted(false)
        },
      })
      tl.to(root.querySelectorAll("[data-preload-item]"), {
        opacity: 0,
        y: -12,
        duration: 0.4,
        ease: EASE.out,
        stagger: 0.06,
      })
      // The curtain wipes upward — the reference's colGrow, played as an exit.
      tl.to(root, { yPercent: -100, duration: 0.9, ease: EASE.cinematic }, "-=0.1")
    }

    const tl = gsap.timeline()
    tl.fromTo(
      root.querySelectorAll("[data-preload-item]"),
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, ease: EASE.out, stagger: 0.1 }
    )
    tl.fromTo(
      root.querySelector("[data-preload-bar]"),
      { scaleX: 0 },
      { scaleX: 1, duration: 1.1, ease: EASE.cinematic },
      0.3
    )

    const timeout = window.setTimeout(lift, 1600)
    window.addEventListener("load", lift)

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("load", lift)
      document.body.style.overflow = ""
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={rootRef}
      // aria-hidden + inert: this is decoration, and it must never trap focus.
      aria-hidden
      // @ts-expect-error -- `inert` lands in React's types after 19.2; the attribute is valid.
      inert=""
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bone"
    >
      <img
        data-preload-item
        src="/media/logo-limena.png"
        alt=""
        width={400}
        height={168}
        className="h-16 w-auto opacity-0 sm:h-20"
      />
      <p data-preload-item className="label mt-6 opacity-0">
        Sunnyside, Queens
      </p>
      <div className="mt-10 h-px w-40 overflow-hidden bg-ink/12">
        <div data-preload-bar className="h-full w-full origin-left scale-x-0 bg-gold" />
      </div>
    </div>
  )
}
