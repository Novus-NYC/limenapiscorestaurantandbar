import type { Metadata } from "next"
import { business } from "@/content/business"
import { PageHeader } from "@/components/site/PageHeader"
import { Img } from "@/components/ui/Img"
import { Button, Eyebrow, Section } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"

export const metadata: Metadata = {
  title: "Catering & Private Events",
  description:
    "Peruvian catering for family gatherings, holidays and special events in Queens — plus a private dining room at Limeña in Sunnyside.",
  alternates: { canonical: "/catering" },
}

const occasions = [
  {
    title: "Family gatherings",
    body: "Platters built to go down the middle of a long table — ceviche, causas, anticuchos, a tray of chaufa.",
  },
  {
    title: "Holidays",
    body: "Pollo a la brasa by the bird, with the sides that belong beside it.",
  },
  {
    title: "Birthdays & quinceañeras",
    body: "Our private room, set for your group. These happen here most weeks.",
  },
  {
    title: "Office & special events",
    body: "Tell us the headcount and the budget and we'll build the menu backwards from it.",
  },
]

export default function CateringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catering"
        title="Bring the table to you"
        intro={business.catering.blurb}
      >
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Button href={business.phoneHref}>Call {business.phone}</Button>
          <Button href={`mailto:${business.email}?subject=Catering enquiry`} variant="outline">
            Email us
          </Button>
        </Reveal>
      </PageHeader>

      <div className="shell">
        {/* Capped at 60rem — the source is 1000px wide, so a full-bleed banner would
            ask for roughly twice the pixels that exist on a high-DPI screen. */}
        <Reveal y={30}>
          <div className="mx-auto aspect-[4/3] max-w-[60rem] overflow-hidden rounded-card border border-ink/12">
            <Img
              id="dish-steak-plancha"
              alt="Grilled steak on a cast-iron plancha with roasted potatoes and a cup of salsa criolla."
              sizes="(min-width: 1024px) 960px, 92vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Section>
        <Reveal>
          <Eyebrow>What we cater</Eyebrow>
        </Reveal>
        <RevealText as="h2" className="mt-6 font-display text-display-md text-ink">
          Occasions we cook for
        </RevealText>

        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-card border border-ink/12 sm:grid-cols-2" stagger y={20}>
          {occasions.map((occasion, i) => (
            <article key={occasion.title} className="bg-white/70 p-8 lg:p-10">
              <span className="font-mono text-label text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">{occasion.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{occasion.body}</p>
            </article>
          ))}
        </Reveal>
      </Section>

      <Section className="border-t border-ink/12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <RevealText as="h2" className="font-display text-display-md text-ink">
              How to book
            </RevealText>
            <Reveal className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/75" stagger>
              <p>
                There&apos;s no form to fill in. Call or email with your date, your
                headcount, and roughly what you want to eat, and we&apos;ll come back with
                a menu and a price.
              </p>
              <p>
                For the private room, the earlier you call the better — weekends book out
                first.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <dl className="divide-y divide-ink/12 border-y border-ink/12">
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                <dt className="label">Phone</dt>
                <dd>
                  <a href={business.phoneHref} className="font-display text-2xl text-ink hover:text-gold">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                <dt className="label">Email</dt>
                <dd>
                  <a
                    href={`mailto:${business.email}?subject=Catering enquiry`}
                    className="break-all font-display text-xl text-ink hover:text-gold"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                <dt className="label">Instagram</dt>
                <dd>
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xl text-ink hover:text-gold"
                  >
                    {business.social.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
