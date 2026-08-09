# Limeña Pisco Restaurant & Bar — Full Business Research Dossier

## Sources Checked

| Source | Status |
|---|---|
| Provided site (limenapiscorestaurantandbar.currentlvl.com) | ✅ Found — home, menu (partial, JS-gated), gallery pages fetched |
| DoorDash | ✅ Found — store page, featured items, reviews |
| Uber Eats | ✅ Found — full item list w/ descriptions |
| Postmates (same backend as Uber Eats) | ✅ Found — most complete itemized menu w/ prices & like % |
| order.online (DoorDash storefront white-label) | ✅ Found — hours, categories, contact email (decoded from page data) |
| Grubhub / Seamless | ⚠️ Found (listing exists) — menu items not rendered without JS ("Prepare your taste buds..." placeholder only) |
| Yelp | ⚠️ Partial — robots-blocked for direct fetch; used search-snippet data only (photos count, hours, some menu items with prices, attributes) |
| Google Maps / Google Business Profile | ⚠️ Not directly fetchable — no direct listing surfaced in search; aggregator sites (Roadtrippers, Wheree, chefi.biz) reflect Google-sourced ratings/hours instead |
| TripAdvisor | ✅ Found — ranked #46 of 60 Sunnyside restaurants, hours, features, one review |
| Instagram (@limenapiscobarnyc) | ⚠️ Partial — robots-blocked for direct fetch; bio, follower/post counts, and a few post captions found via search snippets |
| Facebook | ❌ Not found — no distinct Facebook page surfaced in search |
| TikTok | ⚠️ Partial — one third-party TikTok video found referencing the bar (not an owned account) |
| News/press | ✅ Found — one 2026 QNS.com article (NYS Labor Commissioner tour of Sunnyside businesses) |
| Wanderlog | ✅ Found — aggregated review themes and quotes |
| Postcard.inc | ✅ Found — aggregated reviews |
| Wheree.com | ✅ Found — aggregated overview/reviews |
| Outgoing.world | ✅ Found — curated blurb, tips, hours |
| res-menu.com / res-menu.net (community-maintained menu mirror) | ✅ Found — descriptive "About" copy, review excerpts, additional menu items |
| MenuPix | ⚠️ Found — listing only, no item-level text extracted |
| OpenTable | ❌ Not found — no OpenTable listing surfaced (search returned unrelated "Sunnyside"-named restaurants elsewhere in the US) |
| NYC Health Dept (ABC Eats) | ⚠️ Referenced by DoorDash/Postmates as a linked inspection source; not independently fetched |

---

## Business Identity

- **Name (as used across platforms):** "Limena Pisco Restaurant & Bar" (official website), "Limeña Pisco Bar & Restaurant" (Yelp, TripAdvisor, DoorDash/Uber Eats/Postmates, Instagram handle), "Limeña Pisco Bar" (TripAdvisor short form), "La Limeña Pisco Restaurant" (used once in a Postcard review). Treat "Limeña" (with tilde) as the correct stylization — *via multiple aggregators*. **Conflict flag:** website domain and page title omit the tilde ("Limena"); most third-party platforms include it ("Limeña").
- **Category:** Peruvian restaurant and cocktail/pisco bar; also tagged "Peruvian-Chinese" and "Latin American" on delivery platforms — *via DoorDash, Postmates, Uber Eats*.
- **Owner/founder:** NOT FOUND (no name located). Multiple reviews reference "the owner" visiting tables personally and the business being family-run — *via Postcard.inc, Outgoing.world*.
- **Ownership identity:** Repeatedly described as a **Latinx- and women-owned** business — *via res-menu.com "About" copy*. **Conflict flag:** this claim appears only on a third-party/community-maintained menu mirror site, not on the official site or Yelp/Google — treat as unverified until confirmed directly with the business.
- **Year established / origin story:** Occupies a space that was previously an Irish pub/bar — *via res-menu.net reviews, Wanderlog aggregate summary*. Online-ordering account activation timestamp shows **June 17, 2023** — *via order.online page metadata (Terms of Service link parameters)*. A December 2023 review references "this new addition to the neighborhood," and a TikTok video (posted ~Nov 2023) says the bar "opened just a few months ago" — *via TikTok video by @johnsanchez.nyc, Roadtrippers review dates*. Together these point to a **2023 opening** (soft opening coincided with a Sunnyside Restaurant Week). NOT FOUND: exact opening date or founding story beyond this.
- **Mission statement / tagline:** No formal mission statement found. Recurring taglines/descriptors: "Try Our New Menu" (Yelp business name modifier) — *via Yelp*; "a family-run Peruvian spot where the pisco sours get creative and the welcome feels like home" — *via Outgoing.world*; Instagram bio: "🇵🇪 Peruvian Cuisine & Pisco Bar Restaurant" — *via Instagram bio (search snippet)*.
- **Unique selling points emphasized across platforms:**
  - Handcrafted pisco cocktails / wide pisco sour variety (classic, butterfly, mora/blackberry, hibiscus, lychee) — *via website, TikTok, Postcard, res-menu.net*
  - Authentic, traditional Peruvian recipes — *via website "About" copy, multiple aggregators*
  - Live música criolla / live band on select nights (Fridays mentioned) — *via Wanderlog, Outgoing.world*
  - Family-run, welcoming/attentive service, owner personally checks on tables — *via Postcard.inc, Wanderlog*
  - Catering for events, holidays, and gatherings — *via official website "About" section*
  - Heated outdoor seating and private dining — *via res-menu.com*

