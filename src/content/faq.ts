import { business } from "./business"

/**
 * FAQ. Every answer traces to something in the research — questions we could only
 * answer by guessing (reservations platform, exact opening date, dietary specifics)
 * are deliberately absent rather than answered vaguely.
 */
export const faq = [
  {
    question: "Do you take reservations?",
    answer: `We don't use an online booking service — call us at ${business.phone} and we'll take care of it, especially for larger parties.`,
  },
  {
    question: "Is there outdoor seating?",
    answer: "Yes, and it's heated. We also have a private dining option for groups.",
  },
  {
    question: "Do you cater?",
    answer: `${business.catering.blurb} Call ${business.phone} or email ${business.email} and we'll build a menu around your event.`,
  },
  {
    question: "Can I order delivery?",
    answer:
      "Yes — we're on DoorDash, Uber Eats, and Grubhub. Ordering hours on those platforms can close earlier than the dining room does.",
  },
  {
    question: "What is pisco?",
    answer:
      "Peru's national spirit: a brandy distilled from grapes, unaged and clear. It's the backbone of the pisco sour, and the reason there's a bar in our name.",
  },
  {
    question: "Where are you, and is there parking?",
    answer: `${business.address.full}, in Sunnyside, Queens. Street parking is available on and around Greenpoint Ave.`,
  },
  {
    question: "Do you have a lunch special?",
    answer: `${business.serviceWindows.lunchSpecial}. It's soup of the day plus a main course, and the plate changes daily — we post it to Instagram.`,
  },
  {
    question: "Do you serve breakfast?",
    answer: `Peruvian breakfast is served ${business.serviceWindows.breakfast.toLowerCase()}.`,
  },
]
