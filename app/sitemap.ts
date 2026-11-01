
import type { MetadataRoute } from 'next'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { posts } from '@/lib/db/schema'

const baseUrl = 'https://atlasolutions.cl'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Public pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compromiso`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/transparencia`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Published blog articles
  const publishedPosts = await db
    .select({
      slug: posts.slug,
      updatedAt: posts.updatedAt,
    })
    .from(posts)
    .where(eq(posts.status, 'published'))

  const blogPages: MetadataRoute.Sitemap = publishedPosts.map(
    (post) => ({
      url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  )

  return [...staticPages, ...blogPages]
}