## Contact & Location

- **Address:** 47-14 Greenpoint Ave, Sunnyside, NY 11104 (consistently listed as "Queens" or "New York City" depending on platform) — *via official website, DoorDash, Yelp, TripAdvisor*
- **Phone:** (347) 527-1816 — *via official website, all delivery platforms, Yelp, TripAdvisor*
- **Email:** limenapiscobar@gmail.com — *via order.online page metadata (base64-encoded contact_email field), decoded*
- **Hours (per official website):**
  - Sun–Thu: 12:00 pm – 10:00 pm
  - Fri–Sat: 12:00 pm – 12:00 am
  *(via official website)*
  **Conflict flag — hours vary by source:**
  - Yelp: Mon–Thu 12–10pm, Fri–Sat 12pm–12am, (Sun not listed in snippet) — *via Yelp*
  - TripAdvisor: Sun 12–10pm, Mon–Wed 12–10pm, **Thu 12pm–11pm**, **Fri 12pm–2am**, **Sat 12pm–2am** — *via TripAdvisor* (later closing times than the website)
  - Postmates: Sun–Thu 11:30am–10:00pm, **Fri–Sat 11:30am–11:30pm** — *via Postmates*
  - order.online/DoorDash storefront: online-ordering hours specifically listed as 11:30 AM–9:25 PM or 12:00 PM–11:39 PM on different fetches (delivery-platform cutoff times differ from dine-in hours) — *via order.online, DoorDash*
  - Wheree.com: Sunday listed as "09:30 A.M – 10:00 P.M" (likely reflecting weekend breakfast service — see Products section) — *via Wheree.com*
  Recommend confirming current hours directly before publishing.
- **Parking:** Street parking noted — *via TripAdvisor*. NOT FOUND: dedicated lot.
- **Neighborhood/landmarks referenced:** Sunnyside, Queens; described as replacing a longtime Irish pub in the neighborhood — *via res-menu.net, Wanderlog*. Near Sunnyside Gardens Park and the 46th St–Bliss St / Court Sq subway corridor per general area listings — *via TripAdvisor "near" links (not restaurant-stated)*.
- **Service area:** Delivery/takeout offered via DoorDash, Uber Eats, Grubhub/Seamless, and Postmates — *via those platform listings*. Catering offered directly — *via official website*.

## Products / Services / Menu

**Menu category structure (per official site + delivery platforms):** Lunch Special · Appetizers (Causas/Ceviche-adjacent starters) · Sopas (Soups) · Ceviches · Tallarines · Pollo a la Brasa & Más · Special Rotisserie Chicken Combos · Chaufas · Carnes · Mariscos/Seafood · Side Orders · Desserts · Peruvian Breakfast (weekends) · Beverages · Alcoholic Drinks (21+) — *via official website, DoorDash, Uber Eats/Postmates, res-menu.com*

**Note on data completeness:** The official site's live menu is JavaScript-rendered and only exposed "Appetizers" and "Ceviches" categories to a non-JS fetch. Full item-level pricing below is compiled primarily from the Uber Eats/Postmates backend (same underlying data as the restaurant's own online ordering system) and cross-checked against the official site and Yelp where possible.

### Lunch Special (Mon–Fri, 12pm–3pm)
- **$16 Lunch Special** — $16.00 — Homemade lunch, soup of the day and a main course; check Instagram for the daily menu — *via Postmates* (marked "Popular")

