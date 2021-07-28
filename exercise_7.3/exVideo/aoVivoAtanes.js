// Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.
// Por exemplo:
// summationOf(1) saída esperada 1: de 1 até 1 = 1
// summationOf(3) saída esperada 6: de 1 até 3 = 1 + 2 + 3 = 6
// summationOf(5) saída esperada 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

// -------------------------------------VALIDAÇÕES--------------------------------------------------------

const assert = require('assert');

const summationOf = () => {};

// typeOf(summation(1)) === 'function'

assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes')  // vai comparar se os valores são iguais. esta vendo se summation é do tipo function 1° crie o teste  primeiro. Me devolve que é uma function

// ----------------------------------------------------------------------------------------

const assert = require('assert');

const summationOf = () => 1; 


assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes')
assert.strictEqual(summationOf(1),1); //função me retorna 1

//------------------------------------------------------------------------------------------

const assert = require('assert');

const summationOf = (number) => {
  if(number === 1){ // essa validação ficou bem porca
    return 1
  } else {
    return 6
  }
}; 


assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes')
assert.strictEqual(summationOf(1),1); //função me retorna 1
assert.strictEqual(summationOf(3), 6);

//---------------------------------------------------------------------

const assert = require('assert');

const summationOf = (number) => { //codigo muito mais elaborado/estruturado
  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation = summation + index;
  }
  return summation;
}; 


assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes')
assert.strictEqual(summationOf(1),1); //função me retorna 1
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(13), 91);

//-------------------------------TRATAMENTO----------------------------------------------

const assert = require('assert');

const summationOf = (number) => { //codigo muito mais elaborado/estruturado
  if (typeof(number) !== 'number') {
    throw Error('Essa função só aceita um numero como parametro!') 
  }
  
  if (number === 0) {
    throw Error('O numero ZERO não pode ser passado como paramentro para essa função! ')
  }

  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation = summation + index;
  }
  return summation;
}; 

assert.strictEqual(typeof(summationOf), 'function', 'Valores são diferentes')
assert.strictEqual(summationOf(0),1); //função me retorna 1
assert.strictEqual(summationOf('a'), 6); //me retorna um erro falando que passei 0 
assert.strictEqual(summationOf('5'), 15);
assert.strictEqual(summationOf(13), 91);

