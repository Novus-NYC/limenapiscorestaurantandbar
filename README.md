# Limeña Pisco Bar & Restaurant

A replacement website for Limeña Pisco Bar & Restaurant — 47-14 Greenpoint Ave, Sunnyside,
Queens. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind · GSAP + Lenis.

```bash
npm install
npm run media     # regenerate optimized images from assets/source/
npm run dev
```

Every route prerenders static. There is no runtime dependency on the previous site,
its host, or any external CDN — including fonts, which are self-hosted by `next/font`.

---

## Project shape

```
assets/source/                 Original photographs, semantically named (committed)
scripts/optimize-media.mjs     Image pipeline → public/media + manifest
public/media/                  Generated AVIF/WebP renditions (regenerable)
src/
  content/                     The content layer — all facts live here
    types.ts                   Schema, incl. the `confidence` model
    business.ts                Identity, address, hours, amenities
    menu.ts                    41 dishes / 12 categories + the bar
    gallery.ts  reviews.ts  faq.ts
    generated/media-manifest.json
  lib/         media.ts  motion.ts  seo.ts
  components/
    motion/                    Reveal, RevealText, GrowRule, PinnedChapter, SmoothScroll
    atmosphere/EmberField.tsx  The generated scroll-reactive backdrop
    site/                      Nav, Footer, Hero, Preloader, PageHeader
    menu/MenuBrowser.tsx       Search + category filtering
    ui/                        Img, kit (Button, Eyebrow, PriceTag, Tag, Section)
  app/                         /  /menu  /bar  /gallery  /about  /catering  /visit  /faq
```

## The content layer

All business facts live in `src/content/` and nothing is hard-coded into a page. Two rules
govern it, and they matter more than they look:

**Nothing is invented.** The source research flagged many gaps. Anything it couldn't
establish is `null` and renders as absence, never as a guess. A dish with no published
price shows no price rather than a plausible-looking one.

**Every fact carries its provenance.** `Confidence` is `official` (the business's own
site), `platform` (delivery platforms mirroring its menu data), or `reported` (named
repeatedly in guest reviews but never on an official surface).

Deliberately excluded, with the reasons recorded in code comments so they don't get
re-added by accident:

| Claim | Why it's out |
|---|---|
| "Latinx- & women-owned" | Appears only on a third-party menu mirror. Unverified. |
| Live música criolla on Fridays | Review-sourced only; no schedule we could promise. |
| Individual guest testimonials | The research paraphrased every review and named no reviewer. There were no real quotes to publish, so `reviews.ts` holds *themes* in the restaurant's own voice. Never turn these into quotation marks. |

**Hours** conflicted across four sources. `business.ts` publishes the business's own stated
hours, with a "call to confirm" note. Correct them there and the footer, the Visit page,
and the JSON-LD all follow — `lib/seo.ts` generates structured data from the same objects
the pages render, so published and machine-readable hours can't drift apart.

## Media pipeline

