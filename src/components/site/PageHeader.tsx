import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"

/**
 * Shared page opening. Keeps every inner page on the same rhythm as the home hero
 * without repeating a full-viewport fold on each one.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <header className="shell pb-16 pt-[calc(var(--nav-h)+5rem)] lg:pb-20 lg:pt-[calc(var(--nav-h)+8rem)]">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <RevealText as="h1" immediate delay={0.1} className="mt-7 font-display text-display-lg text-ink">
        {title}
      </RevealText>
      {intro && (
        <Reveal>
          <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink/75">{intro}</p>
        </Reveal>
      )}
      {children}
    </header>
  )
}
