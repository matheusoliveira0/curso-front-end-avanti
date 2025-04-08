import {useState, useEffect} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString()) 
  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  },[]) 
  return (
    <h2>Hora Atual: {time}</h2>
  )
}

export default Clock