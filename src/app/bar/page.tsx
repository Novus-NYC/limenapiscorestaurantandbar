import type { Metadata } from "next"
import { barMenu } from "@/content/menu"
import { business } from "@/content/business"
import { PageHeader } from "@/components/site/PageHeader"
import { Button, Eyebrow, Section } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"
import { GrowRule } from "@/components/motion/GrowRule"

export const metadata: Metadata = {
  title: "Pisco Bar",
  description:
    "Pisco sours in five variations — classic, butterfly, mora, hibiscus and lychee — plus a full bar, at Limeña in Sunnyside, Queens.",
  alternates: { canonical: "/bar" },
}

export default function BarPage() {
  return (
    <>
      <PageHeader eyebrow="21+" title="The pisco bar" intro={barMenu.blurb} />

      <div className="shell">
        <GrowRule />
      </div>

      <Section>
        <Reveal>
          <Eyebrow>The sours</Eyebrow>
        </Reveal>
        <RevealText as="h2" className="mt-6 font-display text-display-md text-ink">
          Five ways
        </RevealText>

        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-card border border-ink/12 sm:grid-cols-2 lg:grid-cols-3" stagger y={20}>
          {barMenu.piscoSours.map((sour, i) => (
            <article key={sour.name} className="bg-white/70 p-8 lg:p-10">
              <span className="font-mono text-label text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-3xl text-ink">{sour.name}</h3>
              {sour.note && (
                <p className="mt-3 leading-relaxed text-ink/70">{sour.note}</p>
              )}
            </article>
          ))}
          <article className="flex flex-col justify-center bg-crimson/15 p-8 lg:p-10">
            <p className="font-display text-2xl leading-snug text-ink">
              And whatever the bar is playing with this week.
            </p>
            <p className="mt-3 text-sm text-ink/70">Ask what&apos;s on.</p>
          </article>
        </Reveal>
      </Section>

      <Section className="border-t border-ink/12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Also behind the bar</Eyebrow>
            </Reveal>
            <Reveal className="mt-8 space-y-4" stagger>
              {barMenu.other.map((drink) => (
                <div key={drink} className="flex items-center gap-5">
                  <span aria-hidden className="h-px w-6 bg-gold/40" />
                  <span className="font-display text-2xl text-ink">{drink}</span>
                </div>
              ))}
            </Reveal>
            <Reveal>
              <p className="mt-10 max-w-prose leading-relaxed text-ink/70">
                {barMenu.note} We don&apos;t publish cocktail prices online — they change
                with what we can get — so ask when you sit down.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>What is pisco?</Eyebrow>
            </Reveal>
            <Reveal className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/75" stagger>
              <p>
                Peru&apos;s national spirit: a brandy distilled from grapes, bottled clear
                and unaged, so what you taste is the fruit rather than the barrel.
              </p>
              <p>
                Shaken with lime, syrup and egg white it becomes the pisco sour — sharp,
                foamed, finished with a few drops of bitters. It&apos;s the reason there
                are two words after our name.
              </p>
            </Reveal>
            <Reveal className="mt-10">
              <Button href={business.phoneHref}>Call {business.phone}</Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
