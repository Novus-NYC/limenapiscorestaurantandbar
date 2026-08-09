import type { Metadata } from "next"
import { faq } from "@/content/faq"
import { business } from "@/content/business"
import { faqJsonLd } from "@/lib/seo"
import { PageHeader } from "@/components/site/PageHeader"
import { Button, Section } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Reservations, outdoor seating, catering, delivery, parking and what pisco actually is — answered.",
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow="Questions"
        title="Good to know"
        intro="The things people call and ask us most."
      />

      <div className="shell">
        <Reveal className="divide-y divide-ink/12 border-y border-ink/12" stagger y={16}>
          {faq.map((item) => (
            /* Native details/summary: keyboard-operable and open-to-find without
               a line of our own JavaScript. */
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ink marker:hidden lg:text-2xl">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-2xl font-light text-gold transition-transform duration-500 ease-cinematic group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-prose leading-relaxed text-ink/70">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>

      <Section>
        <p className="max-w-prose text-lg leading-relaxed text-ink/75">
          Anything else — call us. Someone who can actually answer will pick up.
        </p>
        <div className="mt-8">
          <Button href={business.phoneHref}>Call {business.phone}</Button>
        </div>
      </Section>
    </>
  )
}
