// com array
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Bis', 'R1'];

const veiculos = ['F40', ...motos, 'Uno', ...carros]; //podemos misturar as coisas
const veiculos2 = [...motos, ...carros];
const veiculos3 = [ ...carros, ...motos];

console.log(veiculos);
console.log(veiculos2);
console.log(veiculos3);

//com objeto
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: '28',
  cidade: 'bh',
}

const pessoaTrybe = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida', //podemos misturar as coisas
}

console.log(pessoaTrybe)



const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]



const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */


const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76



const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5




const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */


// ------------------------------------------------------------------------------
//Para fixar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pera', 'uva', 'melão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salad =  [...fruit, ...additional];
  return salad
};

console.log(fruitSalad(specialFruit, additionalItens));