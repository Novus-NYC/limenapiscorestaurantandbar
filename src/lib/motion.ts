/**
 * Shared motion constants, lifted from the reference template's motion primitives.
 *
 * Reference: easings `cubic-bezier(0.4, 0, 0.2, 1)` and `cubic-bezier(0, 0, 0.2, 1)`;
 * durations from 0.1s micro up to 1s cinematic; intensity "heavy — but elegant and
 * slow. Everything eases; nothing is frantic."
 */
export const EASE = {
  cinematic: "power2.inOut",
  out: "power2.out",
  /** Raw CSS equivalents, for anything not driven by GSAP. */
  cssCinematic: "cubic-bezier(0.4, 0, 0.2, 1)",
  cssOut: "cubic-bezier(0, 0, 0.2, 1)",
} as const

export const DURATION = {
  micro: 0.1,
  base: 0.6,
  cinematic: 1,
} as const

/** Stagger between siblings in a reveal group. Slow enough to read as deliberate. */
export const STAGGER = 0.08

/** Where in the viewport a reveal fires. Late enough that it's clearly a response to scroll. */
export const REVEAL_START = "top 85%"

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
