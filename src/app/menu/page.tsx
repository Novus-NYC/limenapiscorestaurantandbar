import type { Metadata } from "next"
import { menu } from "@/content/menu"
import { business } from "@/content/business"
import { MenuBrowser } from "@/components/menu/MenuBrowser"
import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/kit"
import { Reveal } from "@/components/motion/Reveal"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Ceviches, causas, anticuchos, pollo a la brasa, lomo saltado and chaufa — the full Peruvian menu at Limeña in Sunnyside, Queens.",
  alternates: { canonical: "/menu" },
}

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Carta"
        title="The menu"
        intro="Coastal Peru, the anticuchera grill, and a century of chifa cooking — laid out the way we'd bring it to your table."
      >
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Button href={business.phoneHref}>Call to book</Button>
          <Button href="/bar" variant="outline">
            The pisco bar
          </Button>
        </Reveal>
      </PageHeader>

      <div className="shell">
        <MenuBrowser categories={menu} />

        <div className="border-t border-ink/12 py-14">
          <p className="max-w-prose text-sm leading-relaxed text-ink/70">
            Prices come from our online ordering menu and can differ in the dining room —
            call us at{" "}
            <a href={business.phoneHref} className="text-gold hover:underline">
              {business.phone}
            </a>{" "}
            to confirm. Some plates are made in limited numbers each day and sell out. A
            few dishes are listed without a price because it varies by size or catch;
            ask your server. Must be 21+ to order alcohol.
          </p>
        </div>
      </div>
    </>
  )
}
