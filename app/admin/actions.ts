'use server'
import {z} from 'zod'
import {and,eq} from 'drizzle-orm'
import {db} from '@/lib/db'
import {posts} from '@/lib/db/schema'
import {requireAdmin} from '@/lib/admin'
import {revalidatePath} from 'next/cache'
const article=z.object({title:z.string().trim().min(3).max(180),slug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(160),excerpt:z.string().trim().min(10).max(350),content:z.string().trim().min(20).max(100000),seoTitle:z.string().trim().max(70),seoDescription:z.string().trim().max(170),status:z.enum(['draft','published'])})
export async function savePost(_: {message:string}, form:FormData){
 const user=await requireAdmin(); const parsed=article.safeParse(Object.fromEntries(form));
 if(!parsed.success)return {message:'Revisa los campos: título, URL en minúsculas con guiones, resumen y contenido son obligatorios.'}
 const id=String(form.get('id')||'');const data=parsed.data
 try {
 if(id){const [existing]=await db.select().from(posts).where(and(eq(posts.id,id),eq(posts.userId,user.id)));if(!existing)return {message:'Artículo no encontrado.'};await db.update(posts).set({...data,updatedAt:new Date(),publishedAt:data.status==='published'?(existing.publishedAt||new Date()):existing.publishedAt}).where(and(eq(posts.id,id),eq(posts.userId,user.id)));revalidatePath(`/blog/${existing.slug}`)}
 else await db.insert(posts).values({...data,id:crypto.randomUUID(),userId:user.id,publishedAt:data.status==='published'?new Date():null})
 revalidatePath('/blog');revalidatePath(`/blog/${data.slug}`);revalidatePath('/admin');revalidatePath('/sitemap.xml');return {message:'Guardado correctamente. Puedes volver al panel.'}
 }catch{return {message:'No se pudo guardar. Comprueba que la URL no esté usada por otro artículo.'}}
}
