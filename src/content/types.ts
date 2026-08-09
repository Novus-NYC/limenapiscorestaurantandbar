/**
 * Content schema for the Limeña site.
 *
 * Everything here is normalized from `raw messy data/`. Two rules govern this layer:
 *
 * 1. Nothing is invented. A fact absent from the research is `null`, never guessed.
 * 2. Every fact carries its `confidence`, so the UI can decide what to assert
 *    confidently, what to soften, and what to withhold.
 */

/** How well-supported a piece of content is by the source research. */
export type Confidence =
  /** Stated by the business itself (official site, its own ordering system). */
  | "official"
  /** Corroborated by delivery platforms carrying the restaurant's own menu data. */
  | "platform"
  /** Named repeatedly in guest reviews but never on an official surface. */
  | "reported"

export interface Price {
  /** Dollars. `null` when no reliable price was found — the UI then shows no price at all. */
  amount: number | null
  /** True when the item has size/protein variants and this is the entry price ("$14+"). */
  from?: boolean
  /** Shown as fine print, e.g. a known cross-platform price discrepancy. */
  note?: string
}

export interface MenuItem {
  slug: string
  /** Spanish name as the restaurant writes it. */
  name: string
  /** English gloss, shown secondary. `null` when the name needs no translation. */
  nameEn: string | null
  description: string | null
  price: Price
  confidence: Confidence
  /** Flagged "Popular" / most-ordered on the delivery platforms. */
  popular?: boolean
  /** Key into the media manifest, when we have a real photo of this dish. */
  image?: string
  /** Free-form tags used by the menu filter UI. */
  tags?: string[]
}

export interface MenuCategory {
  slug: string
  name: string
  nameEn: string | null
  /** One line of orientation for guests unfamiliar with Peruvian menus. */
  blurb: string | null
  /** Service-window constraint, e.g. weekend brunch. */
  availability: string | null
  items: MenuItem[]
}

export interface GalleryImage {
  /** Key into the media manifest. */
  id: string
  alt: string
  /** Displayed caption. Kept descriptive — we never assert a dish name we can't verify. */
  caption: string
  category: "food" | "space"
}

export interface OpeningHours {
  /** Days grouped as the business presents them. */
  label: string
  hours: string
}
