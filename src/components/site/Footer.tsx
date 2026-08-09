import Link from "next/link"
import { business } from "@/content/business"

const columns = [
  {
    heading: "Eat & drink",
    links: [
      { href: "/menu", label: "Full menu" },
      { href: "/bar", label: "Pisco bar" },
      { href: "/catering", label: "Catering" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "Our story" },
      { href: "/visit", label: "Visit us" },
      { href: "/faq", label: "FAQ" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/12 bg-bone/90 backdrop-blur-sm">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src="/media/logo-limena.png"
              alt={business.fullName}
              width={400}
              height={168}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/70">
              {business.shortDescription}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="label">{col.heading}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/75 transition-colors duration-micro hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="label">Find us</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-ink/75">
              <p className="leading-relaxed">
                {business.address.street}
                <br />
                {business.address.locality}, {business.address.region}{" "}
                {business.address.postalCode}
              </p>
              <p>
                <a href={business.phoneHref} className="transition-colors hover:text-gold">
                  {business.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {business.email}
                </a>
              </p>
              <p>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {business.social.instagramHandle}
                </a>
              </p>
            </address>

            <h2 className="label mt-8">Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink/75">
              {business.hours.map((h) => (
                <div key={h.label} className="flex flex-wrap justify-between gap-x-4">
                  <dt>{h.label}</dt>
                  <dd className="font-mono text-ink/65">{h.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-ink/65">{business.hoursNote}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-label text-ink/65">
            © {new Date().getFullYear()} {business.fullName}
          </p>
          <p className="font-mono text-label text-ink/65">Must be 21+ to drink · Please drink responsibly</p>
        </div>
      </div>
    </footer>
  )
}
