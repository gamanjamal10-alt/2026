import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    title: 'Souq AlFalah',
    description: 'Organized farmer marketplace — open any page',
    searchPlaceholder: 'Search pages...',
    open: 'Open page'
  },
  ar: {
    title: 'سوق الفلاح',
    description: 'مشروع منظم — افتح أي صفحة',
    searchPlaceholder: 'ابحث عن الصفحات...',
    open: 'فتح الصفحة'
  }
}

const I18nContext = createContext()

export function I18nProvider({children}){
  const [lang, setLang] = useState('ar')
  const t = (key) => translations[lang][key] || key
  return <I18nContext.Provider value={{lang, setLang, t}}>{children}</I18nContext.Provider>
}

export function useI18n(){ return useContext(I18nContext) }
