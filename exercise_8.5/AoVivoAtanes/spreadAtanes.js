// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma 
// expressão de array ou uma string seja expandido para ser usado onde zero ou mais 
// argumentos (para chamadas de funções) ou elementos (para arrays literais) são 
// esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor 
// (para objetos literais) são esperados.

//spread desmonta um array

// ex 1
const nomes = ['Marcelino', 'Adriana Carla', 'José Augusto', 'Roberta Miranda', 'Caio César', 'Maria Rita'];

//forma 1 de imprimir
console.log(nomes[0], nomes[1], nomes[2], nomes[3], nomes[4]);

// forma 2 de imprimir
console.log(...nomes); // caminha no array, pegando elemento por elemento


// ------------------------------------------------------------
// ex 2
// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// LOOP
// let awesomeBooks = [];
// podemos fazer com o forEach tambem
// horrorBooks.forEach((book) => awesomeBooks.push(book));
// console.log(awesomeBooks);
// scifiBooks.forEach((book) => awesomeBooks.push(book));
// console.log(awesomeBooks);

// SPREAD OPERATOR - fica bem melhor
let awesomeBooks = [...horrorBooks, ...scifiBooks];

assert.deepStrictEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);


// ------------------------------------------------
// ex 3

// Transforme o conteúdo de um array em argumentos da função! Com e sem spread operators.

const assert = require("assert");

const point = [1.0, 2.2, -6.6];

const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

  // forma 1
// assert.strictEqual(
//   printPointCoordinates(point[0], point[1],point[2]),
//   "Point coordinates are x = 1, y = 2.2 and z = -6.6"
// );

// forma 2
assert.strictEqual(
  printPointCoordinates(...point),
  "Point coordinates are x = 1, y = 2.2 and z = -6.6"
);

// assert.strictEqual(
//   printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2]),
//   "Point coordinates are x = 0.1, y = 3.5 and z = -99.6"
// );

assert.strictEqual(
  printPointCoordinates(...otherPoint),
  "Point coordinates are x = 0.1, y = 3.5 and z = -99.6"
);