`npm run media` reads `assets/source/`, and for each image emits responsive AVIF + WebP at
400/800/1200/1600 (capped at the source's own width), plus an inline base64 LQIP. Assets are
deduplicated by content hash — the original site served the logo twice under two filenames.

9 unique assets → 44 renditions, ~2.1 MB total.

`components/ui/Img.tsx` reads the manifest, emits a `<picture>` with correct intrinsic
`width`/`height` (so nothing shifts), and paints the LQIP underneath while bytes arrive.
It throws at build time on an unknown asset id rather than shipping a broken image.

> **Known ceiling — worth raising with the client.** The source photographs top out at
> 1000×750, and one interior shot is only 574px wide. On a 2× display anything shown wider
> than ~500 CSS px is being upscaled. Layouts are capped to keep that within about 1.2×,
> which is why several frames have a `max-w-*` and a comment explaining it. Higher-resolution
> photography is the single biggest available visual upgrade, and it needs no code changes —
> drop files into `assets/source/`, rerun `npm run media`, and raise the caps.

## Motion

The motion system is transplanted from the `hubtown` Novus template — its structure and
primitives, not its content or palette.

| Reference | Here |
|---|---|
| Preloader-gated entry | `site/Preloader.tsx` — once per session, skipped under reduced motion, self-lifts after 1.6s so it can never strand anyone |
| Full-viewport generated backdrop (WebGL monolith) | `atmosphere/PaperGrain.tsx` — a warm wash and paper grain. See the palette note below. |
| 6 pinned chapter sections | `motion/PinnedChapter.tsx` |
| fade ×221, transform-reveal ×88 | `motion/Reveal.tsx` |
| `showLetters`, `rowFrom0`/`colFrom0` keyframes | `motion/RevealText.tsx`, `motion/GrowRule.tsx` |
| Smooth scroll + ScrollTrigger | `motion/SmoothScroll.tsx` (Lenis drives GSAP's ticker) |
| `cubic-bezier(.4,0,.2,1)`, 0.1s–1s, "heavy but slow" | `lib/motion.ts`, mirrored into the Tailwind theme |
| Ice-blue on near-black navy | Replaced entirely — see below |
| Grotesque display + mono micro-labels | Mono micro-labels kept (they read beautifully as menu prices); display is a warm high-contrast serif instead |

### Why the palette is light

The first build followed the reference's darkness — near-black warmed toward burgundy,
with an animated ember canvas. It read as black-and-red: a steakhouse/nightclub cliché,
and the wrong frame for food photography, since the plates are light-toned and floated
rather than sat.

Only the *motion system* was ever meant to come from the reference. The palette now comes
from the room in the photographs — warm wood, white wainscoting, brick, and the crimson
logo — so the site is bone (`#F7F3EC`) with near-black text. The ember canvas became a
static grain: on a light surface that texture should be felt, not watched, and animating
it reads as dirt. That also removed a canvas, a RAF loop and a scroll listener.

Two colours are deliberately *not* the literal brand values, because they failed
contrast on the light base and the ratios are recorded in `tailwind.config.ts`:

- `gold` is `#7A6115`, not the signage `#C9A227` (3.63:1 → 5.35:1). The signage gold
  survives as `gold-light` for decoration only, never text.
- `crimson.ink` (`#B80E16`) is used for crimson *text* and links (4.44:1 → 6.10:1).
  The true logo red `#E0121B` is still used for fills, where white sits on it at 4.92:1.

Two implementation notes that are easy to regress:

- **`PinnedChapter` holds with CSS `sticky`, not a GSAP pin.** Pinning worked but
  `pinSpacing:false` left dead gaps whenever the columns disagreed on height.
- **The chapter drift is a translate, never a scale, and carries no `will-change`.**
  Scaling a composited layer makes Chrome rasterize once at ~1× CSS and stretch the
  bitmap, which visibly softens photographs on a 2× display.

`prefers-reduced-motion` is honored in both layers: CSS collapses animations to their end
state, and every JS motion component early-returns (smooth scroll, canvas, and preloader
never initialize).

## Accessibility

Skip link, one `<h1>` per page, real landmarks, alt text on every content image (decorative
images get `alt=""`), keyboard-operable disclosure via native `<details>`, a focus-trapping-free
mobile menu that closes on Escape and restores focus, an `aria-live` count on menu filtering,
and a gold focus ring that is never removed.

Text contrast is measured, not eyeballed. Every visible text node on all 8 pages was
audited against its real computed background at AA thresholds (4.5:1, or 3:1 for large
text): **zero failures**. The gold and crimson adjustments above came out of that audit.

The one construct the audit can't see is the gallery caption, whose backdrop is a gradient
scrim over a photograph rather than a background colour. It's white on `ink/95` there, and
the scrim was deepened specifically because several plates are very light-toned.

## Things a future editor should know

- Prices render from `Price.amount`; `null` means "we genuinely don't know", not "free".
- `menuCategoryBySlug` and `allMenuItems` in `menu.ts` exist for future `/menu/[category]`
  routes and a search index.
- Ordering links in `business.ts` point at platform homepages — the research never surfaced
  the restaurant's specific storefront URLs. Swap in the real ones when available.
- `SITE_URL` is set in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`. Update all
  three at launch.
