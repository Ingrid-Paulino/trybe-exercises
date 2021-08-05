// forma 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// forma 2
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


// --------------------------------------
// exercicios de fixação

// ex 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [sauda]
saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
// -- não entendi
// const saudar = ['Olá'];
// const [saudacao] = saudar;


// console.log(saudacao);

// const realizaSaudacao = saudacoes[1];
// const saudacao = saudacoes[0];
// realizaSaudacao(saudacao);


// ex 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// --- n entendi
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(bebida);
const valores = ['arroz', 'gato', 'água'];
  [comida, animal, bebida] = valores;
console.log(bebida);


//ex 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// ----- não entendi
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const numbersPares = numerosPares.filter((numeroPar) => {
  let condicao = numeroPar % 2 === 0 ? numeroPar : 
})



let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);