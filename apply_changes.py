from pathlib import Path
from urllib.parse import quote

path = Path('components/atlas-landing.tsx')
if not path.is_file():
    raise SystemExit('Ejecuta este script desde la raíz del repositorio Atlas.')
s = path.read_text(encoding='utf-8')
if 'const diagnosticUrl =' in s and 'Nuestro compromiso</a>' in s:
    raise SystemExit('Cambios ya aplicados. No se modificó nada.')
url = 'https://wa.me/56922385213?text=' + quote('Hola, soy [nombre] de [empresa]. Me gustaría coordinar un diagnóstico inicial de 15 minutos con Atlas Solutions para conversar sobre nuestros procesos y necesidades tecnológicas. ¿Qué disponibilidad tienen?')
replacements = [
("  booking: { title: 'Conversemos sobre tu empresa', label: 'DIAGNÓSTICO · 15 MINUTOS', text: 'Un primer espacio para conocer tus procesos, identificar oportunidades y explorar cómo la tecnología puede ayudarte.', note: 'La agenda online estará disponible próximamente. Esta primera versión todavía no recibe reservas.' },\n", ''),
('type InformationKey = keyof typeof information', "const diagnosticUrl = '" + url + "'\ntype InformationKey = keyof typeof information"),
("useState<InformationKey>('booking')", "useState<InformationKey>('blog')"),
('<a href="/blog">Blog <ArrowUpRight size={13} /></a>', '<a href="/blog">Blog <ArrowUpRight size={13} /></a><a href="/compromiso">Nuestro compromiso</a>'),
('''<button className="nav-cta" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Agenda diagnóstico de 15 minutos <ArrowUpRight size={15} /></button>''', '''<a className="nav-cta" data-conversion="diagnostic-cta" href={diagnosticUrl} target="_blank" rel="noopener noreferrer">Solicitar diagnóstico por WhatsApp <ArrowUpRight size={15} /></a>'''),
('''<a href="/blog">Blog</a><button data-conversion="diagnostic-cta" onClick={() => open('booking')}>Agenda diagnóstico de 15 minutos <ArrowUpRight size={16} /></button>''', '''<a href="/blog">Blog</a><a href="/compromiso" onClick={() => setMenuOpen(false)}>Nuestro compromiso</a><a data-conversion="diagnostic-cta" href={diagnosticUrl} target="_blank" rel="noopener noreferrer">Solicitar diagnóstico por WhatsApp <ArrowUpRight size={16} /></a>'''),
('''<button className="primary-cta" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Hablemos de tu próximo paso <ArrowUpRight size={19} /></button>''', '''<a className="primary-cta" data-conversion="diagnostic-cta" href={diagnosticUrl} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <ArrowUpRight size={19} /></a>'''),
('''<button className="text-link" data-conversion="diagnostic-cta" onClick={() => open('booking')}>Construyamos lo que sigue <ArrowUpRight size={16} /></button>''', '''<a className="text-link" data-conversion="diagnostic-cta" href={diagnosticUrl} target="_blank" rel="noopener noreferrer">Construyamos lo que sigue <ArrowUpRight size={16} /></a>'''),
('<a href="/blog">Blog <ArrowUpRight size={12} /></a>', '<a href="/blog">Blog <ArrowUpRight size={12} /></a><a href="/compromiso">Nuestro compromiso</a>'),
('''<button className="online-button" data-conversion="diagnostic-cta" onClick={() => open('booking')}><span /> Online <ArrowUpRight size={12} /></button>''', '''<a className="online-button" data-conversion="diagnostic-cta" href={diagnosticUrl} target="_blank" rel="noopener noreferrer"><span /> Contáctanos <ArrowUpRight size={12} /></a>'''),
]
for old, new in replacements:
    n = s.count(old)
    if n != 1:
        raise SystemExit(f'No se aplicó: coincidencias esperadas 1, encontradas {n}: {old[:80]}')
    s = s.replace(old, new, 1)
path.write_text(s, encoding='utf-8')
print('Actualizado:', path)
print('WhatsApp:', url)
