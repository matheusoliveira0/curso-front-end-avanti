// let frutas = ["maça","banana","mamão","abacate","pessego"];

// for(let fruta of frutas) {
//     console.log(fruta)
// }

let pessoa = {
    nome: "MATHEUS ",
    idade: 24,
    genero: "Masculino"
}

for(let key in pessoa){
    console.log(`${key}:${pessoa[key]}`)
}