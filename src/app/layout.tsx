import type { Metadata, Viewport } from "next"
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { business } from "@/content/business"
import { PaperGrain } from "@/components/atmosphere/PaperGrain"
import { SmoothScroll } from "@/components/motion/SmoothScroll"
import { Preloader } from "@/components/site/Preloader"
import { Nav } from "@/components/site/Nav"
import { Footer } from "@/components/site/Footer"
import { restaurantJsonLd } from "@/lib/seo"

/**
 * Type system.
 *
 * The reference pairs a geometric grotesque display with a monospace for micro-labels.
 * We keep the mono half exactly — it gives menu prices a precise, "spec sheet" quality —
 * but trade the grotesque for a warm high-contrast serif. A restaurant built on
 * hand-made food shouldn't set its headlines in the typeface of a hardware startup.
 */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
})
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
})

const SITE_URL = "https://limenapiscobar.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.fullName} — Peruvian Restaurant in Sunnyside, Queens`,
    template: `%s · ${business.name}`,
  },
  description:
    "Family-run Peruvian kitchen and pisco bar on Greenpoint Ave in Sunnyside, Queens. Ceviche cut to order, pollo a la brasa, lomo saltado, and pisco sours in five variations.",
  keywords: [
    "Peruvian restaurant Queens",
    "pisco bar NYC",
    "ceviche Sunnyside",
    "lomo saltado Queens",
    "pollo a la brasa Sunnyside",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: business.fullName,
    title: `${business.fullName} — Peruvian Restaurant in Sunnyside, Queens`,
    description:
      "Ceviche cut to order, pollo a la brasa, and pisco sours in five variations. Greenpoint Ave, Sunnyside.",
    images: [{ url: "/media/dish-lomo-saltado-arroz-800.webp", width: 800, height: 600 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#F7F3EC",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {/* Structured data: one Restaurant node, built from the same content layer
            the pages render, so the two can never drift apart. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-card focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:uppercase focus:text-white"
        >
          Skip to content
        </a>

        <PaperGrain />
        <SmoothScroll />
        <Preloader />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
