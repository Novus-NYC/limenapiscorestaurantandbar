import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"

/**
 * Shared page opening. Keeps every inner page on the same rhythm as the home hero
 * without repeating a full-viewport fold on each one.
 *
 * Pass `media` to run the opening as two columns — type left, one photograph right,
 * the same shape as the home hero. Pages with plenty of content below can skip it.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  media,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  /** Optional photograph for the right-hand column. Desktop only. */
  media?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="shell pb-16 pt-[calc(var(--nav-h)+5rem)] lg:pb-20 lg:pt-[calc(var(--nav-h)+8rem)]">
      <div
        className={
          media ? "grid items-center gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-20" : undefined
        }
      >
        <div>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <RevealText
            as="h1"
            immediate
            delay={0.1}
            className="mt-7 font-display text-display-lg text-ink"
          >
            {title}
          </RevealText>
          {intro && (
            <Reveal>
              <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink/75">{intro}</p>
            </Reveal>
          )}
          {children}
        </div>

        {media && <Reveal y={30}>{media}</Reveal>}
      </div>
    </header>
  )
}
