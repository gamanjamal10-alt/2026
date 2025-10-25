import React from 'react'
import Header from '../components/Header'
import { useI18n } from '../contexts/i18n'
import { useLocation } from 'react-router-dom'

export default function PageView(){
  const loc = useLocation()
  const params = loc.pathname.replace('/page/','')
  const decoded = decodeURIComponent(params)
  const src = '/pages/'+decoded
  const { lang } = useI18n()
  return (
    <div style={{direction: lang==='ar'?'rtl':'ltr'}}>
      <Header />
      <div style={{maxWidth:1200,margin:'16px auto',padding:16}}>
        <iframe src={src} title={decoded} style={{width:'100%',height:'80vh',border:'1px solid #e6e6e6',borderRadius:8}} />
      </div>
    </div>
  )
}
