import {BlogShell} from '@/components/blog-shell'
export const metadata={title:'Administración | Atlas',robots:{index:false,follow:false}}
export default function Layout({children}:{children:React.ReactNode}){return <BlogShell>{children}</BlogShell>}
