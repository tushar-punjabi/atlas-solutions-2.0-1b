import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'
const handlers = toNextJsHandler(auth)
export const GET = handlers.GET
export async function POST(request: Request) {
 const path = new URL(request.url).pathname.replace(/\/+$/, '')
 if (path.endsWith('/sign-up/email')) return Response.json({ message: 'Public registration is disabled.' }, { status: 403 })
 return handlers.POST(request)
}
