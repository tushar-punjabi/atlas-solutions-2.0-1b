import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Braces, Workflow, ShieldCheck, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlas Journal | Tecnología, datos y operaciones',
  description: 'Ideas, ingeniería y perspectivas sobre software, automatización, datos e infraestructura para empresas.',
  alternates: { canonical: 'https://blog.atlasolutions.cl/' },
  openGraph: {
    title: 'Atlas Journal | Ideas para avanzar',
    description: 'Tecnología que impulsa. Conocimiento que transforma.',
    type: 'website',
    url: 'https://blog.atlasolutions.cl/',
    siteName: 'Atlas Solutions',
    locale: 'es_CL',
  },
}

const themes = [
  { icon: Braces, number: '01', title: 'Ingeniería de software', text: 'Arquitectura, APIs y herramientas que resuelven problemas reales.' },
  { icon: Workflow, number: '02', title: 'Automatización y datos', text: 'Procesos inteligentes, datos útiles y decisiones mejor informadas.' },
  { icon: ShieldCheck, number: '03', title: 'Infraestructura y confianza', text: 'Sistemas confiables, seguridad y operaciones transparentes.' },
]

export default function JournalPage() {
  return (
    <div className="site-shell">
      <header className="site-header container">
        <Link href="https://atlasolutions.cl" className="brand" aria-label="Atlas Solutions, sitio principal">
          Atlas<span style={{width:7,height:7,borderRadius:'50%',background:'var(--primary)',marginLeft:2,alignSelf:'flex-end',marginBottom:6}} />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación">
          <a href="#temas">Explorar temas</a>
          <a href="https://atlasolutions.cl">Sitio principal <ArrowUpRight size={14}/></a>
          <a className="nav-cta" href="https://atlasolutions.cl">Conoce Atlas <ArrowRight size={14}/></a>
        </nav>
        <a className="text-link md:hidden" href="https://atlasolutions.cl">Atlas <ArrowUpRight size={14}/></a>
      </header>

      <main>
        <section className="hero" style={{minHeight:550}}>
          <div className="hero-grid" aria-hidden="true"/>
          <div className="orbital orbital-one" aria-hidden="true"/>
          <div className="orbital orbital-two" aria-hidden="true"/>
          <div className="hero-content container" style={{paddingBottom:110}}>
            <span className="eyebrow"><BookOpen size={14}/> ATLAS JOURNAL · IDEAS PARA AVANZAR</span>
            <h1>Menos complejidad.<br/><span>Más conocimiento.</span></h1>
            <p className="hero-description">
              Ideas, ingeniería y perspectivas desde Atlas Solutions.
              Exploramos cómo el software, los datos y la automatización
              pueden hacer que las empresas avancen.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#temas">Explorar el journal <ArrowRight size={17}/></a>
              <a className="secondary-cta" href="https://atlasolutions.cl">Conoce Atlas <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="temas" className="container" style={{paddingBlock:'78px 92px'}}>
          <span className="section-label"><span/> NUESTRAS CONVERSACIONES</span>
          <h2>Ideas para construir <span>lo que sigue.</span></h2>
          <div className="post-list" style={{marginTop:40}}>
            {themes.map(({icon: Icon,number,title,text}) => (
              <article key={number} className="post-card">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span className="principle-icon"><Icon size={22}/></span>
                  <span className="principle-number">{number}</span>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <span className="section-label">PRÓXIMAMENTE</span>
              </article>
            ))}
          </div>
          <div className="analytics-note">
            <span className="section-label"><span/> EN CONSTRUCCIÓN</span>
            <h2>El primer artículo está en camino.</h2>
            <p>Estamos preparando contenido práctico y útil. Preferimos publicar ideas con fundamento antes que llenar el espacio de contenido genérico.</p>
            <a className="text-link" href="https://atlasolutions.cl">Mientras tanto, conoce Atlas <ArrowUpRight size={16}/></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div><a className="brand brand-small" href="https://atlasolutions.cl">Atlas.</a><p>Desde Chile, sin límites.</p></div>
            <div className="footer-links"><div><span>EXPLORA</span><a href="#temas">Temas</a><a href="https://atlasolutions.cl">Atlas Solutions</a><a href="https://atlasolutions.cl/privacy">Privacidad</a></div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Atlas Solutions SpA</span><span>Hecho con propósito. Pensado para el futuro.</span></div>
        </div>
      </footer>
    </div>
  )
}
