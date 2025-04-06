import React from "react";

const TextComponent = ({text,descricao}) => {
    return (
        <>
        <h1>{text}</h1>
        <p>{descricao}</p>
        </>
    )
}

export default TextComponent