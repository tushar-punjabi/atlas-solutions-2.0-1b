# Atlas: administración, publicación y analítica

## Primera cuenta
1. Abre `/admin/setup` en tu sitio (preferiblemente en una pestaña independiente).
2. Introduce el valor de BETTER_AUTH_SECRET que guardaste en Vars, únicamente en el campo privado de configuración. Nunca lo compartas ni lo pegues en un artículo.
3. Elige una contraseña nueva de al menos 12 caracteres. Esta contraseña debe ser diferente del secreto.
4. La cuenta se crea para ADMIN_EMAIL. Abre `/admin/login` e inicia sesión con ese correo y tu nueva contraseña.
5. La configuración no reemplaza cuentas existentes. El registro público está bloqueado. Solo ADMIN_EMAIL puede acceder al panel. No hay recuperación de contraseña por email configurada todavía; guarda la contraseña en un gestor seguro.

## Crear, editar y publicar
1. En `/admin`, selecciona **Crear artículo**.
2. Completa título, URL (minúsculas, números y guiones), resumen y contenido Markdown.
3. Usa `## Subtítulo`, `**negrita**`, listas con `-` y `[texto](https://...)`. No uses HTML: no se ejecuta ni se renderiza como HTML.
4. La vista previa sirve para revisar el contenido. No hay guardado automático.
5. Guarda como **Borrador** para mantenerlo privado. Regresa al panel y selecciona el artículo para continuar editándolo.
6. Para publicarlo, cambia el estado a **Publicado** y guarda. Aparece en `/blog`, su URL y el sitemap, sin necesitar un nuevo despliegue.
7. Para retirarlo, cambia a **Borrador**. La URL pública devolverá 404. No se elimina el contenido.
8. Después de guardar, vuelve al panel para abrirlo nuevamente. Evita cambiar la URL después de publicar: no se crean redirecciones automáticas.

## Imágenes y archivos
Esta versión permite imágenes mediante Markdown `![Descripción accesible](https://url-publica-de-la-imagen)`; usa solamente imágenes públicas de confianza. No tiene carga de archivos ni importación de Word/PDF. Para subir imágenes directamente al panel se necesita añadir almacenamiento de archivos. No enlaces documentos privados.

## SEO
- Un título concreto por artículo; usa subtítulos de nivel 2 en el cuerpo.
- Completa título SEO (hasta 70 caracteres) y descripción SEO (hasta 170); si están vacíos se usa título y resumen.
- Cada artículo publicado tiene canonical, metadatos Open Graph y BlogPosting JSON-LD.
- `/sitemap.xml` incluye solo contenido publicado. `/robots.txt` excluye administración y API; esto no reemplaza la autenticación.
- Cuando tengas dominio propio, configúralo en Vercel y añade BETTER_AUTH_URL con `https://tu-dominio` en Vars. Publica de nuevo. Este valor también fija las URL canónicas. Revisa el sitemap antes de enviarlo a Google Search Console.
- Mantén los despliegues de prueba protegidos en Vercel. No envíes sus sitemaps a Google.

## Google Analytics 4
La integración está desactivada hasta que tengas un ID público G-… válido.
1. Crea una propiedad y flujo web en Google Analytics para tu dominio.
2. En v0, pide: “Configura mi Measurement ID G-… en lib/analytics-config.ts”. El ID es público, no es una contraseña. Alternativamente edita ese archivo mediante GitHub y despliega el cambio.
3. Desactiva la medición automática de cambios de historial en Enhanced Measurement: el sitio envía manualmente `page_view` por navegación, sin query strings. Así evitas duplicados.
4. Acepta analítica en el banner y revisa Realtime. No se carga Google ni Vercel Analytics antes de aceptar, después de rechazar ni dentro de `/admin`.
5. `diagnostic_interest` mide clics en los botones de diagnóstico. Puedes marcarlo como evento clave en GA4, pero NO equivale a una reserva: la agenda sigue pendiente.
6. Consulta las cifras en Google Analytics y en la pestaña Analytics del proyecto en Vercel (habilítala si hace falta). No se replican estas métricas en Neon ni en el panel.
7. Las preferencias se guardan en una cookie durante seis meses. El botón “Preferencias de privacidad” permite retirarlas. La retirada detiene nuevas mediciones, no borra datos históricos de los proveedores.

## Privacidad antes del lanzamiento
La página `/privacy` describe el comportamiento técnico, no certifica cumplimiento legal. Completa responsable/contacto, retención, derechos y transferencias internacionales con asesoría legal antes de activar GA4. No envíes emails, contraseñas ni datos sensibles en eventos.

## Qué está pendiente
Dominio definitivo, Measurement ID, agenda real, política legal final, recuperación de contraseña por correo y carga directa de imágenes. El panel no incluye informes embebidos de GA4 ni monitorización de errores del servidor.
