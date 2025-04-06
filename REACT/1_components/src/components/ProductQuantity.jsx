import { useState } from 'react'

const ProductQuantity = () => {
    const [product, setProduct] = useState({
        name: "Cadeira",
        quantity:1
    })

    const updateQuantity = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity+1
        }))
    }

  return (
    <>
        <p>Nome do produto: {product.name}</p>
        <p>Quantidade: {product.quantity}</p>

        <button onClick={updateQuantity}>Aumentar a quantidade do produto</button>
    </>

  )
}

export default ProductQuantity