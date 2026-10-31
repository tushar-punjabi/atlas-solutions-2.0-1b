import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, ClipboardList, Compass, FileCheck2, LockKeyhole, ShieldCheck, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nuestro compromiso | Atlas Solutions',
  description: 'Cómo trabajamos en Atlas Solutions: primero comprendemos las normas y procesos de cada negocio; después diseñamos tecnología responsable.',
  alternates: { canonical: '/compromiso' },
  openGraph: { title: 'Nuestro compromiso | Atlas Solutions', description: 'Primero comprender. Después transformar.', url: '/compromiso', type: 'website', locale: 'es_CL' },
}

const principles = [
  { title: 'Escuchar antes de proponer', description: 'Cada negocio tiene prácticas, conocimientos y restricciones que merecen ser comprendidos antes de recomendar cambios.', Icon: Compass },
  { title: 'Respetar las normas', description: 'Identificamos obligaciones legales, reglas operativas y acuerdos comerciales. No confundimos un requisito con una costumbre.', Icon: FileCheck2 },
  { title: 'Proteger la información', description: 'Diseñamos considerando privacidad, acceso mínimo, resguardos y continuidad; sin prometer seguridad absoluta.', Icon: LockKeyhole },
  { title: 'Responder por nuestro trabajo', description: 'Definimos alcances, documentamos decisiones y comunicamos oportunamente los problemas y limitaciones detectados.', Icon: ShieldCheck },
]
const steps = [
  ['01', 'Descubrir', 'Escuchar a quienes conocen la operación y observar cómo se realiza el trabajo.'],
  ['02', 'Comprender', 'Identificar reglas, responsables, excepciones, riesgos y dependencias.'],
  ['03', 'Modelar', 'Documentar el proceso actual y validar que lo entendimos correctamente.'],
  ['04', 'Proponer', 'Comparar opciones y explicar beneficios, costos, restricciones y posibles efectos.'],
  ['05', 'Validar', 'Probar con usuarios y criterios acordados antes de extender una solución.'],
  ['06', 'Mejorar', 'Medir resultados, atender incidentes y ajustar con evidencia.'],
]
export default function CompromisoPage() {
  return (
    <div className="min-h-screen bg-[#061d42] text-[#f3f7ff]">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#8ad6ff] focus:p-3 focus:text-[#061d42]">Saltar al contenido</a>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-7 md:px-10">
          <Link href="/" className="text-3xl font-semibold tracking-tight" style={{fontFamily:'var(--font-display)'}}>Atlas<span className="text-[#8ad6ff]">.</span></Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#b7cce5] hover:text-[#8ad6ff]"><ArrowLeft size={16}/> Volver al inicio</Link>
        </div>
      </header>
      <main id="contenido">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_60%_25%,#164579_0%,#0b2b57_40%,#061d42_80%)]">
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.23em] text-[#8ad6ff]">Atlas Solutions · Declaración de principios</p>
            <h1 className="max-w-4xl text-5xl leading-[1.09] tracking-tight md:text-7xl" style={{fontFamily:'var(--font-display)'}}>Primero comprender.<br/><span className="text-[#8ad6ff]">Después transformar.</span></h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#b9cbe1]">Antes de proponer tecnología, buscamos entender cómo funciona cada empresa: sus procedimientos, normas, decisiones y las personas que sostienen su operación.</p>
            <a href="#metodo" className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#8ad6ff] px-6 py-4 text-sm font-semibold text-[#08284d] hover:bg-[#b6e6ff]">Conoce nuestro método <ArrowUpRight size={17}/></a>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-28">
          <div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Nuestra forma de pensar</p><h2 className="mt-4 text-3xl leading-tight md:text-4xl">La experiencia de tu empresa es el punto de partida.</h2></div>
          <div className="space-y-5 text-base leading-8 text-[#b9cbe1]"><p>Una norma puede responder a una obligación, a un riesgo o a una necesidad real de la operación. Una práctica informal también puede contener conocimiento valioso.</p><p>No asumimos que un proceso está equivocado porque sea manual o antiguo. Primero averiguamos por qué existe y qué sucedería si cambiara.</p><p className="font-medium text-white">La tecnología debe adaptarse al contexto del negocio, no imponer complejidad innecesaria.</p></div>
        </section>
        <section className="border-y border-white/10 bg-[#091f40] py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-10"><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Compromisos</p><h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">Principios que guían nuestras decisiones.</h2><div className="mt-12 grid gap-4 md:grid-cols-2">{principles.map(({title,description,Icon})=><article key={title} className="rounded-xl border border-white/10 bg-white/[0.025] p-7"><Icon size={25} className="mb-6 text-[#8ad6ff]" aria-hidden="true"/><h3 className="text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[#b9cbe1]">{description}</p></article>)}</div></div></section>
        <section id="metodo" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"><div className="mb-12 flex items-start gap-4"><Workflow className="mt-1 shrink-0 text-[#8ad6ff]" size={28}/><div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Método Atlas</p><h2 className="mt-3 text-3xl md:text-4xl">De la comprensión a la mejora.</h2></div></div><div className="grid gap-4 md:grid-cols-3">{steps.map(([number,title,description])=><article key={number} className="border-t border-white/20 py-6"><span className="text-xs tracking-widest text-[#8ad6ff]">{number}</span><h3 className="mt-5 text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[#b9cbe1]">{description}</p></article>)}</div></section>
        <section className="border-y border-white/10 bg-[#091f40] py-20"><div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10"><div><ClipboardList className="mb-5 text-[#8ad6ff]" size={28}/><h2 className="text-3xl">Transparencia también significa hablar de límites.</h2></div><div className="space-y-5 text-sm leading-7 text-[#b9cbe1]"><p>No prometemos resultados sin un diagnóstico ni recomendamos automatizaciones cuando no existe un problema claro que resolver.</p><p>No afirmamos tener certificaciones, auditorías o garantías que no podamos respaldar. Los servicios, entregables, responsables y condiciones deben acordarse por escrito.</p><p>Cuando identificamos errores o riesgos, buscamos comunicarlos, documentarlos y acordar un plan de corrección. La respuesta concreta dependerá del contrato y del incidente.</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24"><div className="rounded-2xl border border-[#8ad6ff]/20 bg-[#10325b] p-8 md:p-12"><div className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-[#8ad6ff]" size={24}/><div><p className="text-xs uppercase tracking-[0.2em] text-[#8ad6ff]">Declaración pública · Versión 1.0</p><h2 className="mt-3 text-2xl md:text-3xl">La confianza debe poder evaluarse.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#b9cbe1]">Publicamos estos principios para que clientes y colaboradores conozcan el criterio con el que buscamos trabajar. Los revisaremos cuando aprendamos o cambien nuestras responsabilidades. Esta página describe compromisos de trabajo, no una certificación de cumplimiento.</p><Link href="/privacy" className="mt-6 inline-flex items-center gap-2 text-sm text-[#8ad6ff] hover:text-white">Conocer nuestra información de privacidad <ArrowUpRight size={16}/></Link></div></div></div></section>
      </main>
      <footer className="border-t border-white/10 bg-[#051832]"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-6 py-10 text-sm text-[#a9b9cf] md:flex-row md:items-center md:px-10"><span>Atlas Solutions SpA · Iquique, Chile</span><div className="flex gap-6"><Link href="/">Inicio</Link><Link href="/blog">Blog</Link><Link href="/privacy">Privacidad</Link></div></div></footer>
    </div>
  )
}
