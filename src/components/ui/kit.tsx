import Link from "next/link"
import type { ReactNode } from "react"
import type { Price } from "@/content/types"

/** Mono micro-label. The reference's "spec sheet" caption voice. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-8 bg-gold/50" />
      {children}
    </p>
  )
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: "solid" | "outline"
  external?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-card px-6 py-3.5 font-mono text-label uppercase transition-all duration-500 ease-cinematic"
  // White on the crimson fill: 4.92:1 at 11px. Hover deepens to the awning burgundy
  // (11.9:1) — a colour shift within the brand rather than a jump to gold, which reads
  // as a different button entirely at this size.
  const styles =
    variant === "solid"
      ? "bg-crimson text-white hover:bg-burgundy"
      : "border border-ink/30 text-ink hover:border-crimson hover:text-crimson-ink"

  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1"
      >
        →
      </span>
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  )
}

/**
 * Price display.
 *
 * A `null` amount renders nothing at all — the research genuinely had no price for
 * these dishes, and a placeholder like "MP" or "—" would be inventing one.
 */
export function PriceTag({ price }: { price: Price }) {
  if (price.amount === null) return null
  return (
    <span className="whitespace-nowrap font-mono text-sm text-gold">
      {price.from && <span className="text-ink/65">from </span>}${price.amount}
    </span>
  )
}

/** Small pill used for "Popular" and dietary/prep tags. */
export function Tag({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "gold" }) {
  const styles =
    tone === "gold"
      ? "border-gold/40 text-gold"
      : "border-ink/18 text-ink/65"
  return (
    <span
      className={`rounded-full border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] ${styles}`}
    >
      {children}
    </span>
  )
}

/** Standard section wrapper: consistent vertical rhythm across every page. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`shell py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  )
}
