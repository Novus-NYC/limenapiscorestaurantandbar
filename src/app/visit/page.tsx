import type { Metadata } from "next"
import { business } from "@/content/business"
import { PageHeader } from "@/components/site/PageHeader"
import { Img } from "@/components/ui/Img"
import { Button, Eyebrow, Section } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"

export const metadata: Metadata = {
  title: "Visit",
  description:
    "47-14 Greenpoint Ave, Sunnyside, Queens. Hours, directions, parking and how to reach Limeña Pisco Bar & Restaurant.",
  alternates: { canonical: "/visit" },
}

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=47-14+Greenpoint+Ave+Sunnyside+NY+11104"

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find us"
        title="47-14 Greenpoint Ave"
        intro="Sunnyside, Queens. Look for the burgundy awning and the gold script sign."
      >
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Button href={business.phoneHref}>Call {business.phone}</Button>
          <Button href={MAPS_URL} variant="outline" external>
            Open in Maps
          </Button>
        </Reveal>
      </PageHeader>

      <div className="shell">
        {/* Portrait source, shown portrait, at a width it can actually fill. */}
        <Reveal y={30}>
          <div className="mx-auto aspect-[3/4] max-w-[30rem] overflow-hidden rounded-card border border-ink/12">
            <Img
              id="storefront-greenpoint-ave"
              alt="The Limeña storefront on Greenpoint Avenue: red brick, a deep burgundy entry, and a gold script sign."
              sizes="(min-width: 640px) 480px, 92vw"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-3 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Hours</Eyebrow>
            </Reveal>
            <Reveal>
              <dl className="mt-8 divide-y divide-ink/12 border-y border-ink/12">
                {business.hours.map((h) => (
                  <div key={h.label} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                    <dt className="text-ink/80">{h.label}</dt>
                    <dd className="font-mono text-sm text-gold">{h.hours}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{business.hoursNote}</p>
            </Reveal>

            <Reveal>
              <h3 className="label mt-12">Also served</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-ink/80">Lunch special</dt>
                  <dd className="mt-1 font-mono text-ink/65">
                    {business.serviceWindows.lunchSpecial}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/80">Peruvian breakfast</dt>
                  <dd className="mt-1 font-mono text-ink/65">
                    {business.serviceWindows.breakfast}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>Getting here</Eyebrow>
            </Reveal>
            <Reveal className="mt-8 space-y-5 leading-relaxed text-ink/75" stagger>
              <p>
                We&apos;re on Greenpoint Ave in Sunnyside, a short walk from the 46
                St–Bliss St stop on the 7.
              </p>
              <p>
                Street parking is available on and around Greenpoint Ave — it&apos;s
                usually easier a block off the avenue.
              </p>
              <p>Heated seating outside, and a private room for larger groups.</p>
            </Reveal>
            <Reveal>
              <address className="mt-10 not-italic leading-relaxed text-ink/80">
                {business.address.street}
                <br />
                {business.address.locality}, {business.address.region} {business.address.postalCode}
              </address>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>Reach us</Eyebrow>
            </Reveal>
            <Reveal className="mt-8 space-y-6" stagger>
              <div>
                <p className="label">Phone — the fastest way to book</p>
                <a
                  href={business.phoneHref}
                  className="mt-2 block font-display text-3xl text-ink transition-colors hover:text-gold"
                >
                  {business.phone}
                </a>
              </div>
              <div>
                <p className="label">Email</p>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-2 block break-all font-display text-xl text-ink transition-colors hover:text-gold"
                >
                  {business.email}
                </a>
              </div>
              <div>
                <p className="label">Instagram — the daily lunch plate</p>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-display text-xl text-ink transition-colors hover:text-gold"
                >
                  {business.social.instagramHandle}
                </a>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="label mt-12">Delivery</h3>
              <ul className="mt-5 space-y-2.5">
                {business.ordering.map((platform) => (
                  <li key={platform.name} className="text-ink/75">
                    {platform.name}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Ordering windows on delivery apps close earlier than the dining room does.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-ink/12">
        <RevealText as="h2" className="font-display text-display-md text-ink">
          No booking app. Just call us.
        </RevealText>
        <Reveal>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/75">
            We don&apos;t take reservations through a booking service. Ring the restaurant
            and we&apos;ll sort it out — especially worth doing for larger parties and on
            weekends.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <Button href={business.phoneHref}>Call {business.phone}</Button>
        </Reveal>
      </Section>
    </>
  )
}
