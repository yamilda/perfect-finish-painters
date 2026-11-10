import type { MetadataRoute } from 'next'
import { serviceAreas } from '@/data/service-areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perfectfinishpainter.com'

  // Dates reflect the last real HTML change. The 2026-11-10 pass updated
  // alt text, social cards, and metadata across the site.
  const defaultDate = '2026-11-10'
  const homeDate = '2026-11-10'
  const summerBlogDate = '2026-11-10'
  const goveeDate = '2026-11-10'

  const cityPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: defaultDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: homeDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: defaultDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: defaultDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: defaultDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/interior-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/exterior-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/drywall-repair`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flooring`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shed-restoration`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/deck-staining`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fence-staining`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garage-door-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/epoxy-floor-coating`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/govee-permanent-lighting`,
      lastModified: goveeDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: summerBlogDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-exterior-paint-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/difference-between-flat-and-satin-paint-finish`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cedar-siding-repair-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exterior-painting-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sherwin-williams-snowbound-paint-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/accent-wall-painting-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/bathroom-repaint-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/garage-drywall-finishing-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/kitchen-drywall-repair-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/open-concept-living-dining-repaint-south-jersey`,
      lastModified: defaultDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/summer-interior-painting-south-jersey`,
      lastModified: summerBlogDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/wallpaper-removal-repaint-south-jersey`,
      lastModified: '2026-11-10',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/govee-permanent-lighting-painters-south-jersey`,
      lastModified: '2026-11-10',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exterior-painting-before-fall-south-jersey`,
      lastModified: '2026-11-10',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/permanent-christmas-lights-south-jersey`,
      lastModified: '2026-11-10',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/popcorn-ceiling-removal`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cabinet-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ceiling-painting`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wallpaper-removal`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-cerca-de-mi`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-pleasantville-nj`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-atlantic-city-nj-es`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-vineland-nj`,
      lastModified: defaultDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
  ]
}
