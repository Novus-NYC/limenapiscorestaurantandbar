"use client"

import { useMemo, useState } from "react"
import type { MenuCategory } from "@/content/types"
import { PriceTag, Tag } from "@/components/ui/kit"
import { Img } from "@/components/ui/Img"
import { hasAsset } from "@/lib/media"

/**
 * Filterable menu.
 *
 * Search matches name, English gloss, description, and tags, so "shrimp", "camarones",
 * and "seafood" all find the same plates — the menu is bilingual and guests search in
 * whichever language they have.
 *
 * Every category renders as a real section with a stable id, so /menu#ceviches keeps
 * working as a deep link regardless of filter state.
 */
export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return categories
      .filter((c) => !active || c.slug === active)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter((i) =>
              [i.name, i.nameEn, i.description, ...(i.tags ?? [])]
                .filter(Boolean)
                .join(" ")
                .toLowerCase()
                .includes(q)
            )
          : c.items,
      }))
      // A category with a blurb but no items still deserves to show when unfiltered
      // (the weekend breakfast has no published item list) — but not mid-search.
      .filter((c) => c.items.length > 0 || (!q && !active))
  }, [categories, query, active])

  const resultCount = filtered.reduce((n, c) => n + c.items.length, 0)

  return (
    <>
      {/* Sticky control bar */}
      <div className="sticky top-[var(--nav-h)] z-30 -mx-5 border-y border-ink/12 bg-bone/95 px-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:gap-6">
          {/* Fixed basis, no shrink: the chip row is far wider than the bar and would
              otherwise squeeze this input down to nothing. */}
          <label className="relative w-full lg:w-64 lg:shrink-0">
            <span className="sr-only">Search the menu</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full rounded-card border border-ink/18 bg-white/70 px-4 py-2.5 font-mono text-sm text-ink placeholder:text-ink/50 focus:border-gold focus:outline-none"
            />
          </label>

          {/* min-w-0 lets this flex child actually shrink so its own scroll works. */}
          <div className="-mx-5 min-w-0 flex-1 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
            <ul className="flex w-max items-center gap-2">
              <li>
                <FilterChip active={active === null} onClick={() => setActive(null)}>
                  All
                </FilterChip>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <FilterChip active={active === c.slug} onClick={() => setActive(c.slug)}>
                    {c.name}
                  </FilterChip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Live region so filtering is announced, not just visible. */}
      <p aria-live="polite" className="sr-only">
        {resultCount} dishes shown
      </p>

      {resultCount === 0 && (
        <p className="py-24 text-center text-lg text-ink/70">
          Nothing matches “{query}”. Try “ceviche”, “pollo”, or “seafood”.
        </p>
      )}

      <div className="divide-y divide-ink/12">
        {filtered.map((category) => (
          <section key={category.slug} id={category.slug} className="scroll-mt-40 py-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
              <header className="lg:sticky lg:top-48 lg:self-start">
                <h2 className="font-display text-display-sm text-ink">{category.name}</h2>
                {category.nameEn && <p className="label mt-2">{category.nameEn}</p>}
                {category.blurb && (
                  <p className="mt-4 max-w-prose leading-relaxed text-ink/70">
                    {category.blurb}
                  </p>
                )}
                {category.availability && (
                  <p className="mt-4 inline-block rounded-card border border-gold/30 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gold">
                    {category.availability}
                  </p>
                )}
              </header>

              <ul className="space-y-px">
                {category.items.map((item) => (
                  <li
                    key={item.slug}
                    className="group flex gap-5 rounded-card p-4 transition-colors duration-500 ease-cinematic hover:bg-ink/[0.035]"
                  >
                    {hasAsset(item.image) && (
                      <div className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-card sm:block">
                        <Img
                          id={item.image}
                          alt=""
                          sizes="96px"
                          className="h-full w-full object-cover transition-transform duration-cinematic ease-cinematic group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-xl leading-snug text-ink">
                          {item.name}
                          {item.nameEn && (
                            <span className="ml-2 font-sans text-sm font-normal text-ink/65">
                              {item.nameEn}
                            </span>
                          )}
                        </h3>
                        {/* Dotted leader — the classic printed-menu device. */}
                        <span
                          aria-hidden
                          className="hidden flex-1 translate-y-[-0.3em] border-b border-dotted border-ink/20 sm:block"
                        />
                        <PriceTag price={item.price} />
                      </div>

                      {item.description && (
                        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70">
                          {item.description}
                        </p>
                      )}

                      {(item.popular || item.price.note) && (
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          {item.popular && <Tag tone="gold">Popular</Tag>}
                          {item.price.note && (
                            <span className="text-xs text-ink/65">{item.price.note}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {category.items.length === 0 && (
                <p className="text-ink/65">
                  Ask your server — this menu changes with the season and we don&apos;t
                  publish it online.
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] transition-colors duration-300 ease-cinematic ${
        active
          ? "border-gold bg-gold text-white"
          : "border-ink/18 text-ink/70 hover:border-ink/40 hover:text-ink"
      }`}
    >
      {children}
    </button>
  )
}
