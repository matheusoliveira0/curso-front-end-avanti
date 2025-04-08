import React, {createContext, useState, useContext} from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('pt')

     const switchLanguage = () => {
        setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
     }   
    
  return (
    <LanguageContext.Provider value={{language, switchLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
