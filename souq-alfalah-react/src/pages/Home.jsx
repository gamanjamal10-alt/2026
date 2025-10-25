
import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import { useI18n } from '../contexts/i18n'
import { Link } from 'react-router-dom'

export default function Home(){
  const { t, lang } = useI18n()
  const [q, setQ] = useState('')
  // Build pages list by fetching /pages/list.json generated on server side (we will create it)
  const [pages, setPages] = React.useState([])
  React.useEffect(()=>{
    fetch('/pages/list.json').then(r=>r.json()).then(setPages).catch(()=>setPages([]))
  },[])
  const filtered = useMemo(()=> pages.filter(p=> p.title.toLowerCase().includes(q.toLowerCase()) ), [pages,q])
  return (
    <div style={{direction: lang==='ar'?'rtl':'ltr'}}>
      <Header />
      <main style={{maxWidth:1100,margin:'24px auto',padding:'0 16px'}}>
        <div style={{display:'flex',gap:12,marginBottom:18}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder={t('searchPlaceholder')} style={{flex:1,padding:12,borderRadius:10,border:'1px solid #ddd'}} />
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:16}}>
          {filtered.map(p=> (
            <Link to={'/page/'+encodeURIComponent(p.path)} key={p.path} style={{textDecoration:'none'}} target="_blank">
              <div style={{background:'#fff',padding:14,borderRadius:12,boxShadow:'0 8px 20px rgba(0,0,0,0.06)',color:'#111'}}>
                <div style={{fontSize:22}}>🌾</div>
                <div style={{fontWeight:700,marginTop:8}}>{lang==='ar'?p.title_ar:p.title}</div>
                <div style={{color:'#666',marginTop:6,fontSize:13}}>{p.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
