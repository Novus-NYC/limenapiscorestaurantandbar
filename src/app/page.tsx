import Link from "next/link"
import { business, socialProof } from "@/content/business"
import { menu } from "@/content/menu"
import { praiseThemes } from "@/content/reviews"
import { Img } from "@/components/ui/Img"
import { Button, Eyebrow, PriceTag, Section, Tag } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"
import { RevealText } from "@/components/motion/RevealText"
import { GrowRule } from "@/components/motion/GrowRule"
import { PinnedChapter } from "@/components/motion/PinnedChapter"
import { Hero } from "@/components/site/Hero"

/** The four dishes with both a real photograph and a confirmed price. */
const signatures = menu
  .flatMap((c) => c.items.map((i) => ({ ...i, categorySlug: c.slug })))
  .filter((i) => i.image && i.price.amount !== null)

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Statement ─────────────────────────────────────────────── */}
      <Section className="max-w-5xl">
        <Reveal>
          <Eyebrow>Sunnyside, Queens</Eyebrow>
        </Reveal>
        <RevealText
          as="h2"
          className="mt-8 font-display text-display-md text-ink"
        >
          Every dish tells a story. Ours begins in Lima.
        </RevealText>
        <Reveal className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/75" stagger>
          <p>
            We cook the Peru we grew up with — the coastal kitchen of ceviche and leche de
            tigre, the smoke of the anticuchera grill, and the chifa tradition that has
            been quietly Peruvian for more than a century.
          </p>
          <p>
            It&apos;s a family table on Greenpoint Ave, in a room that used to be an Irish
            pub. Come hungry, stay for the pisco.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4" stagger y={16}>
          {[
            { figure: socialProof.ratingRange, label: "Rated across platforms" },
            { figure: "12", label: "Menu categories" },
            { figure: "5", label: "Pisco sours" },
            { figure: "2023", label: "Serving Sunnyside since" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-gold lg:text-5xl">{stat.figure}</p>
              <p className="label mt-3 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <div className="shell">
        <GrowRule />
      </div>

      {/* ── Pinned chapters ───────────────────────────────────────── */}
      <PinnedChapter
        index="01"
        eyebrow="The cold kitchen"
        media={
          <Img
            id="dish-papa-huancaina"
            alt="Papa a la huancaína — potatoes in a pale yellow ají amarillo sauce with boiled egg and black olives."
            sizes="(min-width: 1024px) 544px, 92vw"
            className="h-full w-full object-cover"
          />
        }
      >
        <h2 className="font-display text-display-md text-ink">Ceviche, cut to order</h2>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Nothing sits. Fish is cut when you order it and cured in lime right then, so it
            arrives firm and sharp and cold — the way it&apos;s eaten on the coast.
          </p>
          <p>
            It&apos;s the dish guests name more than any other, across every platform
            we&apos;re on. Start with the mixto if you want the whole ocean on one plate.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Tag tone="gold">Ceviche mixto</Tag>
          <Tag>Leche de tigre</Tag>
          <Tag>Causa acevichada</Tag>
        </div>
        <Button href="/menu#ceviches" variant="outline" className="mt-10">
          See the ceviches
        </Button>
      </PinnedChapter>

      <PinnedChapter
        index="02"
        eyebrow="The fire"
        flip
        media={
          <Img
            id="dish-lomo-saltado-tacu"
            alt="Seared beef and red onion in sauce, served over a golden fried rice cake."
            sizes="(min-width: 1024px) 544px, 92vw"
            className="h-full w-full object-cover"
          />
        }
      >
        <h2 className="font-display text-display-md text-ink">
          Wok, grill, rotisserie
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Lomo saltado is a stir-fry, and it has to be cooked like one — the pan hot
            enough that the beef takes colour before the onion softens.
          </p>
          <p>
            Alongside it: anticuchos off the grill, and pollo a la brasa marinated in our
            own recipe and turned slowly over the fire until the skin gives.
          </p>
        </div>
        <Button href="/menu#carnes" variant="outline" className="mt-10">
          See the mains
        </Button>
      </PinnedChapter>

      <PinnedChapter
        index="03"
        eyebrow="The bar"
        media={
          /* The storefront rather than the dining room here: it's our highest-resolution
             photograph of the place, and it fills this tall frame without upscaling. */
          <Img
            id="storefront-greenpoint-ave"
            alt="The Limeña storefront on Greenpoint Avenue: red brick, a deep burgundy entry, and a gold script sign."
            sizes="(min-width: 1024px) 544px, 92vw"
            className="h-full w-full object-cover"
          />
        }
      >
        <h2 className="font-display text-display-md text-ink">
          Pisco is in our name for a reason
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Peru&apos;s grape brandy, shaken with lime and egg white into a sour — then
            pushed sideways five different ways. The butterfly one changes colour in the
            glass. The mora is blackberry, and it&apos;s the one people come back for.
          </p>
        </div>
        <Button href="/bar" variant="outline" className="mt-10">
          Explore the pisco bar
        </Button>
      </PinnedChapter>

      <div className="shell">
        <GrowRule />
      </div>

      {/* ── Signature dishes ──────────────────────────────────────── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>From the kitchen</Eyebrow>
            </Reveal>
            <RevealText as="h2" className="mt-6 font-display text-display-md text-ink">
              What people order
            </RevealText>
          </div>
          <Reveal>
            <Link
              href="/menu"
              className="font-mono text-label uppercase text-gold underline-offset-8 hover:underline"
            >
              Full menu →
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger y={28}>
          {signatures.map((item) => (
            <Link
              key={item.slug}
              href={`/menu#${item.categorySlug}`}
              className="group block overflow-hidden rounded-card border border-ink/12 bg-white/70 transition-colors duration-500 ease-cinematic hover:border-gold/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Img
                  id={item.image!}
                  alt={item.description ?? item.name}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                  className="h-full w-full object-cover transition-transform duration-cinematic ease-cinematic group-hover:scale-[1.06]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-xl text-ink">{item.name}</h3>
                  {item.nameEn && <p className="label mt-1.5">{item.nameEn}</p>}
                </div>
                <PriceTag price={item.price} />
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* ── What guests say ───────────────────────────────────────── */}
      <Section className="border-y border-ink/12">
        <Reveal>
          <Eyebrow>What guests mention most</Eyebrow>
        </Reveal>
        <Reveal className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3" stagger y={20}>
          {praiseThemes.map((theme, i) => (
            <div key={theme.title}>
              <span className="font-mono text-label text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">{theme.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{theme.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-14">
          <p className="max-w-prose text-sm leading-relaxed text-ink/65">
            Summarized from guest reviews across {socialProof.platforms.join(", ")}. We
            don&apos;t reprint individual reviews here — read them in full on any of those
            platforms.
          </p>
        </Reveal>
      </Section>

      {/* ── Visit ─────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Come see us</Eyebrow>
            </Reveal>
            <RevealText as="h2" className="mt-6 font-display text-display-lg text-ink">
              47-14 Greenpoint Ave
            </RevealText>
            <Reveal className="mt-8 space-y-6" stagger>
              <p className="max-w-prose text-lg leading-relaxed text-ink/75">
                Heated seating outside, a private room for a party, and a bar that stays
                open till midnight on weekends.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={business.phoneHref}>Call {business.phone}</Button>
                <Button href="/visit" variant="outline">
                  Directions &amp; hours
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal y={30}>
            {/* Held to 26rem: this photograph is 574px wide at source, and a larger
                frame would ask for pixels that don't exist. */}
            <div className="mx-auto max-w-[26rem] overflow-hidden rounded-card border border-ink/12">
              <Img
                id="interior-dining-room"
                alt="The dining room, with wood floors, a green accent wall, and framed Peruvian prints."
                sizes="(min-width: 1024px) 416px, 92vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
