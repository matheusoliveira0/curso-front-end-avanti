import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import Events from './components/Events'
import { SecondTest, ThirdText } from './components/OtherComponenets'
import MyCSSComponent from './components/MyCSSComponents/MyCSSComponent'
import Counter from './components/Counter'
import ProductQuantity from './components/ProductQuantity'
import GithubUser from './components/GithubUser'

function App() {

  return (
    <>
       {/* contador */}
        <h1>Contator</h1>
        <Counter></Counter>
        <hr />

        {/* controle de quantidade */}
        <h2>Quantidade de produtos</h2>
        <ProductQuantity></ProductQuantity>
        <hr />
        {/* Github user */}

        <h2>Usuario do GitHub</h2>
        <GithubUser/>

        <h2>Meu componente css</h2>
        <MyCSSComponent></MyCSSComponent>
        <h2>Eventos</h2>
        <Events></Events>
        <TextComponent text="Meu primeiro texto" descricao="Descrição do primeiro texto"/>
        <TextComponent text="Meu segundo texto" descricao="Descriçao o segundo texto"/>
        <TextComponent text="Meu terceiro texto" descricao="Descrição do terceiro texto"/>
        <SecondTest/>
        <ThirdText/>
       
    </>
  )
}

export default App
