import React from "react";
import { useCart } from "../context/Context";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>seu carrinho está vazio</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
