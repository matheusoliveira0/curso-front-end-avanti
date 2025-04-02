const valores = [1,2,3,4,5]



const products = [
    {name:"cadeira", preco:400},
    {name:"mesa", preco:600},
    {name:"tv", preco:1400},
    
];

const totalDeValores = valores.reduce((acc,val) => acc + val, 0);
const totaldeValoresDeProdutos = products.reduce((acc,val) => acc + val.preco, 0)

console.log(totalDeValores)
console.log(totaldeValoresDeProdutos)