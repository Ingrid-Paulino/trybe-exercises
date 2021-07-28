// ex 1
const fatorial = (number) => {
  let result = 1;

  for (let numero = 2; numero <= number ; numero += 1) {
    result *= numero;
  }
  return result;
}
console.log(fatorial(4));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// ex 2
const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// // ex 4 -- refatorar nn entendi nada desse codigo da trybe
// let arraySkill = ['Html', 'JavaScript', 'Css', 'react', 'python'];

// function buildSkillsPhrase (paramOne) {
//   const stringParan = (string) => (
//     `Trybe ${string} aqui!`
//   )
//   let result = `${stringParan(paramOne)}


//   `Minhas cinco principais habilidades são:`;

//   array.forEach((skill, index) => result = `${result}

//    ${skill}`);

//     result = `
//     ${result}

//     #goTrybe
//     `;

//     return result;
// }

// console.log(buildSkillsPhrase("Lucas"));