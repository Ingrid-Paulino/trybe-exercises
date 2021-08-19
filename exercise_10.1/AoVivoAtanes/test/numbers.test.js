/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

// DOCUMENTAÇÂO JEST - https://jestjs.io/pt-BR/docs/getting-started
const assert = require("assert");
const numbers = require("../js/numbers"); // jogo a função do arquivo nymbers.js, nesse arquivo para não precisar repetir o bloco de codigo. Os .. (dois pontos) sig. que ele esta saindo da pasta pra buscar na outra

// Usando ASSERT - não precisa de instalação
// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
assert.ok(numbers([1, 2, 3, 4, 5]));
// ou
assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);

// Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
assert.strictEqual(numbers([1, 2, "3", 4, 5]), false);

// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false

// Escreva um teste em que a função recebe [' '] e retorna false

//-------------------------------------------------------------------------------

//Usando JEST
describe("Validar vetro de numeros", () => {  // colocando uma descrição desse bloco de test
  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  test("Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true", () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false

  it("Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false", () => {
    expect(numbers([1, 2, 3, "4", 5])).toBe(false);
  });

  it("Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false", () => {
    expect(numbers([1, 2, 3, "4", 5])).toBeFalsy(); // assim ja testa que esta false
  });
});

// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false

// Escreva um teste em que a função recebe [' '] e retorna false
