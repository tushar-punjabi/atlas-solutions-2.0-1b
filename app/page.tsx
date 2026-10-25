import { AtlasLanding } from '@/components/atlas-landing'
import { siteUrl } from '@/lib/site'

export const metadata = { alternates: { canonical: '/' } }

export default function Page() {
  const structured = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Atlas Solutions', legalName: 'Atlas Solutions SpA', url: siteUrl, description: 'Empresa tecnológica de Chile que ayuda a otras empresas a simplificar, digitalizar y mejorar sus operaciones mediante software, automatización e inteligencia artificial.', knowsAbout: ['Software a medida', 'Automatización de procesos', 'Inteligencia artificial'] },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Atlas Solutions', inLanguage: 'es-CL', publisher: { '@id': `${siteUrl}/#organization` } },
      { '@type': 'WebPage', '@id': `${siteUrl}/#webpage`, url: siteUrl, name: 'Atlas Solutions | Software, automatización e IA en Chile', inLanguage: 'es-CL', isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#organization` } },
    ],
  }
  return <><AtlasLanding /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }} /></>
}
