// HOF - metodos de array

const { truncate } = require("fs");


// --forEat --
// ele faz alguma coisa para cada elemento do array -- forEach nn retorna nada, so faz o que voce manda, ele so faz alguma dentro do array, ele nn me retorna nada
const arrayDeNumeros = [1,2,3,4,5,6,7,8,9]
// const arrayDeQuadrados =  arrayDeNumeros.forEach //isso nn vai me retornar nada pois for eacht nn retorna nda
const arrayDeQuadrados = [];

arrayDeNumeros.forEach((number) => {
  arrayDeQuadrados.push(number * number);
})
console.log(arrayDeQuadrados)


// Observe que assim a minha resposta não é armazenada em lugar nenhum
const arrayDeNumeros = [1,2,3,4,5,6,7,8,9]

arrayDeNumeros.forEach((number) => {
  console.log(number * number);
})
console.log(arrayDeQuadrados);

//forma1
const arrayOfUsers = [
  {neme: 'Mateus', password: '123'},
  {neme: 'Welton', password: '123'},
  {neme: 'Cris', password: '123'},
  {neme: 'Lucas', password: '123'},
  {neme: 'Ingrid', password: '123'},
]

arrayOfUsers.forEach((user) => {
  console.log(user.name);
})

//entra a desustruturação
//forma 2
const arrayOfUsers = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

arrayOfUsers.forEach(({name}) => { // diz: eu so quero as chaves name 
  console.log(name, password);
})
// forma 3
const arrayOfUsers = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

arrayOfUsers.forEach(({name, password}) => { 
  console.log(name, password);
})


// -- find --
// ele encontra 1 elemento. O primeiro que satisfaça o meu problema

//forma 1
const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.find((user)=> {  // assim tenho acesso a tudo
  if (user.name === 'Ingrid') {
    return true;
  }
  return false;
}) 
if(!isUserExistent) { //sig. se nn tiver isUserEx...
  console.log(`Usuario cadastrado com sucesso`)
} else {
  console.log('Usuário já existente');
}
console.log(isUserExistent);


//forma 2 -- exemplo igual de cima, depois termine de completar
const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

// usando com a destruturação
const isUserExistent = users.find(({ name }) => {  // como eu quero so o nome, enntt cou so colocar o name 
  if (name === 'Ingrid') {
    return true;
  }
  return false;
}) 
if(!isUserExistent) { //sig. se nn tiver isUserEx...
  console.log(`Usuario cadastrado com sucesso`)
} else {
  console.log('Usuário já existente');
}
console.log(isUserExistent);

const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.find((user)=> {  // assim tenho acesso a tudo
  if (user.name === 'Ingrid' && user.password === '123') {
    return true;
  }
  return false;
}) 

if(isUserExistent) { //sig. se nn tiver isUserEx...
  console.log(isUserExistent)
} else {
  console.log('Usuário ou senha incorreta');
}



const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.find(({name, password})=> {  // assim tenho acesso a tudo
  if (name === 'Ingrid' && password === '123') {
    return true;
  }
  return false;
}) 

if(isUserExistent) { //sig. se nn tiver isUserEx...
  console.log(isUserExistent)
} else {
  console.log('Usuário ou senha incorreta');
}



// -- SOME -- retorna booleano
const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.some((user) => {
  if (user.name === 'Ingrid') {
    return true;
  }
  return false;
})
console.log(isUserExistent);

//DICA
// vc n precisa colocar o if else em algumas condiçoes
// ex
if (typeof 2 === 'number') {
  console.log(true);
} else {
  console.log(false);
}

// podemos fazer
console.log(typeof 2 === 'number') // essa espreção ja me retorna true ou false



const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.some((user) => user.name === 'Ingrid') // nn preciso colocar if - pois isso ja me retorna um boleano
console.log(isUserExistent);


const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isUserExistent = users.some((user) => user.name === 'Ingrid'  && user.password === '123') // nn preciso colocar if - pois isso ja me retorna um boleano
console.log(isUserExistent);

if (isUserExistent) {
  console.log('Login feito com sucesso');
} else {
  console.log('Erro');
}

// -- EVERY -- tipo o some mas ele verifica se todos contempla a condição
const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isEveryUserPasswordEqual = users.every((user) => {
  if (user.password === '123') {
    return true;
  }
  return false
})

console.log(isEveryUserPasswordEqual);


