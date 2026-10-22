'use server'
import { timingSafeEqual, createHash } from 'node:crypto'
import { auth } from '@/lib/auth'
export async function setupAdmin(_: {message: string}, form: FormData) {
 const supplied = String(form.get('secret') || '')
 const expected = process.env.BETTER_AUTH_SECRET
 const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
 if (!expected || !email || !timingSafeEqual(createHash('sha256').update(supplied).digest(), createHash('sha256').update(expected).digest())) return {message:'No se pudo completar la configuración.'}
 const password = String(form.get('password') || '')
 if (password.length < 12 || password.length > 128) return {message:'Usa una contraseña de 12 a 128 caracteres.'}
 try { await auth.api.signUpEmail({body:{name:'Atlas Admin',email,password}}); return {message:'Cuenta creada. Ya puedes iniciar sesión.'} }
 catch { return {message:'No se pudo crear la cuenta. Si ya existe, inicia sesión.'} }
}
