import { business } from "@/content/business"
import { faq } from "@/content/faq"

/**
 * Schema.org Restaurant node, generated from the content layer rather than hand-written,
 * so published hours and the hours in structured data can't drift apart.
 *
 * Note: `openingHoursSpecification` encodes the business's own stated hours. The source
 * research found four conflicting versions — see the note in content/business.ts.
 */
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.fullName,
  description: business.shortDescription,
  servesCuisine: ["Peruvian", "Latin American", "Peruvian-Chinese"],
  priceRange: "$$",
  telephone: business.phone,
  email: business.email,
  image: "/media/dish-lomo-saltado-arroz-800.webp",
  logo: "/media/logo-limena.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: "US",
  },
  sameAs: [business.social.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "00:00",
    },
  ],
  amenityFeature: business.amenities.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  hasMenu: "/menu",
}

/** FAQPage node for the /faq route. */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}
