'use client'
import {useEffect,useState} from 'react'
import Script from 'next/script'
import {usePathname} from 'next/navigation'
import {Analytics} from '@vercel/analytics/next'
import {gaMeasurementId} from '@/lib/analytics-config'
declare global {interface Window {dataLayer:unknown[];gtag?:(...args:unknown[])=>void}}
function consent(){return document.cookie.split('; ').find(c=>c.startsWith('atlas_analytics='))?.split('=')[1]}
export function SiteAnalytics(){
 const path=usePathname();const [choice,setChoice]=useState<string>();const [ready,setReady]=useState(false);const [settings,setSettings]=useState(false)
 useEffect(()=>{setChoice(consent());setReady(true)},[])
 const enabled=choice==='yes'&&!path.startsWith('/admin');const validId=/^G-[A-Z0-9]+$/.test(gaMeasurementId)
 useEffect(()=>{if(enabled&&validId&&window.gtag)window.gtag('event','page_view',{page_location:location.origin+path,page_path:path})},[path,enabled,validId])
 useEffect(()=>{if(!enabled)return;const listener=(e:MouseEvent)=>{const target=(e.target as Element).closest('[data-conversion]');if(target&&validId)window.gtag?.('event','diagnostic_interest',{placement:target.getAttribute('data-conversion')})};document.addEventListener('click',listener);return()=>document.removeEventListener('click',listener)},[enabled,validId])
 function choose(value:string){document.cookie=`atlas_analytics=${value}; Path=/; Max-Age=15552000; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;if(value==='no'){window.gtag?.('consent','update',{analytics_storage:'denied'});for(const cookie of document.cookie.split('; ')){const name=cookie.split('=')[0];if(name.startsWith('_ga')){const hosts=location.hostname.split('.');document.cookie=`${name}=; Max-Age=0; Path=/`;for(let i=0;i<hosts.length-1;i++)document.cookie=`${name}=; Max-Age=0; Path=/; Domain=.${hosts.slice(i).join('.')}`}}}setChoice(value);setSettings(false);location.reload()}
 if(!ready||path.startsWith('/admin'))return null
 return <>{enabled&&process.env.NODE_ENV==='production'&&<Analytics/>}{enabled&&validId&&<Script id="atlas-ga" src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" onReady={()=>{window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});window.gtag('js',new Date());window.gtag('config',gaMeasurementId,{send_page_view:false});window.gtag('event','page_view',{page_location:location.origin+path,page_path:path})}}/>}{(!choice||settings)?<section className="cookie-banner" aria-label="Preferencias de analítica"><div><strong>Tú decides sobre tus datos.</strong><p>Usamos analítica opcional para entender visitas y mejorar el sitio. Sin tu permiso no cargamos Google Analytics ni Vercel Analytics. <a href="/privacy">Leer privacidad</a></p></div><div className="cookie-actions"><button onClick={()=>choose('no')}>Rechazar</button><button className="primary-cta" onClick={()=>choose('yes')}>Aceptar analítica</button></div></section>:<button className="cookie-settings" onClick={()=>setSettings(true)}>Preferencias de privacidad</button>}</>
}
