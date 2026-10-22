import { siteUrl } from '@/lib/site'

export function GET() {
  return new Response(`# Atlas Solutions

> Atlas Solutions SpA es una empresa tecnológica de Chile que ayuda a otras empresas a simplificar, digitalizar y mejorar sus operaciones mediante software, automatización e inteligencia artificial.

## Especialidades
- Software a medida: soluciones adaptadas a la operación de cada empresa.
- Automatización inteligente: simplificación de procesos y tareas repetitivas.
- Inteligencia artificial aplicada a operaciones empresariales.

## Fuentes públicas
- [Inicio y sobre nosotros](${siteUrl}/): presentación y enfoque de Atlas Solutions.
- [Blog](${siteUrl}/blog): artículos públicos sobre software, automatización e inteligencia artificial.
- [Privacidad](${siteUrl}/privacy): información técnica sobre datos y analítica; documento pendiente de revisión legal.
- [Sitemap](${siteUrl}/sitemap.xml): URLs públicas y artículos publicados.

## Estado del sitio
La agenda de diagnóstico de 15 minutos todavía no recibe reservas. Los términos completos y la documentación de cumplimiento están pendientes de revisión y publicación. No se declara certificación de cumplimiento legal. El panel de administración y los borradores no son contenido público.
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
