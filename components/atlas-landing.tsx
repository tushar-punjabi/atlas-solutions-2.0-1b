'use client'

import { useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Braces, Check, Clock3, Globe2, Menu, ShieldCheck, Sparkles, Workflow, X } from 'lucide-react'

const information = {
  booking: { title: 'Conversemos sobre tu empresa', label: 'DIAGNÓSTICO · 15 MINUTOS', text: 'Un primer espacio para conocer tus procesos, identificar oportunidades y explorar cómo la tecnología puede ayudarte.', note: 'La agenda online estará disponible próximamente. Esta primera versión todavía no recibe reservas.' },
  blog: { title: 'Ideas para avanzar', label: 'EL BLOG DE ATLAS', text: 'Próximamente compartiremos ideas sobre software, automatización e inteligencia artificial aplicadas a los desafíos reales de las empresas.', note: 'Estamos preparando nuestras primeras publicaciones.' },
  terms: { title: 'Términos de servicio', label: 'INFORMACIÓN LEGAL', text: 'Este sitio es una presentación informativa de Atlas Solutions SpA. Esta primera versión no permite contratar servicios ni realizar pagos.', note: 'Los términos completos están pendientes de publicación y revisión legal.' },
  compliance: { title: 'Protección de datos en Chile', label: 'CUMPLIMIENTO NORMATIVO', text: 'Este espacio estará dedicado a nuestra información sobre protección de datos personales y la Ley N.º 21.719 de Chile.', note: 'La documentación está en preparación. Esta página no constituye una certificación ni una declaración de cumplimiento.' },
  privacy: { title: 'Privacidad de datos', label: 'TU INFORMACIÓN IMPORTA', text: 'Esta versión no incluye formularios de registro ni de contacto. La política de privacidad detallada se publicará antes de habilitar funciones que recopilen datos personales.', note: 'Política completa pendiente de revisión y publicación.' },
  future: { title: 'Lo que viene en Atlas', label: 'PRÓXIMAMENTE', text: 'Estamos construyendo nuevos espacios para compartir nuestros servicios, casos de éxito, recursos y oportunidades de colaboración.', note: 'Software · Automatización · Inteligencia artificial' },
}
type InformationKey = keyof typeof information

function Brand({ compact = false }: { compact?: boolean }) {
  return <a href="#inicio" className={`brand ${compact ? 'brand-small' : ''}`} aria-label="Atlas Solutions, inicio"><span>Atlas<span aria-hidden="true" style={{ display: 'inline-block', width: '0.16em', height: '0.16em', borderRadius: '50%', backgroundColor: 'var(--primary)', marginLeft: '0.04em' }} /></span></a>
}

