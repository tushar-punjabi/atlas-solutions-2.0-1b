import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
export async function requireAdmin() {
 const session = await auth.api.getSession({ headers: await headers() })
 if (!session?.user || !process.env.ADMIN_EMAIL || session.user.email.toLowerCase() !== process.env.ADMIN_EMAIL.trim().toLowerCase()) redirect('/admin/login')
 return session.user
}
