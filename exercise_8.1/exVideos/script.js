const repeat = (number, a
  ction) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);


// ----------------------------------------------

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// -------------------------------------------

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// -----------------------------------
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator(3));

// ------------------------------------------
// forma 1
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

console.log(sum(10, 5));
console.log(sub(10, 5));

//-------------------------------------------------
// forma 2 - melhor fara ser usado
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const multi = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);
console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));

// -----------------------------------------------------------------------------------

// Ao chamar a função doingThings:

function doingThings(wakeUp) {
  console.log(wakeUp)
};

doingThings('Acordando!!')
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!