### Appetizers
- **Causas** — $14.00 (site lists "$14.00+", implying size/protein variants) — Softly mashed potato mixed with lime and ají amarillo, filled with avocado; choice of Atún (tuna), Pollo (chicken), or Langostinos (shrimp) — *via official website, Postmates* (marked "Popular")
- **Causa Acevichada** — $19.00 — Causa topped with fish ceviche — *via official website, Postmates*
- **Causa De Atún** — $15.00 (listed separately as a Featured Item on order.online, price differs slightly from the base Causas price above) — *via order.online* — **Conflict flag:** price discrepancy between "$14.00+" base Causas and standalone "$15.00" Causa de Atún; likely reflects the "+" variant pricing.
- **Causa De Camarones** — price NOT FOUND (referenced only as a Yelp photo/review tag) — *via Yelp*
- **Causa de Pollo** — $15.00 — *via order.online Featured Items*
- **Papa a la Huancaína** — $13.00–$14.00 (site: "$13.00+"; Postmates/Uber Eats: $14.00) — Potatoes topped with special Peruvian ají amarillo sauce, boiled egg, and botija olives — *via official website, Postmates*
- **Yuca a la Huancaína** — $13.00–$15.00 (site: "$13.00+"; Postmates: $15.00) — Fried cassava topped with huancaína sauce (site adds "boiled egg and botija olives" to description; Postmates description omits this) — *via official website, Postmates*
- **Anticuchos** — $20.00 — Tender cow's heart marinated in Peruvian spices, served with potatoes and corn — *via Postmates, DoorDash Featured Items*
- **Anticuchos con Rachi** — $28.00 — Grilled beef heart skewers served with rachi (tripe) — *via Postmates*
- **Calamar Frito** — $18.00 — Fried calamari served with fried cassava, salsa criolla, and tartar sauce — *via Postmates, res-menu.com*
- **Choros a la Chalaca** — $20.00 — Fresh mussels topped with onions, tomato, corn, and cilantro, marinated in fresh lime juice — *via Postmates*
- **Pulpo a la Parrilla** — $25.00 — Grilled octopus marinated in anticuchera sauce, served with potato and corn — *via Postmates*
- **Alitas Acevichadas** — $18.00 — Six chicken wings topped with a special sauce, served with french fries — *via Postmates*
- **Jalea** — price NOT FOUND — mentioned as a standout dish in reviews (fried seafood platter, standard in Peruvian cuisine) — *via Wanderlog aggregate review summary*

### Sopas (Soups)
- **Aguadito de Pollo** — $15.00 — Chicken rice soup made with fresh cilantro — *via Postmates, DoorDash*
- **PATASCA** — $22.00 — Homemade Peruvian soup made of cow's belly, cow's feet, and white hominy — *via Postmates*
- **Chupe de Camarones** — $26.00 — Peruvian-style shrimp chowder with a poached egg — *via Postmates*

### Ceviches
- **Leche de Tigre** — $21.00–$23.00 (site: $21.00+; Postmates: $23.00) — Description varies: site gives no description; Postmates: "Fresh citrus-marinated seafood, a Peruvian classic" — *via official website, Postmates*
- **Ceviche de Pescado** — $21.00–$23.00 (site: $21.00+; DoorDash/Postmates: $23.00) — Fish chunks marinated in lime juice and Peruvian spices — *via official website, Postmates, DoorDash*
- **Ceviche Mixto** — $25.00–$26.00 (site: $25.00+; Postmates: $26.00) — Fish, shrimp, calamari, and octopus marinated in lime juice and Peruvian spices — *via official website, Postmates* (marked "Popular" on Postmates)
- **Ceviche de Camarones** — $25.00 — Shrimp marinated in lime juice and Peruvian spices — *via official website, Postmates*

### Tallarines (Noodles)
- **Tallarín Saltado de Pollo (Chicken)** — $22.00 — Spaghetti in a traditional Peruvian sauce — *via Postmates*
- **Tallarín Saltado de Carne (Beef)** — $23.00 — Spaghetti in a traditional Peruvian sauce — *via Postmates* (marked "Popular")

### Pollo a la Brasa & Más / Special Rotisserie Chicken Combos
- **Pollo a la Brasa** — $13.00 — Rotisserie chicken marinated with the restaurant's authentic Peruvian recipe (base description; likely priced per quarter/portion given the low price relative to combos) — *via order.online, DoorDash*
- **Mostrito** — $20.00 — #1 most-liked item on Postmates (100% like rate, 10 ratings); full description NOT FOUND — *via Postmates*
- **Combo 1** — $32.00 — Featured/most-ordered combo item; full description NOT FOUND — *via DoorDash, Postmates*

