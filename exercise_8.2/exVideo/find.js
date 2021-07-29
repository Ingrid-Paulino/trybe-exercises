const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const num = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  console.log(num)
}

console.log(findDivisibleBy3And5())



const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  names.find((cincoLetras) => {
    let letras = 0;
    
  })
}

console.log(findNameWithFiveLetters());
