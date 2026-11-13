import { NextRequest, NextResponse } from 'next/server'

const BLOG_HOST = 'blog.atlasolutions.cl'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = (request.headers.get('host') || '').split(':')[0].toLowerCase()

  // Keep the existing homepage untouched; serve the Atlas Journal on the blog host.
  if (hostname === BLOG_HOST) {
    if (url.pathname === '/' || url.pathname === '/blog') {
      url.pathname = '/journal'
      return NextResponse.rewrite(url)
    }
    // Existing database-backed articles are deliberately not redirected
    // until their data source and canonical URLs are migrated.
    return NextResponse.next()
  }

  // Send visitors to the new independent blog landing page.
  if (hostname === 'atlasolutions.cl' || hostname === 'www.atlasolutions.cl') {
    if (url.pathname === '/blog' || url.pathname === '/blog/') {
      return NextResponse.redirect('https://blog.atlasolutions.cl/', 307)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
