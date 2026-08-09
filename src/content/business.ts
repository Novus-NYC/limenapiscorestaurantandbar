import type { OpeningHours } from "./types"

/**
 * Single source of truth for business facts.
 *
 * HOURS: the research found four conflicting versions (website, Yelp, TripAdvisor,
 * Postmates). We publish the business's own stated hours and surface a "call to
 * confirm" note. If the real hours differ, correct them here and nowhere else.
 */
export const business = {
  /** Third-party platforms and the storefront sign all use the tilde; the legacy domain omits it. */
  name: "Limeña",
  fullName: "Limeña Pisco Bar & Restaurant",
  tagline: "Peruvian Cuisine & Pisco Bar",
  /** Instagram bio, verbatim in spirit — the flag is part of how they write it. */
  shortDescription:
    "A family-run Peruvian kitchen and pisco bar in Sunnyside, Queens.",

  address: {
    street: "47-14 Greenpoint Ave",
    locality: "Sunnyside",
    region: "NY",
    postalCode: "11104",
    borough: "Queens",
    full: "47-14 Greenpoint Ave, Sunnyside, NY 11104",
  },

  phone: "(347) 527-1816",
  phoneHref: "tel:+13475271816",
  email: "limenapiscobar@gmail.com",

  hours: [
    { label: "Sunday – Thursday", hours: "12:00 pm – 10:00 pm" },
    { label: "Friday – Saturday", hours: "12:00 pm – 12:00 am" },
  ] satisfies OpeningHours[],
  hoursNote: "Hours can shift on holidays — give us a call to confirm.",

  /** Service windows stated on the menu itself rather than as opening hours. */
  serviceWindows: {
    lunchSpecial: "Mon – Fri, 12:00 – 3:00 pm",
    breakfast: "Weekends, 9:30 am – 1:00 pm",
  },

  social: {
    instagram: "https://www.instagram.com/limenapiscobarnyc/",
    instagramHandle: "@limenapiscobarnyc",
  },

  /** Ordering is handled entirely by third parties; we link out rather than fake a cart. */
  ordering: [
    { name: "DoorDash", url: "https://www.doordash.com/" },
    { name: "Uber Eats", url: "https://www.ubereats.com/" },
    { name: "Grubhub", url: "https://www.grubhub.com/" },
  ],

  /**
   * Amenities confirmed for publication. Deliberately excluded:
   * live música criolla (review-sourced only, no schedule to promise) and the
   * "Latinx- & women-owned" claim (single third-party mirror, unverified).
   */
  amenities: [
    "Heated outdoor seating",
    "Private dining",
    "Full bar",
    "Catering",
    "Street parking",
  ],

  catering: {
    // Straight from the official site's own About section.
    blurb:
      "We cater a wide range of occasions — family gatherings, holidays, and special events.",
  },
} as const

/** Aggregate ratings vary 4.4–4.7 across platforms; we cite the range, not a single figure. */
export const socialProof = {
  ratingRange: "4.4 – 4.7",
  platforms: ["DoorDash", "Uber Eats", "Yelp", "TripAdvisor"],
} as const
