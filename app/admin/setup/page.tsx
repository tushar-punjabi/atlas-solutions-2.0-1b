import Link from 'next/link'
import {AdminSetup} from '@/components/admin-setup'
export default function Page(){return <><h1>Configuración inicial</h1><AdminSetup/><Link href="/admin/login">Iniciar sesión →</Link></>}
