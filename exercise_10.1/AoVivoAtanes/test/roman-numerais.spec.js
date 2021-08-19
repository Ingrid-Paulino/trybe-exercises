const assert = require('assert');
const convertToRoman = require('../js/roman-numerals');


//Usando ASSERT
// assert.equal(convertToRoman(1), 'I') // o assert nn é muito acertivo pois voce não tem muitas informalçoes

// assert.equal(convertToRoman(2), 'II')

//Usando Jest
describe('Convert 1 to 5 to roman numbers', () => {   // poe uma descrição/titulo sobre esse grupo de tests - isso é legal de mais
  it('Convert number 1 to I', ()=>{
    expect(convertToRoman(1)).toBe('I');
  })
  
  test('Convert number 2 to II', ()=>{
    expect(convertToRoman(2)).toBe('II');
  })
  
  it('Convert number 3 to III', ()=>{
    expect(convertToRoman(3)).toBe('III');
  })
  
  it('Convert number 4 to IV', ()=>{
    expect(convertToRoman(4)).toBe('IV');
  })
  
  it('Convert number 5 to V', ()=>{
    expect(convertToRoman(5)).toBe('V');
  })
})
