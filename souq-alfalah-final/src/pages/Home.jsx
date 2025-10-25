import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import { useI18n } from '../contexts/i18n'

export default function Home(){
  const { t, lang } = useI18n()
  const [q, setQ] = useState('')
  const [pages, setPages] = React.useState([])
  React.useEffect(()=>{
    fetch('/pages/list.json').then(r=>r.json()).then(setPages).catch(()=>setPages([]))
  },[])
  const filtered = useMemo(()=> pages.filter(p=> (p.title+' '+p.title_ar).toLowerCase().includes(q.toLowerCase()) ), [pages,q])
  return (
    <div style={{direction: lang==='ar'?'rtl':'ltr',minHeight:'100vh',background:'#f6fbf7'}}>
      <Header />
      <main style={{maxWidth:1100,margin:'24px auto',padding:'16px'}}>
        <div style={{display:'flex',gap:12,marginBottom:18}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder={t('searchPlaceholder')} style={{flex:1,padding:12,borderRadius:10,border:'1px solid #e6f0ea'}} />
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:16}}>
          {filtered.map(p=> (
            <a href={'/pages/'+p.path} key={p.path} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
              <div style={{background:'#fff',padding:16,borderRadius:12,boxShadow:'0 10px 30px rgba(2,7,2,0.03)',color:'#111'}}>
                <div style={{fontSize:24}}>🌾</div>
                <div style={{fontWeight:800,marginTop:10}}>{lang==='ar'?p.title_ar:p.title}</div>
                <div style={{color:'#666',marginTop:8,fontSize:13}}>{p.desc}</div>
                <div style={{marginTop:12}}><button style={{padding:'8px 10px',borderRadius:8,border:'none',background:'#2e7d32',color:'#fff',cursor:'pointer'}}>{t('open')}</button></div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
