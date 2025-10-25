import React from 'react'
import { useI18n } from '../contexts/i18n'

export default function Header(){ 
  const { lang, setLang, t } = useI18n()
  return (
    <header style={{background:'linear-gradient(90deg,#2e7d32,#1b5e20)',color:'#fff',padding:18,display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/src/assets/logo.svg" alt="logo" style={{width:44,height:44}} />
        <div>
          <div style={{fontWeight:800,fontSize:18}}>{t('title')}</div>
          <div style={{fontSize:13,opacity:0.95}}>{t('description')}</div>
        </div>
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={{padding:'8px 12px',borderRadius:8,border:'none',cursor:'pointer',fontWeight:700}}>
          {lang === 'ar' ? 'EN' : 'ع'}
        </button>
      </div>
    </header>
  )
}
