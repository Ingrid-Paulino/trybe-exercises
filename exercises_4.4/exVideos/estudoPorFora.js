// let pessoa = {
//   nome: 'Ingrid',
//   sobrenome: 'Paulino',
//   idade: 18,
//   moradia: {
//     'cidade': 'Belo Horizonte',
//     'estado': 'Minas Gerais',
//   },
//   'comida-favorita': ['macarão', 'pizza', 'feijão', 'arroz']
// }
// // Acessando o meu objeto
// console.log(pessoa);
// console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`)

// // Acrescentar valores
// pessoa.moradia['moradia'] = 'Apartamento';
// pessoa.moradia.numero = 207;
// pessoa.escola = 'Madre Carmelita';
// console.log(pessoa);
// console.table(pessoa);

// // Acessar um objeto dentro do objeto
// console.log(`A comida favorida do(a) ${pessoa.nome} é ${pessoa['comida-favorita'][0]} e ele(a) morra em ${pessoa.moradia['cidade']} no numero: ${pessoa.moradia.numero}`);


//exemplo 2

// For/in
const pizzas = {
  pizza1: {
    sabor: 'margarita',
    preco:  39.90,
  },
  pizza2: {
    sabor: 'moda', 
    preco: 40.00,
  },
  pizza3: {
    sabor: 'frango com catupiri',
    preco: '39.90',
  },
  pizza4: {
    'sabor': '3queijos',
    'preco': 40.00,
  },
}

// For/in trabalha com objeto e retorna a chave -  For/of com o valor e so com vetores
for( let key in pizzas) { 
  console.log(key) // retorna todas as chaves
}

for (key in pizzas) {
  console.log(pizzas[key]); //retorna todo o objeto
}

for (key in pizzas) {
  console.log(pizzas); //retorna todo o objeto
}

for (key in pizzas) {
  console.log(pizzas[key].preco); //retorna o preço - forma 1
}

for (key in pizzas) {
  console.log(pizzas[key]['preco']); //retorna todo o preço - forma 2
}





let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key)
}; // mostra a posição de cada valor - retorna a chave

for (let key of pizzasDoces) {
  console.log(key) // retorna so os valores
};

for (let key in pizzasDoces) {
  console.log(pizzasDoces[key]) // mostra so os valores
};

for (let key in pizzasDoces) {
    console.log(pizzasDoces)
}; // mostra tres vezes cada valor

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key])
}; // me mostra a posição junto com o valor - chave/valor

// da na mesma esses dois
for(let key in pizzasDoces) {
  console.log(`Eu gosto de pizzas de ${key, pizzasDoces[key]}`);
}

for(let key in pizzasDoces) {
  console.log(`Eu gosto de pizzas de ${ pizzasDoces[key]}`);
}




let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let _key in car) {
  console.log(_key, car[_key]);
};

console.log('-----------------------')

for (let key in car) {
  console.log(key) //retorna a somente a chave
}

console.log('-----------------------')

for (let key in car) {
  console.log(car[key]); //retorna somente o valor
}
