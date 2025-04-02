const num = [1,2,3,4,5];

const num2 = [6,7,8,9]

// copiar um array

const copia = [...num];


//concaternar arrays

const arrayConcatenados = [...num,...num2]

// console.log(arrayConcatenados);

//adicionado elementos no array 

const nnovoArray = [10,...arrayConcatenados,30]
// console.log(nnovoArray);



//objetos

const usuario =  {nome:"Ana", idade:30}

const copiaUsuario = {...usuario};

// console.log(copiaUsuario);

//Modificando Obj

const usuarioAtualizado = {...usuario,idade:25,cidade:"São Paulo"};

// console.log(usuarioAtualizado);

const novoUsuario = {nome:"Math", idde:24};

const usuarios = {...usuario,novoUsuario};

console.log(usuarios)

