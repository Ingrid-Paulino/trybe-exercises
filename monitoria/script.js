
const generateRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

// console.log(generateRandomNumber());

const result = () => {
  const validNumbers = [17, 85, 58, 46, 59,14]
  
  const randomNumber = generateRandomNumber();

  if (validNumbers.includes(randomNumber)) {
    return 'Você acertou um numero'
  }

  return 'Você acertou um número'
}

console.log(result(validNumbers));

module.exports = {
  validNumbers,
  generateRandomNumber,
  result
}