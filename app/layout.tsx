import { SiteAnalytics } from '@/components/site-analytics'
import { siteUrl } from '@/lib/site'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: 'Atlas Solutions | Tecnología que impulsa',
  description: 'Simplificamos, digitalizamos y mejoramos las operaciones de tu empresa mediante software, automatización e inteligencia artificial. Atlas Solutions SpA, Chile.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'es_CL', siteName: 'Atlas Solutions', title: 'Atlas Solutions | Tecnología que impulsa', description: 'Software, automatización e inteligencia artificial para empresas.' },
  twitter: { card: 'summary', title: 'Atlas Solutions', description: 'Tecnología que simplifica tu operación.' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#061d42',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  )
}
