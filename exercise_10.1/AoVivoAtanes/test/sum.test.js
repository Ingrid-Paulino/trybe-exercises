const sum = require('../js/sum');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('add 4 + 2 to equal 6', () => {
  expect(sum(4, 2)).toBe(6);
}); // posso usar (it ou test)

test('add 2 + 7 to equal 9', () => {
  expect(sum(2, 7).toEqual(9));
}) // O que quero validar, posso colocar qualquer coisa, um obj, função, callback...

  //toBe - saida que eu espero


it('Compara letra A', () => {
  expect('A').toBe('A'); // toBe - // estruturas naturais, numeros, tru or false, number
})

it('Compara letra A', () => {
  expect([1,2,3]).toEqual([1,2,3]);
}) // toEqual - estrutura complexas obj, array... valida com o ===

//equal