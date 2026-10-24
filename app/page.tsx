'use client'; // Requerido para componentes interactivos en App Router

import { useState } from 'react';
import Script from 'next/script';
import { AtlasLanding } from '@/components/atlas-landing';
import { siteUrl } from '@/lib/site';

// Extendemos la interfaz global de Window con ambas variantes posibles del objeto
declare global {
  interface Window {
    Tally?: any;
    tally?: any;
  }
}

export default function Page() {
  const [scriptCargado, setScriptCargado] = useState(false);

  // Datos estructurados SEO (Schema.org)
  const structured = {
    '@context': 'https://schema.org',
    '@graph': [
      { 
        '@type': 'Organization', 
        '@id': `${siteUrl}/#organization`, 
        name: 'Atlas Solutions', 
        legalName: 'Atlas Solutions SpA', 
        url: siteUrl, 
        description: 'Empresa tecnológica de Chile que ayuda a otras empresas a simplificar, digitalizar y mejorar sus operaciones mediante software, automatización e inteligencia artificial.', 
        knowsAbout: ['Software a medida', 'Automatización de procesos', 'Inteligencia artificial'] 
      },
      { 
        '@type': 'WebSite', 
        '@id': `${siteUrl}/#website`, 
        url: siteUrl, 
        name: 'Atlas Solutions', 
        inLanguage: 'es-CL', 
        publisher: { '@id': `${siteUrl}/#organization` } 
      },
      { 
        '@type': 'WebPage', 
        '@id': `${siteUrl}/#webpage`, 
        url: siteUrl, 
        name: 'Atlas Solutions | Software, automatización e IA en Chile', 
        inLanguage: 'es-CL', 
        isPartOf: { '@id': `${siteUrl}/#website` }, 
        about: { '@id': `${siteUrl}/#organization` } 
      },
    ],
  };

  const abrirFormulario = (): void => {
    if (typeof window !== 'undefined') {
      // Validamos ambas instancias globales expuestas por el script
      const instanciaTally = window.tally || window.Tally;

      if (instanciaTally && typeof instanciaTally.openPopup === 'function') {
        instanciaTally.openPopup('aOQW4Z', {
          layout: 'modal',
          width: 700,
          autoClose: 5000, 
        });
      } else {
        console.warn('El script de Tally se descargó pero el objeto global no está listo.');
      }
    }
  };

  return (
    <>
      {/* Script corregido con eventos de ciclo de vida de Next.js */}
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="afterInteractive"
        onLoad={() => setScriptCargado(true)} // Se activa cuando el archivo JS está listo
      />

      {/* Inyección segura del JSON-LD para SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }} 
      />

      {/* Tu Landing Page Real */}
      <AtlasLanding />

      {/* Botón flotante fijo en la esquina inferior derecha */}
      <button 
        onClick={abrirFormulario}
        disabled={!scriptCargado} // Deshabilitado temporalmente hasta que se descargue el CDN
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999, 
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          backgroundColor: scriptCargado ? '#0070f3' : '#a0aec0', // Gris si no está listo
          color: 'white',
          border: 'none',
          borderRadius: '30px', 
          cursor: scriptCargado ? 'pointer' : 'not-allowed',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
          transition: 'background-color 0.2s ease, transform 0.1s ease',
        }}
        onMouseEnter={(e) => {
          if (scriptCargado) e.currentTarget.style.backgroundColor = '#0051cb';
        }}
        onMouseLeave={(e) => {
          if (scriptCargado) e.currentTarget.style.backgroundColor = '#0070f3';
        }}
      >
        {scriptCargado ? '💬 Contacto' : '⏳ Cargando...'}
      </button>
    </>
  );
}
