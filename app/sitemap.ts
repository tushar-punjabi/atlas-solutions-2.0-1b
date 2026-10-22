import type {MetadataRoute} from 'next'
import {eq} from 'drizzle-orm'
import {db} from '@/lib/db'
import {posts} from '@/lib/db/schema'
import {siteUrl} from '@/lib/site'
export const dynamic='force-dynamic'
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const articles=await db.select({slug:posts.slug,updatedAt:posts.updatedAt}).from(posts).where(eq(posts.status,'published'));return [{url:siteUrl},{url:`${siteUrl}/blog`},{url:`${siteUrl}/privacy`},...articles.map(p=>({url:`${siteUrl}/blog/${p.slug}`,lastModified:p.updatedAt}))]}
