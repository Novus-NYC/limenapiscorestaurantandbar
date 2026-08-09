/**
 * Social proof.
 *
 * IMPORTANT: the source research paraphrased every review — no verbatim guest quote
 * was ever captured, and no reviewer was named. So this file contains *themes*, not
 * testimonials, and the UI must present them as such. Do not add quotation marks or
 * attribute these to a person; that would be fabricating a review.
 */
export interface ReviewTheme {
  title: string
  /** Our own summary of what recurs across platforms. Written in our voice, not a guest's. */
  body: string
  /** Where the pattern showed up, for internal traceability. */
  sources: string[]
}

export const praiseThemes: ReviewTheme[] = [
  {
    title: "The ceviche",
    body: "Freshness of the ceviche is the single most repeated compliment across every platform we appear on.",
    sources: ["Wanderlog", "Wheree", "Postcard", "DoorDash"],
  },
  {
    title: "The pisco sours",
    body: "Guests single out the range — especially the butterfly and the blackberry mora.",
    sources: ["Postcard", "TikTok", "Wheree"],
  },
  {
    title: "The welcome",
    body: "Attentive service comes up constantly, and so does the owner stopping by the table.",
    sources: ["Postcard", "Wanderlog"],
  },
  {
    title: "The plates people come back for",
    body: "Lomo saltado, anticuchos, and the rotisserie chicken are named as favorites more than anything else.",
    sources: ["Wanderlog", "Wheree"],
  },
  {
    title: "Celebrations",
    body: "Birthdays and quinceañeras turn up often in reviews — the room takes well to a party.",
    sources: ["Postcard"],
  },
]

/** Press. One mention only — stated plainly, without inflating it into an award. */
export const press = [
  {
    outlet: "QNS",
    date: "August 2026",
    summary:
      "Named a Peruvian staple of Sunnyside when the New York State Labor Commissioner toured neighborhood small businesses.",
  },
]
