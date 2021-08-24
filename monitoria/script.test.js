const {
  validNumbers,
  generateRandomNumber, //função que sera mocada
  result // função que sera testada
} = require('./script.js')


describe('Testa a função result', () => {
  test('quando da certo', () => {
  const generateRandomNumber = jest.fn().mockReturnValue(58) //estamos mocando

  const generateRandomNumber = jest.fn().mockReturnValue(58) //estamos mocando
  expoct(result(generateRandomNumber())).toBe('Você acertou um numero'); // estamos testando
})

  it('Quando da errado', () => {
  const generateRandomNumber = jest.fn().mockReturnValue(45) //estamos mocando
  expoct(result(generateRandomNumber())).toBe('Você não acertou'); // estamos testando

  })

});




