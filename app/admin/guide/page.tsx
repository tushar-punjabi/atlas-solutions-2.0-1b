import {readFile} from 'node:fs/promises'
import path from 'node:path'
import Markdown from 'react-markdown'
import Link from 'next/link'
import {requireAdmin} from '@/lib/admin'
export default async function Page(){await requireAdmin();const content=await readFile(path.join(process.cwd(),'docs/blog-guide.md'),'utf8');return <><Link href="/admin">← Volver al panel</Link><div className="prose"><Markdown>{content}</Markdown></div></>}
