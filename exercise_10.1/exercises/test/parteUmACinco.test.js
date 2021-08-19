const {sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz} = require("../js/parteUmACinco");

describe('sum', ()=> {
  //ex1
  test('Testando se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9)
})
//ex2
test('Testando se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0)
})

//ex3
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => { 
    sum(4, '5') 
  }).toThrow();
})

//ex4
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(/parameters must be numbers/);
  });
});







describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', ()=> {
  //ex1
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
//ex2
it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4])
}) //deu erro - nn sei fazer

//ex3
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(myRemove(4, '5')).toEqual('number');   //deu erro - nn sei fazer
})

//ex4
it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
});






describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', ()=> {
  //ex1
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
//ex2
it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4])  //deu erro - nn sei fazer
})

//ex3
test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
  expect(sum(4, '5')).toBe(5)  //deu erro - nn sei fazer
})

//ex4
it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
});






describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', ()=> {
  //ex1
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz")
})
//ex2
it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(9)).toBe("fizz")
})

//ex3
it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
  expect(myFizzBuzz(10)).toBe("buzz")
})

//ex4
it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(2)).toBe(2)
})

//ex5
it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('3')).toBe('number')  //deu erro - nn sei fazer
})
});