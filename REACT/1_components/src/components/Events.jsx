import React from 'react'

const Events = () => {

    const handleGreetings = (name) => {
        alert(`Olá ${name}`)
    }
  return (
    <>
    <button onClick={()=>alert("Clicado")}>Alert</button>
    <button onClick={()=>handleGreetings("Math")}>Alert chamado da Função</button>
    </>
  )
}

export default Events