### Carnes (Meats)
- **Lomo Saltado** — $12.00 (Yelp) vs. $23.00 (Uber Eats/DoorDash) — Peruvian stir-fried beef dish; description NOT FOUND in detail beyond dish name. **Conflict flag:** significant price discrepancy between Yelp snippet ($12.00) and delivery platforms ($23.00) — the $12 figure may reflect an old/lunch-portion price or a data error; delivery-platform price is more likely current.
- **Pollo Saltado** — price NOT FOUND — referenced repeatedly in reviews as a standout — *via Wanderlog, Postcard.inc*

### Chaufas (Fried Rice)
- **Chaufa de Pollo** — $22.00 — Peruvian-Chinese style fried rice — *via order.online, DoorDash*
- **Seafood Chaufa** — price NOT FOUND — referenced in Yelp photos/reviews and by name in a res-menu.net review — *via Yelp, res-menu.net*

### Mariscos / Seafood
- Category confirmed to exist ("Variety of traditional Peruvian plates made with seafood") but individual items/prices NOT FOUND beyond ceviches/anticuchos/octopus already listed above — *via DoorDash, order.online*

### Other Traditional Plates (named in reviews, category/price NOT FOUND)
- Aji de Gallina — $23.00 — *via DoorDash Featured Items* (description NOT FOUND)
- Arroz de Mariscos — mentioned as a favorite — *via Wanderlog*
- Baked Fish — mentioned as a favorite — *via Wanderlog*
- Pescado a lo Macho — mentioned in a review as generously portioned, shareable for two — *via Postcard.inc*
- Embarque Marino — mentioned as a shareable seafood sampler ordered by a reviewer — *via res-menu.net review*

### Side Orders
- Category confirmed; no individual items/prices found — *via DoorDash, order.online*

### Desserts
- **Tres Leches Cake** — price NOT FOUND — *via Yelp (photo/review tag)*
- **Crema Volteada** (Peruvian flan) — mentioned favorably in a review — *via DoorDash review, res-menu.net*
- One review noted a wish for "more varied dessert options" — *via Wheree.com aggregate review summary*

### Peruvian Breakfast (Weekends, 9:30am–1:00pm)
- Category confirmed to exist per res-menu.com category list; items/prices NOT FOUND — *via res-menu.com*

### Beverages (Non-Alcoholic)
- **Inca Kola** — $4.00 — *via order.online Featured Items*
- **Chicha Morada** (homemade Peruvian purple corn drink) — price NOT FOUND — mentioned as available by the pitcher — *via res-menu.net review*

### Alcoholic Drinks (Must be 21+)
- Full bar; pisco is the signature spirit — *via res-menu.com*
- Named drinks/cocktails mentioned in reviews: Classic Pisco Sour, Butterfly Pisco Sour, Mora (blackberry) Pisco Sour, Hibiscus Pisco Sour, Lychee Pisco Sour, "The Gem," Black Manhattan, Red Sangria — *via TikTok (@johnsanchez.nyc), Postcard.inc, Wanderlog* — prices NOT FOUND for any cocktail.
- Live música criolla / live band described as accompanying the bar experience on select nights (Fridays referenced) — *via Wanderlog aggregate summary*

### Kids Corner
- Category confirmed on Postmates category list; items/prices NOT FOUND

### Catering
- Available "for a wide range of occasions, including family gatherings, holidays, and special events" — *via official website "About" section*

---

## Visual Content & Branding

**Note on limitations:** Direct visual inspection of image files was not possible in this research pass (image URLs returned "unsupported content" errors on fetch). The following is based on file references, alt text, and platform metadata only — actual visual descriptions should be confirmed by opening the links directly.

- **Logo:** A logo image exists on the official site header (`/images/website/202604101103427908.png`) — visual description NOT AVAILABLE (could not render).
- **Website theme color metadata:** `#ffffff` (white) primary, with an MS Tile color of `#da532c` (a burnt-orange/terracotta tone) — *via official website meta tags*. **Observation (not a stated fact):** the terracotta accent color is consistent with warm, earthy branding common to Latin American restaurant identities, though this is an inference from a single metadata field, not confirmed brand guidance.
- **Photo counts by platform:**
  - Official website gallery: 8 photos, all labeled generically "Our Foods" (no individual captions) — *via official website gallery page*
  - Yelp: 77 photos total (4 "Inside," 3 "Outside," remainder food/drink categorized under tags: Ceviche, Rotisserie Chicken, Lomo Saltado, Pisco Sour, Happy Hour, Bars) — *via Yelp*
  - Instagram: 111 posts on @limenapiscobarnyc (photo/video content not individually catalogued in this pass) — *via Instagram*
