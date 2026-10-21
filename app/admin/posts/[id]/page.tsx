import Link from 'next/link'
import {and,eq} from 'drizzle-orm'
import {notFound} from 'next/navigation'
import {db} from '@/lib/db'
import {posts} from '@/lib/db/schema'
import {requireAdmin} from '@/lib/admin'
import {PostEditor} from '@/components/post-editor'
export default async function Page({params}:{params:Promise<{id:string}>}){const user=await requireAdmin();const {id}=await params;const post=id==='new'?undefined:(await db.select().from(posts).where(and(eq(posts.id,id),eq(posts.userId,user.id))))[0];if(id!=='new'&&!post)notFound();return <><Link href="/admin">← Volver al panel</Link><h1>{post?'Editar artículo':'Un nuevo punto de vista.'}</h1><PostEditor post={post}/></>}
