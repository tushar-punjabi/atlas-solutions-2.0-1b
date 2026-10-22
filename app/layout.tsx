import { SiteAnalytics } from '@/components/site-analytics'
import { siteUrl } from '@/lib/site'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: 'Atlas Solutions | Software, automatización e IA en Chile',
  description: 'Simplificamos, digitalizamos y mejoramos las operaciones de tu empresa mediante software, automatización e inteligencia artificial. Atlas Solutions SpA, Chile.',
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  category: 'technology',
  openGraph: { url: '/', type: 'website', locale: 'es_CL', siteName: 'Atlas Solutions', title: 'Atlas Solutions | Tecnología que impulsa', description: 'Software, automatización e inteligencia artificial para empresas.' },
  twitter: { card: 'summary', title: 'Atlas Solutions', description: 'Tecnología que simplifica tu operación.' },
  icons: {
    icon: [{ url: '/atlas-favicon.png', type: 'image/png' }],
    apple: '/atlas-favicon.png',
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
