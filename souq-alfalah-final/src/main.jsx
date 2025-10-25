import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageView from './pages/PageView'
import { I18nProvider } from './contexts/i18n'

function App(){
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/page/*" element={<PageView/>} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
