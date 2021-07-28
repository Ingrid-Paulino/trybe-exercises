// teste 1
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

// teste2
const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// teste 3 gus explicação

// essa condição sera verdadeira, entao não aparece nada
const assert = require('assert') //require inporta o modulo

const sum = (num1, num2) => num1 + num2;

const expected = sum(5,4); //aqui estou chamando a função e a guardando

//creiar como sera feito o teste
//assert.strictEqual(aqui dentro passo alguns parametros)     //equal: igual, verifica se o valor que eu passar é igual ao que estou recebendo

//assert.strictEqual(1°valor atual-no caso a variavel,2° valor que espero receber, 3° posso colocar uma frase ou mensagem de erro)
assert.strictEqual(expected, 9, '5 + 4 = 9')

//-----------------------------------------------

// essa condição sera falsa, entao aparece erro
const assert = require('assert') //require inporta o modulo

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4); //aqui estou chamando a função e a guardando

assert.strictEqual(expected, 9, '5 + 4 = 9')

//-----------------------------------------------------

//notSrictEqual - faz a verificação contraria, no caso nn pode ser determinado resultado

const assert = require('assert') //require inporta o modulo

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4); //aqui estou chamando a função e a guardando

assert.notStrictEqual(expected, 9, 'Não pode ser igual a 9')

// teste 4
const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


//teste 5

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');