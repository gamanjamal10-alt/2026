
import React from 'react'
import { useI18n } from '../contexts/i18n'

export default function Header(){ 
  const { lang, setLang, t } = useI18n()
  return (
    <header style={{background:'#2e7d32',color:'#fff',padding:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontSize:26}}>🌾</div>
        <div>
          <div style={{fontWeight:700}}>{t('title')}</div>
          <div style={{fontSize:13,opacity:0.9}}>{t('description')}</div>
        </div>
      </div>
      <div>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={{padding:'8px 12px',borderRadius:8,border:'none',cursor:'pointer'}}>
          {lang === 'ar' ? 'EN' : 'ع'}
        </button>
      </div>
    </header>
  )
}
