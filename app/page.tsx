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

// ------------------------------- Formulario ----------------------------------


'use client'; // Requerido para componentes interactivos en App Router

import Script from 'next/script';

// Extendemos la interfaz global de Window para que TypeScript reconozca el objeto Tally
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, any>) => void;
      closePopup: (formId: string) => void;
    };
  }
}

export default function LandingPage() {

  const abrirFormulario = (): void => {
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.openPopup('aOQW4Z', {
        layout: 'modal',
        width: 700,
        autoClose: 5000, // Cierra automáticamente el popup 5 segundos después de enviar el formulario
      });
    } else {
      console.warn('El script de Tally aún no se ha inicializado.');
    }
  };

  return (
    <>
      {/* Carga optimizada del script de Tally */}
      <Script 
        src="https://tally.so" 
        strategy="afterInteractive" 
      />

      {/* Tu contenido actual de la Landing Page */}
      <main style={{ fontFamily: 'system-ui, sans-serif', padding: '40px' }}>
        <h1>Bienvenidos a mi Sitio Web</h1>
        <p>Este es el contenido principal de tu landing page.</p>
      </main>

      {/* Botón flotante fijo en la esquina inferior derecha */}
      <button 
        onClick={abrirFormulario}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999, // Asegura que se posicione por encima de otros componentes
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          backgroundColor: '#0070f3', // Azul por defecto de Next.js
          color: 'white',
          border: 'none',
          borderRadius: '30px', // Estilo píldora
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Sombra sutil
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0051cb')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
      >
        💬 Contacto
      </button>
    </>
  );
}