const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '1234'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isEveryUserPasswordEqual = users.every((user) => {
  console.log(user.name)
  if (user.password === '123') {
    return true;
  }
  return false
})

console.log(isEveryUserPasswordEqual);


const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isEveryUserPasswordEqual = users.every((user) => {
  console.log(user.name)
  if (user.password === '123') {
    return true;
  }
  return false
})

console.log(isEveryUserPasswordEqual);


// maneira menor
const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isEveryUserPasswordEqual = users.every((user) => user.password === '123') // se nn for verdade retornara false , senão true

console.log(isEveryUserPasswordEqual);


const users = [
  {name: 'Mateus', password: '123'},
  {name: 'Welton', password: '123'},
  {name: 'Cris', password: '123'},
  {name: 'Lucas', password: '123'},
  {name: 'Ingrid', password: '123'},
]

const isEveryUserPasswordEqual = users.every(({password}) => password === '123') // se nn for verdade retornara false , senão true
console.log(isEveryUserPasswordEqual);




const idade = 17;

if (idade >= 18) {
  console.log('Você é obrigado a votar');
} else if (idade >= 16) {
  console.log('Seu voto é opcional');
}









// destruturação para dois usuario
const user1 = {
  name : 'Ingrid'
}

const user2 = {
  name: 'Carla'
}

const {name} = user1

const {name: eu} = user1

console.log(eu);



// destruturação
const user = {
  name: 'ingrid',
  password:'123'
}

const {name} = user;  //esse obj novo é igual a chave name de user - são gemio




// FILTER
// pega mais de um elemento se satisfazer a condição
// filter retorna um array
const arr = [1,2,3,4, 5,6,7,8,9,0];
//em numerosPares ficara salvo o novo array do find
const numerosPares = arr.filter((numero) => {
  if (numero % 2 === 0) return true
})

console.log(numerosPares);


//Map - pega o array original, e cria um novo array com as mudanças do velho
// nn retorna true or false e sim os elementos

const arrayOriginal = [1,2,3,4, 5,6,7,8,9,0];

const numerosQuadrados = arrayOriginal.map((numero) => {
  const quadrado = numero * numero

  return quadrado;
})
console.log(numerosQuadrados);


const animals = [
  {nome: 'lion' , local: 'NE'},
  {nome: 'penguin', local: 'NW'},
  {nome: 'tiger', local:'SE'},
  {nome: 'giraffe', local: 'SW'},
  {nome: 'cow', local: 'N'},
];

const listaDeNomesAnimais = animals.map((animal) => {

  return animal.nome; //lista do nome de todos os animais
})
console.log(listaDeNomesAnimais);

//---------------------------------------------------------- 

const listaDeNomesAnimais = animals.map((animal) => {
  return animal.local;
})
console.log(listaDeNomesAnimais);

// -----------------------------------------------------

const listaDeNomesAnimais = animals.map((animal) => {

  return`Animal: ${animal.nome} Localização: ${animal.local}`;
})
console.log(listaDeNomesAnimais);



// ex2 com map
const enderecos = [
  {rua: 'Matheus', numero: 1},
  {rua: 'Ingrid', numero: 2},
  {rua: 'Monnylly', numero: 3},
  {rua: 'Cris', numero: 4},
  {rua: 'Marlon', numero: 5},
]
//transformou oq estava no array anterior passando para um novo
const arrayDeTextos = enderecos.map((endereco) => {
  const frase = `Olá, eu moro na rua ${endereco.rua}, no número ${endereco.numero}`;

  //vai retornar em um novo array
  return frase;
})
console.log(arrayDeTextos)


// retorna um arrrai de aarrays
const projetos = {
  toDoList: {
    description: 'Lista de tarefas',
    feedback: 'Top'
  },
  trybeWarts: {
    description: 'Formulario bruxo',
    feedback:'Bruxão'
  },
}

const entries = Object.entries(projetos)
console.log(entries)



// voltar nesse exemplo amanha com mateus
const projetos = {
  toDoList: {
    description: 'Lista de tarefas',
    feedback: 'Top'
  },
  trybeWarts: {
    description: 'Formulario bruxo',
    feedback:'Bruxão'
  },
}

const entries = Object.entries(projetos) // transformou em uma lista de array o objeto
// passar por cada um
const resultado = entries.map((projeto) => {
  const nome = projeto[0]; // nome é o arrai 1
  const info = projeto[1]; // info é o arrai 2
  const descricão = info.description;
  const comentario = info.feedback;

  const resposta = `Olá, eu fiz o projeto ${nome} e achei que ele foi ${comentario}`

  return resposta;
})
console.log(resultado);





