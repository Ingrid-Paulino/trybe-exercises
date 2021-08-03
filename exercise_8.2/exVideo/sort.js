const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

//-----------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); 

//--------------------------------

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points);


// ------------------------------

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
//crescente
// const crescente = people.sort((num1, num2) => num1.age - num2.age);

console.log()

//decrecente
const decrescente = people.sort((num1, num2) => num2.age - num1.age)

// console.log(crescente);
console.log(decrescente);

