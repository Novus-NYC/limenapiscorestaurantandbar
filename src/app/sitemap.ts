import type { MetadataRoute } from "next"

const SITE_URL = "https://limenapiscobar.com"

const routes = [
  { path: "", priority: 1 },
  { path: "/menu", priority: 0.9 },
  { path: "/bar", priority: 0.8 },
  { path: "/gallery", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/catering", priority: 0.7 },
  { path: "/visit", priority: 0.8 },
  { path: "/faq", priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}