//SORT -- ordena como se foce string se nn for passado nenhum parametro
const arr = ['c', 'a', 'b']

const sorted = arr.sort()

console.log(sorted); 

console.log();

console.log(sorted, arr);// ele altera o array original



// ordena como string, em ordem alfabetica
const arr = [1, 12, 11, 2, 15, 33]

const sorted = arr.sort()

console.log(sorted); 

console.log();





const arr = [1, 12, 11, 2, 15, 33]

//ele sempre compara dois elementos
const sorted = arr.sort((a, b) => {
  if ( a > b) return 1 // ordem crecente
  if ( a > b) return -1 // ordem decrescente
  if (a === b) return0 // igual
})
console.log(sorted);



const arr = [1, 12, 11, 2, 15, 33]
// me da um array ordenado
const sorted = arr.sort((a, b) => {
  return a - b
})
console.log(sorted);



const arr = [1, 12, 11, 2, 15, 33]
// me da um array ordenado
const sorted = arr.sort((a, b) => {
  return b - a
})
console.log(sorted);






const users = [
  {nome: 'Mateus', idade: 24},
  {nome: 'ingris', idade: 65},
  {nome: 'lucas', idade: 44},
  {nome: 'victor', idade: 10},
  {nome: 'ana', idade: 3},
]
// isso não funciona para estring
const sorted = users.sort((a, b) => {
  if (a.name > b.nome) return 1 // qualquer numero positivo
  if (a.name < b.nome) return -1 // pode ser qualquer numero negativo
  if (a.name === b.nome) return 0
})
console.log(sorted);



const users = [
  {nome: 'Mateus', idade: 24},
  {nome: 'ingris', idade: 65},
  {nome: 'lucas', idade: 44},
  {nome: 'victor', idade: 10},
  {nome: 'ana', idade: 3},
]

const sorted = users.sort((a, b) => {
return a.idade - b.idade
})
console.log(sorted);




//Reduce -- ele vai ter dois parametros o acumulador e o currant

//ex de qual numero é maior
const arr = [1,2,3,4, 11, 85,5,6,7, 56,8,9]

const biggest = arr.reduce((acc, curr) => {
  if (acc > curr) return acc
  if (curr > acc) return curr
}) // nn passei qual acumulador vai começar, enn começa com o 1
console.log((biggest));


// megando o menor numero
const arr = [2,3,4, 11, 85,1, 5,6,7, 56,8,9]

const biggest = arr.reduce((acc, curr) => {
  if (acc < curr) return acc
  if (curr < acc) return curr
}) // nn passei qual acumulador vai começar, enn começa com o 1
console.log((biggest));

// Usando as duas funçoes como callback na funcão HOF
const callback1 = (param) => {
  console.log(param);
}


// NÃO ENTEDI . E O []
// retornar um objeto novo
const arr = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco']

const resposta = arr.reduce((acc, curr, index) => {
  acc.curr = index;  // esta falando que a chave tem o nome curr

  return acc
}, {})

console.log(resposta);



// agr retornou um obj com todas as chaves
const arr = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco']

const resposta = arr.reduce((acc, curr, index) => {
  acc[curr] = index;  // esta falando que a chave tem o nome curr

  return acc
}, {})

console.log(resposta);



const arr = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco']

const resposta = arr.reduce((acc, curr, index) => {
  acc[curr[index]] = index;  // esta falando que a chave tem o nome curr

  return acc
}, {})

console.log(resposta);





const arr = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco']

const resposta = arr.reduce((acc, curr, index) => {
 const string = acc +' '+ curr
return string 
}, '')

console.log(resposta);




const callback2 = (param) => {
  window.alert(param);
}

//declaração da hof - criando uma HOF
const HOF = (number, func) => {
  func(number)
}
HOF(89, callback1)



//parametro spread
//ele espalha um array dentro do outro , ou um obj dentro do outro

const arr = [1,2,3,4,5,6]
const newArr = [...arr, 7, 8, 9]

console.log(newArr); // assim expalha o array, dentro do array novo


const arr = [1,2,3,4,5,6]
const newArr = [arr, 7, 8, 9] // assim nn espalha

console.log(newArr); 



const arr = [1,2,3,4,5,6];
const arr2 = [7,8,9];
const newArr = [...arr, ...arr2] // assim nn espalha

console.log(newArr); 