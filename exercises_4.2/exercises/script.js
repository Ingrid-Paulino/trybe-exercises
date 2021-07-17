// Arrey das questoes do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex1:
console.log(numbers)

//ex2: 
let total = 0;
for(let i = 0; i < numbers.length; i += 1 ) {
    total += numbers[i];
}
console.log(total);

//ex3:
let total2 = 0;
for(let i = 0; i < numbers.length; i++) {
    total2 = total2 + numbers[i]
}
let res = total2/10;
console.log(res);

//ex4:
if(res > 20) {
    console.log("Valor maior que 20")
}else  {
    console.log("Valor menor ou igual a 20")
}
 
//ex5: -- n entendi a resolução - buscar ajuda
//font:https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-2-solutions
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);




//ex6:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//ex7: //nn entendi essa resolução buscar ajuda
//font:https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-2-solutions

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);


//ex8:
let numbers = [];
for(let i = 1; i <= 25; i++){
    numbers.push(i);
}
console.log(numbers);

//ex9:

for(let num of numbers) {
    console.log(num/2)
} 

//mesma resolução da atividade de cima mas com outro tipo de for.
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index] / 2);
//   };

// BONUS
//ex1 -- nn entendi voltar aqui
//font: https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-2-solutions
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//ex2 -- rever resolução

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//ex3 -- rever resoluçao
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);