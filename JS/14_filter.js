const valores = [12,13,55,9,10,2,14,6,4,7,,8,3,1]



const user = [
    {name:"Math", age:4},
    {name:"Hoddri", age:23},
    {name:"Oli", age:18},
    {name:"Teu", age:2},
];

const numMaioresQDez = valores.filter(num => num >= 10)
const numMenoresQDez = valores.filter(num => num <= 10)
const numPares = valores.filter(num => num % 2 === 0)
const menoresDeIdade = user.filter(user => user.age < 18)

// console.log(numMaioresQDez)
// console.log(numMenoresQDez)
// console.log(numPares)
console.log(menoresDeIdade)