- **Interior description (from reviews, not verified visually):** Described as "a small restaurant with a decent sized bar and TV screens to watch sports," previously an Irish pub now transformed into "a trendy Latin spot" — *via res-menu.net review*. Also described as having heated outdoor seating and a private dining option — *via res-menu.com*.
- **Branded visual motifs:** Instagram bio uses the Peruvian flag emoji (🇵🇪) and hashtags #cevicheperuano #causarellena #anticuchos — *via Instagram bio*.

## Social Proof & Reviews

**Platform ratings:**
| Platform | Rating | Review Count |
|---|---|---|
| Yelp | Not stated numerically in snippet | 19 reviews, 77 photos |
| DoorDash | 4.4–4.5 / 5 (fluctuated between fetches) | 50+ ratings, 10+ public reviews |
| Postmates/Uber Eats | 4.7 / 5 | 130+ ratings |
| Aggregator (chefi.biz, citing Google-style data) | 4.5 / 5 | 96 reviews |
| TripAdvisor | Ranked #46 of 60 restaurants in Sunnyside (no star average in snippet) | Not specified |

*Conflict flag: rating varies 4.4–4.7 depending on platform/fetch — this is normal cross-platform variance, not necessarily an error.*

**Recurring praise themes (paraphrased, not verbatim):**
- Ceviche quality and freshness repeatedly called out as a highlight across nearly every source — *via Wanderlog, Wheree.com, Postcard.inc, DoorDash reviews*
- Pisco sours and cocktail creativity (especially the butterfly and mora/blackberry variations) frequently singled out — *via Postcard.inc, TikTok, Wheree.com*
- Attentive, friendly staff and a personal touch from the owner are mentioned repeatedly — *via Postcard.inc, Wanderlog*
- Lomo saltado, anticuchos, and rotisserie chicken named often as favorite mains — *via Wanderlog, Wheree.com*
- Live band/música criolla adds to the atmosphere on select nights — *via Wanderlog, Postcard.inc*
- Good for celebrations (birthdays, quinceañeras) — one detailed review described a full birthday celebration experience — *via Postcard.inc*

**Recurring complaint themes (paraphrased, useful for what NOT to overpromise):**
- Occasional inconsistency in seasoning/flavor on some dishes (one reviewer described a causa as under-seasoned) — *via DoorDash review*
- Service slowdowns during busy periods — *via Wheree.com aggregate summary*
- Limited dessert variety, per at least one review — *via Wheree.com aggregate summary*
- One TripAdvisor review found the chicken tallarín "not exciting but plentiful" — *via TripAdvisor*

**Awards / press:** No formal awards or "best of" list placements found. One local news mention: **QNS.com (Queens news outlet)**, August 2026, reported that NY State Labor Commissioner Reardon toured Sunnyside small businesses (guided by Sunnyside Shines) and visited "Peruvian staple Limeña Pisco Bar" among several other neighborhood businesses, in a piece focused on rising operating costs from federal tariffs — *via QNS.com (search snippet; page itself is robots-blocked for direct fetch)*.

## Voice & Tone

- **Overall tone:** Warm, welcoming, and pride-driven around authenticity — language consistently emphasizes "authentic," "traditional," and cultural pride in Peru. The official site's homepage copy: "every dish tells a story," "let your taste buds dance with delight," "Experience the taste of Peru" — *via official website homepage copy*.
- **Repeated words/phrases across platforms:** "authentic," "traditional Peruvian," "vibrant," "warm/welcoming," "handcrafted cocktails," "family-run"/"family-owned" — *via official website, res-menu.com, Outgoing.world*.
- **Instagram voice (from bio):** Short, emoji-forward, bilingual flavor (Spanish dish names with Peruvian flag emoji, English descriptors) — *via Instagram bio*.
- **Community-facing tone:** Casual, personal, food-and-family-focused rather than upscale/formal — reinforced by reviewer descriptions of the owner personally checking in with guests — *via Postcard.inc, Wanderlog*.

---

## Summary of Key Unresolved Items (flagged NOT FOUND — do not guess)

- Owner/founder full name and personal backstory
- Exact opening date (only narrowed to ~2023 via indirect evidence)
- Confirmed current hours (conflicting across 4+ sources — verify directly)
- Full pricing for many named dishes (Pollo Saltado, Seafood Chaufa, Jalea, Tres Leches, most cocktails)
- Official Facebook page (none located)
- Official OpenTable/reservation platform listing
- Verified logo/interior visual description (image files could not be rendered in this pass — recommend manually reviewing the gallery links and Yelp's 77 photos before building visual design assets)
- Confirmation of "women-owned/Latinx-owned" claim (sourced from only one third-party mirror site)
