'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
export function AdminLogin() {
 const router=useRouter(); const [message,setMessage]=useState(''); const [busy,setBusy]=useState(false)
 return <form className="editor-form" onSubmit={async e=>{e.preventDefault();setBusy(true);setMessage('');const data=new FormData(e.currentTarget);try {const result=await authClient.signIn.email({email:String(data.get('email')),password:String(data.get('password'))});if(result.error)setMessage('No se pudo iniciar sesión. Revisa tus credenciales.');else {router.push('/admin');router.refresh()}}catch {setMessage('No se pudo conectar. Inténtalo nuevamente.')}finally{setBusy(false)}}}><label>Correo de administrador<input name="email" type="email" autoComplete="username" required /></label><label>Contraseña<input name="password" type="password" autoComplete="current-password" required /></label><button className="primary-cta" disabled={busy}>{busy?'Ingresando…':'Iniciar sesión'}</button><p role="status">{message}</p></form>
}
export function SignOut() { const router=useRouter();return <button className="secondary-cta" onClick={async()=>{await authClient.signOut();router.push('/admin/login');router.refresh()}}>Cerrar sesión</button> }
