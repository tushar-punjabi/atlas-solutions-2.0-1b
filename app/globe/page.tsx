import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASCII Earth | Atlas Solutions',
  description: 'Un planeta interactivo dibujado con caracteres ASCII. Una experiencia visual de Atlas Solutions.',
  alternates: { canonical: '/globe' },
}

export default function GlobePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100svh', background: '#030a17', color: '#eaf8ff', overflow: 'hidden' }}>
      <iframe
        src="/atlas-ascii-globe.html"
        title="Planeta Tierra interactivo en caracteres ASCII"
        loading="eager"
        style={{ display: 'block', position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
      />
      <a
        href="/"
        aria-label="Volver a la página de inicio de Atlas Solutions"
        style={{ position: 'absolute', zIndex: 2, top: 22, left: 22, color: '#b6d5e9', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontSize: 13, letterSpacing: '0.08em', padding: '10px 14px', border: '1px solid #29445c', borderRadius: 30, background: 'rgba(5,17,35,.8)' }}
      >
        ← ATLAS.
      </a>
    </main>
  )
}
