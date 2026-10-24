'use client'; // Requerido para componentes interactivos en App Router

import { useState } from 'react';
import Script from 'next/script';
import { AtlasLanding } from '@/components/atlas-landing';
import { siteUrl } from '@/lib/site';

// Extendemos la interfaz global de Window para TypeScript
declare global {
  interface Window {
    Tally?: any;
    tally?: any;
    Calendly?: any;
  }
}

export default function Page() {
  const [isTallyLoaded, setIsTallyLoaded] = useState(false);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  // Tu enlace personalizado de Calendly integrado directamente
  const CALENDLY_URL = 'https://calendly.com/moholay/new-meeting';

  // Manejador del popup de Calendly
  const abrirCalendly = (): void => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
      });
    } else {
      console.warn('El script de Calendly aún no se ha cargado por completo.');
    }
  };

  // Manejador del popup de Tally
  const abrirTally = (): void => {
    if (typeof window !== 'undefined') {
      const instanciaTally = window.tally || window.Tally;
      if (instanciaTally && typeof instanciaTally.openPopup === 'function') {
        instanciaTally.openPopup('aOQW4Z', {
          layout: 'modal',
          width: 700,
          autoClose: 5000, 
        });
      }
    }
  };

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

  return (
    <>
      {/* Script de Tally */}
      <Script 
        src="https://tally.so" 
        strategy="afterInteractive"
        onLoad={() => setIsTallyLoaded(true)} 
      />
      
      {/* Estilos y Script Oficiales de Calendly */}
      <link 
        href="https://calendly.com" 
        rel="stylesheet" 
      />
      <Script
        src="https://calendly.com"
        strategy="afterInteractive"
        onLoad={() => setIsCalendlyLoaded(true)}
      />

      {/* Inyección JSON-LD SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }} 
      />

      {/* Estructura de tu Landing Page */}
      <main style={{ fontFamily: 'system-ui, sans-serif', padding: '40px' }}>
        <AtlasLanding />

        {/* Botón de Calendly centrado en el flujo de la página */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <button
            onClick={abrirCalendly}
            disabled={!isCalendlyLoaded}
            style={{
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '700',
              backgroundColor: isCalendlyLoaded ? '#006BFF' : '#a0aec0', // Azul Corporativo de Calendly
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: isCalendlyLoaded ? 'pointer' : 'not-allowed',
              boxShadow: '0 4px 14px rgba(0, 107, 255, 0.3)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (isCalendlyLoaded) e.currentTarget.style.backgroundColor = '#0053C9';
            }}
            onMouseLeave={(e) => {
              if (isCalendlyLoaded) e.currentTarget.style.backgroundColor = '#006BFF';
            }}
          >
            {isCalendlyLoaded ? '📅 Agenda diagnóstico de 15 min' : '⏳ Cargando agenda...'}
          </button>
        </div>
      </main>

      {/* Botón de Tally fijo abajo a la derecha */}
      <button 
        onClick={abrirTally}
        disabled={!isTallyLoaded} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999, 
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          backgroundColor: isTallyLoaded ? '#0070f3' : '#a0aec0', 
          color: 'white',
          border: 'none',
          borderRadius: '30px', 
          cursor: isTallyLoaded ? 'pointer' : 'not-allowed',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          if (isTallyLoaded) e.currentTarget.style.backgroundColor = '#0051cb';
        }}
        onMouseLeave={(e) => {
          if (isTallyLoaded) e.currentTarget.style.backgroundColor = '#0070f3';
        }}
      >
        {isTallyLoaded ? '💬 Contacto' : '⏳...'}
      </button>
    </>
  );
}
