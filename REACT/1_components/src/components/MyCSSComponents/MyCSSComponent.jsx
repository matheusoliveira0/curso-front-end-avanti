import React from 'react'

import styles from "./MyCSSComponent.module.css"

const MyCSSComponent = () => {
    const cssInline = {
        color:"#f00",
        fontSize: "20px",
        backgroundColor: "#000"
    }

  return (
    <>
    <h1 className={styles.title}>Meu titulo</h1>
    <p style={cssInline}>Meu parágrafo</p>
    </>
  )
}

export default MyCSSComponent