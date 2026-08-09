/**
 * The backdrop.
 *
 * This replaces an animated ember canvas that read as "black and red" — a steakhouse
 * cliché, and the wrong frame for light-toned food photography. What the room actually
 * looks like is warm wood, white wainscoting and brick, so the page is bone with a
 * faint warm wash and a paper grain over it.
 *
 * Deliberately a server component with zero JavaScript: no canvas, no RAF loop, no
 * scroll listener, nothing to pause on a hidden tab. On a light surface the texture
 * only needs to be felt, not watched — animating it would read as dirt.
 */
export function PaperGrain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Warm wash: a low bloom of wood-tone and a cool top light, so the page has
          depth without any single area reading as tinted. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(122, 97, 21, 0.10) 0%, rgba(122, 97, 21, 0.04) 40%, rgba(247, 243, 236, 0) 72%), radial-gradient(90% 60% at 15% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 60%)",
        }}
      />

      {/* Paper grain. Inline SVG turbulence as a data URI — a few hundred bytes, no
          request, and it tiles seamlessly at any viewport size. */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  )
}
