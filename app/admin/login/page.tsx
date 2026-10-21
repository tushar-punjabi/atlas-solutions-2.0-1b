import Link from 'next/link'
import {AdminLogin} from '@/components/admin-login'
export default function Page(){return <><span className="section-label">ESPACIO PRIVADO</span><h1>Acceso a Atlas</h1><AdminLogin/><Link href="/admin/setup">Configurar la primera cuenta</Link></>}
