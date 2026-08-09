"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { business } from "@/content/business"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/bar", label: "Pisco Bar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/catering", label: "Catering" },
  { href: "/visit", label: "Visit" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // The bar earns a background only once you've left the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close on route change.
  useEffect(() => setOpen(false), [pathname])

  // While the mobile panel is open: lock the page, close on Escape, and return
  // focus to the button that opened it.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled || open
          ? "bg-bone/95 backdrop-blur-xl border-b border-ink/12"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[var(--nav-h)] items-center justify-between gap-6" aria-label="Main">
        <Link href="/" className="shrink-0" aria-label={`${business.fullName} — home`}>
          <img
            src="/media/logo-limena.png"
            alt=""
            width={400}
            height={168}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative font-mono text-label uppercase text-ink/75 transition-colors duration-micro hover:text-ink"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-cinematic ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden rounded-card border border-gold/50 px-4 py-2 font-mono text-label uppercase text-gold transition-colors duration-300 ease-cinematic hover:bg-gold hover:text-white sm:inline-block"
          >
            Call to book
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-500 ease-cinematic ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-500 ease-cinematic ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-ink/12 bg-bone/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="shell flex flex-col py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-ink/10 py-4 font-display text-2xl text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <a href={business.phoneHref} className="font-mono text-label uppercase text-gold">
              {business.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
