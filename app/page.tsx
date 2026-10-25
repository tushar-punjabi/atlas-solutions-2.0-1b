'use client'; // Requerido para componentes interactivos en App Router

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