import {cache} from 'react'
import {and,eq} from 'drizzle-orm'
import {notFound} from 'next/navigation'
import Link from 'next/link'
import Markdown from 'react-markdown'
import {db} from '@/lib/db'
import {posts} from '@/lib/db/schema'
import {siteUrl} from '@/lib/site'
import {BlogShell} from '@/components/blog-shell'
export const dynamic='force-dynamic'
const getPost=cache(async(slug:string)=>{const [post]=await db.select().from(posts).where(and(eq(posts.slug,slug),eq(posts.status,'published')));if(!post)notFound();return post})
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const post=await getPost((await params).slug);return {title:post.seoTitle||`${post.title} | Atlas`,description:post.seoDescription||post.excerpt,alternates:{canonical:`/blog/${post.slug}`},openGraph:{type:'article',title:post.seoTitle||post.title,description:post.seoDescription||post.excerpt,url:`${siteUrl}/blog/${post.slug}`,publishedTime:post.publishedAt?.toISOString(),modifiedTime:post.updatedAt.toISOString()}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const post=await getPost((await params).slug);const structured={'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,datePublished:post.publishedAt?.toISOString(),dateModified:post.updatedAt.toISOString(),author:{'@type':'Organization',name:'Atlas Solutions SpA'},mainEntityOfPage:`${siteUrl}/blog/${post.slug}`};return <BlogShell><Link href="/blog">← Todas las ideas</Link><article><header className="article-header"><span className="section-label">ATLAS SOLUTIONS · {post.publishedAt?.toLocaleDateString('es-CL')}</span><h1>{post.title}</h1><p className="blog-lead">{post.excerpt}</p></header><div className="prose"><Markdown>{post.content}</Markdown></div></article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,'\\u003c')}}/></BlogShell>}
