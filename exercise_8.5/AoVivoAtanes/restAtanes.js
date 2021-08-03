// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters

// A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido 
// de argumentos como um array.

// Crie uma função que some todos os parâmetros passados a ela.

const assert = require('assert');

const sumAll = (values) => {

  let sum = 0;
  for (let index = 0; index < values.length; index += 1) {
    sum += values[index];
  }
  return sum;

// outra forma usando o reduce
//   return values.reduce((accumulator, currentValue) => accumulator + currentValue);
}

assert.strictEqual(sumAll([1, 2]), 3);
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);



// e se eu passar um parametro ao inves de vetor
const assert = require('assert');

const sumAll = (values) => {

  // let sum = 0;
  // for (let index = 0; index < values.length; index += 1) {
  //   sum += values[index];
  // }
  // return sum;

// outra forma usando o reduce
  return values.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//assim ainda não esta bom
function soma2(n1, n2) {
  return n1 + n2;
}

function soma3(n1, n2, n3) {
  return n1 + n2 + n3;
}
assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);

//Melhor forma
// e se eu passar um parametro ao inves de vetor
const assert = require('assert');

const sumAll = (...values) => {

  // let sum = 0;
  // for (let index = 0; index < values.length; index += 1) {
  //   sum += values[index];
  // }
  // return sum;

// outra forma usando o reduce
  return values.reduce((accumulator, currentValue) => accumulator + currentValue);
}
// esse casso recebo transformo em vetor, monto um array
console.log(sumAll(12, 7, 8, 9, 1, 0, 93, 12));
assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);

// -----------------------------------


// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) 
// e retorne os dados de ano, mês e dia formatados.

// forma 1
const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/${month}/${year} - ${hour}:${minute}:${second}`
}

const dataInfo = ['1981', '7', '31', '22', '47', '12'];

let expectedValue = '31/7/1981 - 22:47:12';

assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12'), expectedValue);


// forma 2
const assert = require('assert');

const formatDate = (year, month, day, ...time) => {
    return `${day}/${month}/${year} - ${time.join(':')}`
}

const dataInfo = ['1981', '7', '31', '22', '47', '12'];

let expectedValue = '31/7/1981 - 22:47:12';

assert.strictEqual(formatDate(...dataInfo), expectedValue);

// forma 3
// const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/${month}/${year} - ${hour}:${minute}:${second}`
}

console.log(formatDate('1981', '7', '31', '22', '47', '12'))

// const dataInfo = ['1981', '7', '31', '22', '47', '12'];

// let expectedValue = '31/7/1981 - 22:47:12';

// assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12'), expectedValue);

