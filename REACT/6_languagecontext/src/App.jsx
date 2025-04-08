
import './App.css'
import Header from './components/Header'
import { LanguageProvider } from './components/LanguageContext'

function App() {

  return (
    <>
     <LanguageProvider>
      <Header/>
     </LanguageProvider>
     
    </>
  )
}

export default App
