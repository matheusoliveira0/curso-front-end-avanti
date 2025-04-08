import React from "react";

import { useCart } from "../context/Context";

const Product = ({ id, name }) => {
  const { addToCart } = useCart();
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => addToCart({ id, name })}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Product;
