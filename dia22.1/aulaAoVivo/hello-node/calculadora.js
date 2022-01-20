const soma = (num1, num2) => {
  return num1 + num2;
};

const subtrae = (num1, num2) => {
  return num1 - num2;
};

console.log('hello!');

module.exports = {
  soma: soma,
  subtrae  // mesma coisa que o soma, mas esta destruturado
};