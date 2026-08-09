import type { GalleryImage } from "./types"

/**
 * The eight photographs the restaurant published, plus the storefront and room.
 *
 * Captions describe what is visibly in frame. Where a dish can't be identified with
 * certainty from the photo alone, the caption stays descriptive rather than naming a
 * menu item we'd be guessing at.
 */
export const gallery: GalleryImage[] = [
  {
    id: "storefront-greenpoint-ave",
    alt: "The Limeña storefront on Greenpoint Avenue: red brick, a deep burgundy entry, and a gold script sign.",
    caption: "47-14 Greenpoint Ave",
    category: "space",
  },
  {
    id: "interior-dining-room",
    alt: "The dining room, with wood floors, a green accent wall, and framed Peruvian prints.",
    caption: "The dining room",
    category: "space",
  },
  {
    id: "dish-lomo-saltado-arroz",
    alt: "Lomo saltado with a mold of white rice flying a small Peruvian flag, and french fries alongside.",
    caption: "Lomo Saltado",
    category: "food",
  },
  {
    id: "dish-papa-huancaina",
    alt: "Papa a la huancaína — potatoes in a pale yellow ají amarillo sauce with boiled egg and black olives.",
    caption: "Papa a la Huancaína",
    category: "food",
  },
  {
    id: "dish-tallarin-saltado-carne",
    alt: "Tallarín saltado — spaghetti tossed with seared beef, red onion, tomato, and cilantro.",
    caption: "Tallarín Saltado de Carne",
    category: "food",
  },
  {
    id: "dish-tallarines-verdes",
    alt: "Green pesto-sauced Peruvian noodles finished with shaved cheese.",
    caption: "Tallarines Verdes",
    category: "food",
  },
  {
    id: "dish-lomo-saltado-tacu",
    alt: "Seared beef and red onion in sauce, served over a golden fried rice cake.",
    caption: "From the kitchen",
    category: "food",
  },
  {
    id: "dish-steak-plancha",
    alt: "Grilled steak on a cast-iron plancha with roasted potatoes and a cup of salsa criolla.",
    caption: "From the grill",
    category: "food",
  },
]

export const galleryFood = gallery.filter((g) => g.category === "food")
export const gallerySpace = gallery.filter((g) => g.category === "space")
