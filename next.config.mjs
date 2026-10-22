/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: { '/admin/guide': ['./docs/blog-guide.md'] },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
    ] }, { source: '/admin/:path*', headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }] }]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
