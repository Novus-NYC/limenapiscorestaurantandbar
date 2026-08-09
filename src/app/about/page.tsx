import type { Metadata } from "next"
import { business } from "@/content/business"
import { press } from "@/content/reviews"
import { PageHeader } from "@/components/site/PageHeader"
import { Img } from "@/components/ui/Img"
import { Button, Eyebrow, Section } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"
import { GrowRule } from "@/components/motion/GrowRule"

export const metadata: Metadata = {
  title: "About",
  description:
    "A family-run Peruvian kitchen and pisco bar on Greenpoint Ave in Sunnyside, Queens, serving the neighborhood since 2023.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="A family table in Sunnyside"
        intro="We opened in 2023, in a room that spent years as an Irish pub. The bar stayed. Everything that comes over it changed."
      />

      <div className="shell">
        {/* A pair of portraits rather than one wide banner: both source photographs are
            portrait, so a 21:9 crop would throw most of each frame away — and stretching
            a 574px-wide image across the viewport would go soft. */}
        <Reveal className="grid gap-5 sm:grid-cols-2" stagger y={30}>
          <div className="aspect-[3/4] overflow-hidden rounded-card border border-ink/12">
            <Img
              id="storefront-greenpoint-ave"
              alt="The Limeña storefront on Greenpoint Avenue: red brick, a deep burgundy entry, and a gold script sign."
              sizes="(min-width: 640px) 45vw, 92vw"
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-card border border-ink/12">
            <Img
              id="interior-dining-room"
              alt="The dining room, with wood floors, a green accent wall, and framed Peruvian prints."
              sizes="(min-width: 640px) 45vw, 92vw"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>What we cook</Eyebrow>
            </Reveal>
          </div>
          <div>
            <RevealText as="h2" className="font-display text-display-md text-ink">
              Traditional recipes, cooked traditionally
            </RevealText>
            <Reveal className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/75" stagger>
              <p>
                Peruvian food is three kitchens in one. There&apos;s the coast — ceviche,
                leche de tigre, everything cured bright and cold in lime. There&apos;s the
                grill, where anticuchos have been cooked over coals since long before
                anyone called it street food. And there&apos;s chifa, the Chinese-Peruvian
                cooking that gave us chaufa and gave lomo saltado its wok.
              </p>
              <p>
                We cook all three, the way they were taught to us, without adjusting them
                for anyone. The ají amarillo is the actual chile. The causa is cold and
                the potato is whipped by hand. The chicken turns over the fire for as long
                as it takes.
              </p>
              <p>
                What&apos;s changed since we opened is only the length of the menu.
                Guests asked for more seafood, so there&apos;s more seafood.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <div className="shell">
        <GrowRule />
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>The room</Eyebrow>
            </Reveal>
          </div>
          <div>
            <RevealText as="h2" className="font-display text-display-md text-ink">
              Small, warm, and usually loud
            </RevealText>
            <Reveal className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/75" stagger>
              <p>
                It&apos;s a small dining room with a proper bar down one side. There are
                screens for the football. There&apos;s heated seating outside when the
                weather turns, and a private room if you&apos;re bringing a crowd.
              </p>
              <p>
                Birthdays and quinceañeras happen here most weeks. If you&apos;re planning
                one, call ahead and we&apos;ll set the room up for you.
              </p>
            </Reveal>

            <Reveal className="mt-12 flex flex-wrap gap-3" stagger y={12}>
              {business.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-card border border-ink/18 px-4 py-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink/70"
                >
                  {amenity}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Press — one mention, stated plainly rather than dressed up as an award. */}
      <Section className="border-t border-ink/12">
        <Reveal>
          <Eyebrow>In the press</Eyebrow>
        </Reveal>
        <Reveal className="mt-10 space-y-10" stagger y={20}>
          {press.map((item) => (
            <article key={item.outlet} className="max-w-3xl">
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-2xl text-ink">{item.outlet}</h3>
                <span className="font-mono text-label text-ink/65">{item.date}</span>
              </div>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{item.summary}</p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-14">
          <Button href="/visit">Plan a visit</Button>
        </Reveal>
      </Section>
    </>
  )
}