export function AtlasLanding() {
  const [active, setActive] = useState<InformationKey>('booking')
  const [menuOpen, setMenuOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const open = (key: InformationKey) => { setActive(key); setMenuOpen(false); dialog.current?.showModal() }
  return (
    <div id="inicio" className="site-shell">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-4">Saltar al contenido</a>
      <header className="site-header container">
        <Brand />
        <nav aria-label="Navegación principal" className="desktop-nav">
          <a href="#sobre-nosotros">Sobre nosotros</a>
          <a href="/blog">Blog <ArrowUpRight size={13} /></a>
          <button className="nav-cta" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Agenda diagnóstico de 15 minutos <ArrowUpRight size={15} /></button>
        </nav>
        <button className="mobile-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegación móvil"><a href="#sobre-nosotros" onClick={() => setMenuOpen(false)}>Sobre nosotros</a><a href="/blog">Blog</a><button data-conversion="diagnostic-cta" onClick={() => open('booking')}>Agenda diagnóstico de 15 minutos <ArrowUpRight size={16} /></button></nav>}
      </header>

      <main id="contenido" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orbital orbital-one" aria-hidden="true" /><div className="orbital orbital-two" aria-hidden="true" />
          <div className="hero-content container">
            <div className="eyebrow"><Sparkles size={14} aria-hidden="true" /> MENOS COMPLEJIDAD. MÁS POSIBILIDADES.</div>
            <h1 id="hero-heading">Tecnología que impulsa.<br /><span>Empresas que avanzan.</span></h1>
            <p className="hero-description">Empresa tecnológica que ayuda a otras empresas a simplificar, digitalizar y mejorar sus operaciones mediante <strong>software, automatización e inteligencia artificial.</strong></p>
            <div className="hero-actions"><button className="primary-cta" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Hablemos de tu próximo paso <ArrowUpRight size={19} /></button><a className="secondary-cta" href="#sobre-nosotros">Conoce Atlas <ArrowDown size={16} /></a></div>
            <div className="hero-note"><Clock3 size={13} /><span>15 minutos para descubrir nuevas posibilidades.</span></div>
          </div>
          <div className="capabilities container" aria-label="Nuestras especialidades">
            <div><Braces /><span>Software a medida</span></div><span className="capability-plus" aria-hidden="true">+</span><div><Workflow /><span>Automatización inteligente</span></div><span className="capability-plus" aria-hidden="true">+</span><div><Sparkles /><span>Inteligencia artificial</span></div>
          </div>
          <div className="hero-bottom container"><span>DISEÑADO PARA LO QUE VIENE.</span><a href="#sobre-nosotros" aria-label="Explorar sobre Atlas"><ArrowDown size={17} /></a><span>DESDE CHILE, SIN LÍMITES. <Globe2 size={13} /></span></div>
        </section>

        <section id="sobre-nosotros" className="about container" aria-labelledby="about-heading">
          <div className="about-intro"><span className="section-label"><span /> TU PRÓXIMO ALIADO TECNOLÓGICO</span><h2 id="about-heading">La tecnología es el medio.<br /><span>Tu crecimiento, el propósito.</span></h2><p>Conectamos estrategia y tecnología para transformar procesos complejos en soluciones simples. Menos tareas repetitivas, más tiempo para lo que realmente importa.</p><button className="text-link" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Construyamos lo que sigue <ArrowUpRight size={16} /></button></div>
          <div className="principles"><article><span className="principle-icon"><Workflow size={20} /></span><div><h3>Simple por diseño</h3><p>Soluciones que se adaptan a tu operación.<br />No al revés.</p></div><span className="principle-number">01</span></article><article><span className="principle-icon"><AudioLines size={20} /></span><div><h3>Conectados con tu negocio</h3><p>Entendemos tus desafíos antes de escribir<br className="desktop-break" /> la primera línea de código.</p></div><span className="principle-number">02</span></article><article><span className="principle-icon"><ShieldCheck size={20} /></span><div><h3>Confianza desde el inicio</h3><p>Transparencia, colaboración y cuidado<br className="desktop-break" /> de tus datos en cada paso.</p></div><span className="principle-number">03</span></article></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-top"><div><Brand compact /><p>Hacemos simple el siguiente paso.</p></div><div className="footer-links"><div><span>EXPLORA</span><a href="#sobre-nosotros">Sobre nosotros</a><a href="/blog">Blog <ArrowUpRight size={12} /></a><button onClick={() => open('future')}>Futuros enlaces <span className="soon">PRONTO</span></button></div><div><span>LEGAL Y CONFIANZA</span><button onClick={() => open('terms')}>Términos de servicio</button><a href="/privacy">Privacidad de datos</a><button onClick={() => open('compliance')}>Ley de datos · Chile <ArrowUpRight size={12} /></button></div></div></div><div className="footer-bottom"><span>Atlas Solutions SpA - 2026</span><span>Hecho con propósito. Pensado para el futuro.</span><button className="online-button" data-conversion="diagnostic-cta" onClick={() => open('booking')}><span /> Online <ArrowUpRight size={12} /></button></div></div></footer>
      <dialog ref={dialog} className="info-dialog" aria-labelledby="dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}><button className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Cerrar"><X size={20} /></button><span className="section-label">{information[active].label}</span><h2 id="dialog-title">{information[active].title}</h2><p>{information[active].text}</p><div className="dialog-note"><Check size={17} /><span>{information[active].note}</span></div><button className="text-link" onClick={() => dialog.current?.close()}>Volver a Atlas <ArrowRight size={16} /></button></dialog>
    </div>
  )
}
