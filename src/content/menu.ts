import type { MenuCategory } from "./types"

/**
 * The menu, normalized from the official site, the restaurant's own online-ordering
 * system, and the delivery platforms that mirror it.
 *
 * Conventions:
 * - `amount: null` means no reliable price was found. The UI renders no price rather
 *   than inventing one. These are real dishes named across multiple sources.
 * - Where the site showed "$14.00+" and a platform showed a flat $14, we take the
 *   site's `from: true` framing, since variants explain the gap.
 * - Where sources genuinely conflict (Lomo Saltado $12 vs $23), we publish the
 *   delivery-platform price and record the conflict in `note`.
 */
export const menu: MenuCategory[] = [
  {
    slug: "lunch-special",
    name: "Lunch Special",
    nameEn: null,
    blurb: "Soup of the day and a main course, made fresh each afternoon.",
    availability: "Mon – Fri, 12:00 – 3:00 pm",
    items: [
      {
        slug: "lunch-special",
        name: "Lunch Special",
        nameEn: null,
        description:
          "Homemade lunch — soup of the day plus a main course. The plate changes daily; check Instagram for today's menu.",
        price: { amount: 16 },
        confidence: "platform",
        popular: true,
      },
    ],
  },

  {
    slug: "appetizers",
    name: "Entradas",
    nameEn: "Appetizers",
    blurb:
      "Causas, anticuchos, and the cold-and-creamy classics that open a Peruvian table.",
    availability: null,
    items: [
      {
        slug: "causas",
        name: "Causas",
        nameEn: null,
        description:
          "Softly mashed potato whipped with lime and ají amarillo, filled with avocado. Choice of atún, pollo, or langostinos.",
        price: { amount: 14, from: true },
        confidence: "official",
        popular: true,
        tags: ["cold", "signature"],
      },
      {
        slug: "causa-acevichada",
        name: "Causa Acevichada",
        nameEn: null,
        description: "Our causa, crowned with fish ceviche.",
        price: { amount: 19 },
        confidence: "official",
        tags: ["cold", "seafood"],
      },
      {
        slug: "papa-a-la-huancaina",
        name: "Papa a la Huancaína",
        nameEn: null,
        description:
          "Potatoes under a warm ají amarillo cream, with boiled egg and botija olives.",
        price: { amount: 13, from: true },
        confidence: "official",
        image: "dish-papa-huancaina",
        tags: ["vegetarian", "classic"],
      },
      {
        slug: "yuca-a-la-huancaina",
        name: "Yuca a la Huancaína",
        nameEn: null,
        description:
          "Fried cassava under the same huancaína sauce, with boiled egg and botija olives.",
        price: { amount: 13, from: true },
        confidence: "official",
        tags: ["vegetarian"],
      },
      {
        slug: "anticuchos",
        name: "Anticuchos",
        nameEn: null,
        description:
          "Tender cow's heart marinated in Peruvian spices, served with potatoes and corn.",
        price: { amount: 20 },
        confidence: "platform",
        tags: ["grilled", "signature"],
      },
      {
        slug: "anticuchos-con-rachi",
        name: "Anticuchos con Rachi",
        nameEn: null,
        description: "Grilled beef heart skewers served with rachi.",
        price: { amount: 28 },
        confidence: "platform",
        tags: ["grilled"],
      },
      {
        slug: "calamar-frito",
        name: "Calamar Frito",
        nameEn: "Fried Calamari",
        description:
          "Fried calamari with cassava, salsa criolla, and tartar sauce.",
        price: { amount: 18 },
        confidence: "platform",
        tags: ["seafood", "fried"],
      },
      {
        slug: "choros-a-la-chalaca",
        name: "Choros a la Chalaca",
        nameEn: null,
        description:
          "Fresh mussels topped with onion, tomato, corn, and cilantro, marinated in lime.",
        price: { amount: 20 },
        confidence: "platform",
        tags: ["seafood", "cold"],
      },
      {
        slug: "pulpo-a-la-parrilla",
        name: "Pulpo a la Parrilla",
        nameEn: "Grilled Octopus",
        description:
          "Octopus marinated in anticuchera sauce, served with potato and corn.",
        price: { amount: 25 },
        confidence: "platform",
        tags: ["seafood", "grilled"],
      },
      {
        slug: "alitas-acevichadas",
        name: "Alitas Acevichadas",
        nameEn: "Ceviche-Style Wings",
        description: "Six chicken wings in a special sauce, with french fries.",
        price: { amount: 18 },
        confidence: "platform",
      },
      {
        slug: "jalea",
        name: "Jalea",
        nameEn: null,
        description: "Crisp fried seafood platter — a Peruvian coastal staple.",
        price: { amount: null },
        confidence: "reported",
        tags: ["seafood", "fried"],
      },
    ],
  },

  {
    slug: "ceviches",
    name: "Ceviches",
    nameEn: null,
    blurb:
      "The dish guests mention most. Cut to order and cured in lime the moment it's ordered.",
    availability: null,
    items: [
      {
        slug: "ceviche-de-pescado",
        name: "Ceviche de Pescado",
        nameEn: "Fish Ceviche",
        description: "Fish marinated in lime juice and Peruvian spices.",
        price: { amount: 21, from: true },
        confidence: "official",
        tags: ["seafood", "signature"],
      },
      {
        slug: "ceviche-mixto",
        name: "Ceviche Mixto",
        nameEn: null,
        description:
          "Fish, shrimp, calamari, and octopus marinated in lime juice and Peruvian spices.",
        price: { amount: 25, from: true },
        confidence: "official",
        popular: true,
        tags: ["seafood", "signature"],
      },
      {
        slug: "ceviche-de-camarones",
        name: "Ceviche de Camarones",
        nameEn: "Shrimp Ceviche",
        description: "Shrimp marinated in lime juice and Peruvian spices.",
        price: { amount: 25 },
        confidence: "official",
        tags: ["seafood"],
      },
      {
        slug: "leche-de-tigre",
        name: "Leche de Tigre",
        nameEn: null,
        description: "Citrus-cured seafood in its own marinade. A Peruvian classic.",
        price: { amount: 21, from: true },
        confidence: "official",
        tags: ["seafood", "signature"],
      },
    ],
  },

  {
    slug: "sopas",
    name: "Sopas",
    nameEn: "Soups",
    blurb: null,
    availability: null,
    items: [
      {
        slug: "aguadito-de-pollo",
        name: "Aguadito de Pollo",
        nameEn: null,
        description: "Chicken and rice soup built on a base of fresh cilantro.",
        price: { amount: 15 },
        confidence: "platform",
      },
      {
        slug: "patasca",
        name: "Patasca",
        nameEn: null,
        description:
          "Homemade Peruvian soup of cow's belly, cow's feet, and white hominy.",
        price: { amount: 22 },
        confidence: "platform",
      },
      {
        slug: "chupe-de-camarones",
        name: "Chupe de Camarones",
        nameEn: "Shrimp Chowder",
        description: "Peruvian shrimp chowder finished with a poached egg.",
        price: { amount: 26 },
        confidence: "platform",
        tags: ["seafood"],
      },
    ],
  },

  {
    slug: "carnes",
    name: "Carnes",
    nameEn: "Meats",
    blurb: null,
    availability: null,
    items: [
      {
        slug: "lomo-saltado",
        name: "Lomo Saltado",
        nameEn: null,
        description:
          "Peru's great stir-fry — beef seared hard with red onion and tomato, served with rice and fries.",
        price: {
          amount: 23,
          note: "One listing shows an older $12 price; $23 is current.",
        },
        confidence: "platform",
        image: "dish-lomo-saltado-arroz",
        tags: ["signature"],
      },
      {
        slug: "pollo-saltado",
        name: "Pollo Saltado",
        nameEn: null,
        description: "The same wok-fired treatment, made with chicken.",
        price: { amount: null },
        confidence: "reported",
      },
      {
        slug: "aji-de-gallina",
        name: "Ají de Gallina",
        nameEn: null,
        description: null,
        price: { amount: 23 },
        confidence: "platform",
      },
    ],
  },

  {
    slug: "tallarines",
    name: "Tallarines",
    nameEn: "Noodles",
    blurb: "Peru's Italian inheritance, cooked Peruvian.",
    availability: null,
    items: [
      {
        slug: "tallarin-saltado-de-carne",
        name: "Tallarín Saltado de Carne",
        nameEn: "Beef",
        description: "Spaghetti tossed in a traditional Peruvian sauce.",
        price: { amount: 23 },
        confidence: "platform",
        popular: true,
        image: "dish-tallarin-saltado-carne",
      },
      {
        slug: "tallarin-saltado-de-pollo",
        name: "Tallarín Saltado de Pollo",
        nameEn: "Chicken",
        description: "Spaghetti tossed in a traditional Peruvian sauce.",
        price: { amount: 22 },
        confidence: "platform",
      },
      {
        // Not on any published menu we could reach, but the restaurant photographed it
        // themselves — so it's listed as reported, with no price invented for it.
        slug: "tallarines-verdes",
        name: "Tallarines Verdes",
        nameEn: "Peruvian Pesto",
        description:
          "Spaghetti in Peru's own pesto — basil and spinach blended with cheese — finished with shavings on top.",
        price: { amount: null },
        confidence: "reported",
        image: "dish-tallarines-verdes",
        tags: ["vegetarian"],
      },
    ],
  },

  {
    slug: "pollo-a-la-brasa",
    name: "Pollo a la Brasa",
    nameEn: "Rotisserie Chicken",
    blurb: "Marinated in our own recipe and turned slowly over the fire.",
    availability: null,
    items: [
      {
        slug: "pollo-a-la-brasa",
        name: "Pollo a la Brasa",
        nameEn: null,
        description: "Rotisserie chicken marinated in our authentic Peruvian recipe.",
        price: { amount: 13, from: true },
        confidence: "platform",
        tags: ["signature"],
      },
      {
        slug: "mostrito",
        name: "Mostrito",
        nameEn: null,
        description: null,
        price: { amount: 20 },
        confidence: "platform",
        popular: true,
      },
      {
        slug: "combo-1",
        name: "Combo 1",
        nameEn: null,
        description: null,
        price: { amount: 32 },
        confidence: "platform",
        popular: true,
      },
    ],
  },

  {
    slug: "chaufas",
    name: "Chaufas",
    nameEn: "Fried Rice",
    blurb: "Chifa — the Peruvian-Chinese kitchen, over a century in the making.",
    availability: null,
    items: [
      {
        slug: "chaufa-de-pollo",
        name: "Chaufa de Pollo",
        nameEn: "Chicken",
        description: "Peruvian-Chinese fried rice.",
        price: { amount: 22 },
        confidence: "platform",
      },
      {
        slug: "chaufa-de-mariscos",
        name: "Chaufa de Mariscos",
        nameEn: "Seafood",
        description: "Peruvian-Chinese fried rice with seafood.",
        price: { amount: null },
        confidence: "reported",
        tags: ["seafood"],
      },
    ],
  },

  {
    slug: "mariscos",
    name: "Mariscos",
    nameEn: "Seafood",
    blurb: "Traditional Peruvian plates built around the day's seafood.",
    availability: null,
    items: [
      {
        slug: "pescado-a-lo-macho",
        name: "Pescado a lo Macho",
        nameEn: null,
        description: "Fish under a rich seafood sauce. Generous enough to share.",
        price: { amount: null },
        confidence: "reported",
        tags: ["seafood"],
      },
      {
        slug: "arroz-de-mariscos",
        name: "Arroz de Mariscos",
        nameEn: "Seafood Rice",
        description: null,
        price: { amount: null },
        confidence: "reported",
        tags: ["seafood"],
      },
      {
        slug: "embarque-marino",
        name: "Embarque Marino",
        nameEn: null,
        description: "A seafood sampler meant for the middle of the table.",
        price: { amount: null },
        confidence: "reported",
        tags: ["seafood", "to-share"],
      },
    ],
  },

  {
    slug: "postres",
    name: "Postres",
    nameEn: "Desserts",
    blurb: null,
    availability: null,
    items: [
      {
        slug: "tres-leches",
        name: "Tres Leches",
        nameEn: null,
        description: "Sponge cake soaked in three milks.",
        price: { amount: null },
        confidence: "reported",
      },
      {
        slug: "crema-volteada",
        name: "Crema Volteada",
        nameEn: "Peruvian Flan",
        description: null,
        price: { amount: null },
        confidence: "reported",
      },
    ],
  },

  {
    slug: "desayuno",
    name: "Desayuno Peruano",
    nameEn: "Peruvian Breakfast",
    blurb: "A weekend-only table, the way Sunday morning is eaten in Lima.",
    availability: "Weekends, 9:30 am – 1:00 pm",
    items: [],
  },

  {
    slug: "bebidas",
    name: "Bebidas",
    nameEn: "Drinks",
    blurb: null,
    availability: null,
    items: [
      {
        slug: "inca-kola",
        name: "Inca Kola",
        nameEn: null,
        description: "Peru's golden soda.",
        price: { amount: 4 },
        confidence: "platform",
      },
      {
        slug: "chicha-morada",
        name: "Chicha Morada",
        nameEn: null,
        description:
          "Homemade purple corn drink, spiced and chilled. Available by the pitcher.",
        price: { amount: null },
        confidence: "reported",
      },
    ],
  },
]

/**
 * The bar. Named across guest reviews and the restaurant's own social presence, but
 * no cocktail price was ever published — so this is presented as a list, not a
 * priced menu. Pisco is the house spirit and the reason most people come.
 */
export const barMenu = {
  blurb:
    "Pisco is the house spirit — Peru's grape brandy, shaken into sours the kitchen has been quietly making variations on since day one.",
  piscoSours: [
    { name: "Classic", note: "Pisco, lime, egg white, bitters." },
    { name: "Butterfly", note: "Butterfly pea flower — it changes color in the glass." },
    { name: "Mora", note: "Blackberry." },
    { name: "Hibiscus", note: null },
    { name: "Lychee", note: null },
  ],
  other: ["The Gem", "Black Manhattan", "Red Sangria"],
  note: "Full bar. Must be 21+ to order.",
} as const

/** Flat index for search/filter UI and for building /menu/[category] routes. */
export const allMenuItems = menu.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.name, categorySlug: category.slug }))
)

export const menuCategoryBySlug = new Map(menu.map((c) => [c.slug, c]))
