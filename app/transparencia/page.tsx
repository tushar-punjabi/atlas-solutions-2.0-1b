import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, FileLock2, HeartHandshake, LockKeyhole, Scale, ShieldCheck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacidad, confidencialidad y confianza | Atlas Solutions',
  description: 'Conoce cómo Atlas Solutions aborda la confidencialidad empresarial, la privacidad y la Ley N.º 21.719 de protección de datos personales en Chile.',
  alternates: { canonical: '/transparencia' },
  openGraph: { title: 'Privacidad y confianza | Atlas Solutions', description: 'Tu información merece respeto. Conoce nuestros principios de seguridad y confidencialidad.', url: '/transparencia', type: 'website', locale: 'es_CL' },
}

const pillars = [
  { title: 'Confidencialidad', text: 'Tratamos la información compartida con discreción y únicamente para las finalidades acordadas y legítimas.', Icon: LockKeyhole },
  { title: 'Uso responsable', text: 'Buscamos solicitar y utilizar solo los datos necesarios para desarrollar cada servicio.', Icon: FileLock2 },
  { title: 'Seguridad por diseño', text: 'Evaluamos los riesgos y definimos controles apropiados para cada proyecto y su entorno.', Icon: ShieldCheck },
  { title: 'Transparencia', text: 'Explicamos qué información se necesita, para qué y qué responsabilidades corresponden a cada parte.', Icon: HeartHandshake },
]
const questions = [
  { question: '¿Necesito compartir información confidencial para una primera reunión?', answer: 'No. Podemos conocer tu problema y conversar sobre posibles mejoras sin solicitar contraseñas, bases de datos, contratos ni documentación sensible.' },
  { question: '¿Atlas puede publicar mis datos o mostrar mi proyecto?', answer: 'Nuestro compromiso es no divulgar antecedentes confidenciales ni utilizar casos de clientes para fines promocionales sin las autorizaciones pertinentes.' },
  { question: '¿Dónde se almacenan los datos de un proyecto?', answer: 'Depende de la solución acordada. Antes de implementar un tratamiento de datos, deben precisarse la arquitectura, los proveedores involucrados, los accesos y las medidas de seguridad aplicables.' },
  { question: '¿La Ley N.º 21.719 protege todos los secretos de una empresa?', answer: 'No. Regula principalmente datos personales de personas naturales. Los secretos comerciales, documentos internos y otra información empresarial requieren también resguardos contractuales, organizacionales y técnicos.' },
]

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen bg-[#061d42] text-[#f3f7ff]">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#8ad6ff] focus:p-3 focus:text-[#061d42]">Saltar al contenido</a>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-7 md:px-10">
          <Link href="/" className="text-3xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Atlas<span className="text-[#8ad6ff]">.</span></Link>
          <nav aria-label="Secciones de Atlas" className="flex flex-wrap items-center gap-4 text-sm text-[#b7cce5]"><Link href="/compromiso" className="hover:text-[#8ad6ff]">Compromiso</Link><Link href="/privacy" className="hover:text-[#8ad6ff]">Privacidad</Link><Link href="/" className="inline-flex items-center gap-2 hover:text-[#8ad6ff]"><ArrowLeft size={16} /> Inicio</Link></nav>
        </div>
      </header>

      <main id="contenido">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_60%_25%,#164579_0%,#0b2b57_40%,#061d42_80%)]">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8ad6ff]/25 bg-[#8ad6ff]/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#8ad6ff]"><ShieldCheck size={15} /> Privacidad · Confidencialidad · Confianza</div>
            <h1 className="max-w-5xl text-5xl leading-[1.1] tracking-tight md:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>Tu información merece <span className="text-[#8ad6ff]">respeto.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b9cbe1]">Detrás de cada empresa hay años de trabajo, relaciones y decisiones. Creemos que su información merece un trato cuidadoso, explicaciones claras y compromisos que podamos respaldar.</p>
            <a href="#compromisos" className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#8ad6ff] px-6 py-4 text-sm font-semibold !text-[#08284d] hover:!text-[#061d42] hover:bg-[#b6e6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ad6ff]">Conoce nuestros compromisos <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-24">
          <div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Nuestra convicción</p><h2 className="mt-4 text-3xl leading-tight md:text-4xl">La confianza no se pide. Se construye.</h2></div>
          <div className="space-y-5 text-base leading-8 text-[#b9cbe1]"><p>Una empresa que busca mejorar sus procesos no debería tener que renunciar a la privacidad de su operación para recibir ayuda tecnológica.</p><p>En Atlas Solutions aspiramos a ser un socio confiable: escuchamos primero, delimitamos qué información necesitamos y acordamos cómo se utilizará.</p><p className="font-medium text-white">No necesitas compartir datos sensibles ni accesos a tus sistemas para comenzar una conversación con nosotros.</p></div>
        </section>

        <section id="compromisos" className="border-y border-white/10 bg-[#091f40] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-10"><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Nuestro criterio de trabajo</p><h2 className="mt-4 max-w-3xl text-3xl md:text-4xl">Cuatro principios para cuidar la confianza.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">{pillars.map(({ title, text, Icon }) => <article key={title} className="rounded-xl border border-white/10 bg-white/[0.025] p-7"><Icon size={26} className="mb-6 text-[#8ad6ff]" aria-hidden="true" /><h3 className="text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[#b9cbe1]">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div><Scale size={30} className="mb-5 text-[#8ad6ff]" /><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Marco legal chileno</p><h2 className="mt-4 text-3xl md:text-4xl">La nueva ley de protección de datos.</h2></div>
            <div className="space-y-5 text-sm leading-8 text-[#b9cbe1]"><p>La <strong className="text-white">Ley N.º 21.719</strong> moderniza el régimen chileno de protección de datos personales, modifica la Ley N.º 19.628 y crea una nueva institucionalidad. Fortalece principios como finalidad, proporcionalidad, seguridad, transparencia, confidencialidad y responsabilidad.</p><p>El texto legal consultado fija su entrada en vigencia general para el <strong className="text-white">1 de diciembre de 2026</strong>. A noviembre de 2026 existe una propuesta de postergación en trámite legislativo, por lo que la fecha debe volver a verificarse antes de su aplicación.</p><p>Esta ley protege principalmente los datos de personas naturales. La información comercial y los secretos empresariales también requieren acuerdos y controles específicos, más allá de la normativa de datos personales.</p><a className="inline-flex items-center gap-2 text-[#8ad6ff] hover:text-white" href="https://www.bcn.cl/leychile/Navegar?idNorma=1209272" target="_blank" rel="noopener noreferrer">Consultar texto oficial en LeyChile <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091f40] py-20"><div className="mx-auto max-w-6xl px-6 md:px-10"><div className="mb-10 flex items-center gap-3"><Users className="text-[#8ad6ff]" size={27} /><div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Preguntas habituales</p><h2 className="mt-2 text-3xl md:text-4xl">Respuestas claras, sin letra pequeña.</h2></div></div><div className="grid gap-4 md:grid-cols-2">{questions.map(({ question, answer }) => <article key={question} className="rounded-xl border border-white/10 p-7"><h3 className="text-lg leading-7">{question}</h3><p className="mt-4 text-sm leading-7 text-[#b9cbe1]">{answer}</p></article>)}</div></div></section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24"><div className="rounded-2xl border border-[#8ad6ff]/20 bg-[#10325b] p-8 md:p-12"><div className="flex items-start gap-4"><CheckCircle2 className="mt-1 shrink-0 text-[#8ad6ff]" size={26} /><div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Transparencia también es reconocer límites</p><h2 className="mt-3 text-2xl md:text-3xl">Compromisos responsables, no promesas absolutas.</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-[#b9cbe1]">La seguridad depende del alcance, la arquitectura y los riesgos de cada servicio. No afirmamos tener certificaciones o garantías que no podamos demostrar. Las medidas concretas, responsables y condiciones de tratamiento deben documentarse en cada proyecto.</p><p className="mt-4 max-w-3xl text-sm leading-7 text-[#b9cbe1]">Esta declaración institucional no sustituye nuestra información técnica de privacidad, un contrato de confidencialidad ni asesoría legal. Cuando corresponda, aplicarán condiciones específicas para el tratamiento de datos personales.</p><div className="mt-7 flex flex-wrap gap-5"><Link href="/privacy" className="inline-flex items-center gap-2 text-sm text-[#8ad6ff] hover:text-white"><BookOpen size={16} /> Leer información de privacidad</Link><Link href="/compromiso" className="inline-flex items-center gap-2 text-sm text-[#8ad6ff] hover:text-white">Nuestro compromiso <ArrowUpRight size={16} /></Link></div></div></div></div></section>

        <section className="border-t border-white/10 py-20 text-center"><div className="mx-auto max-w-3xl px-6"><h2 className="text-3xl md:text-4xl">Conversemos con confianza.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#b9cbe1]">Podemos comenzar por comprender tus necesidades, sin solicitar acceso a tus sistemas ni información confidencial.</p><a href="https://wa.me/56922385213?text=Hola%2C%20quiero%20coordinar%20un%20diagn%C3%B3stico%20inicial%20con%20Atlas%20Solutions." target="_blank" rel="noopener noreferrer" data-conversion="diagnostic-cta" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#8ad6ff] px-6 py-4 text-sm font-semibold !text-[#08284d] hover:!text-[#061d42] hover:bg-[#b6e6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ad6ff]">Solicitar diagnóstico por WhatsApp <ArrowUpRight size={17} /></a></div></section>
      </main>
      <footer className="border-t border-white/10 bg-[#051832]"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-6 py-10 text-sm text-[#a9b9cf] md:flex-row md:items-center md:px-10"><span>Atlas Solutions SpA · Iquique, Chile</span><div className="flex flex-wrap gap-6"><Link href="/">Inicio</Link><Link href="/compromiso">Compromiso</Link><Link href="/privacy">Privacidad</Link><Link href="/transparencia" aria-current="page" className="text-[#8ad6ff]">Transparencia</Link></div><span className="text-xs">Revisión editorial: noviembre de 2026</span></div></footer>
    </div>
  )
}
