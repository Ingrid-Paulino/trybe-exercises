// ex: 1
// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, array) => acc.concat(array));
// }

// console.log(flatten())
// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// ex: 2, 3 e 4

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// ex: 2

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acc, author) => acc += author.author.name, '')
}
console.log(reduceNames())

assert.strictEqual(reduceNames(), expectedResult);

// //ex: 3
// // const expectedResult = 43;

// // function averageAge() {
// //   // escreva seu código aqui
// //   const nOfBooks = books.length;
// //   const sumOfAge = books.reduce((acc, book) => {
// //     acc + (book.releaseYear - book.author.birthYear)
// //   } , 0)

// //   return sumOfAge / nOfBooks;
// // }


// // assert.strictEqual(averageAge(), expectedResult);

// // ex:4


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   // escreva seu código aqui
//   return books.reduce((acc, maiorName) => {
//     if (maiorName.name.length > acc.name.length) {
//       return maiorName
//     }
//     return acc
//   });
// }

// assert.deepStrictEqual(longestNamedBook(), expectedResult);



//ex: 5
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  names.reduce((acc, nome) => {
    let somatudo = 0;
    for (let letraA = 0; letraA < nome.length; letraA += 1) {
      let soma = 0;
      if (acc === 'a' || acc === 'A') {
        soma += 1;
        return soma;
      }
      return somatudo += soma;
    }
  })
}
console.log(containsA(names))
assert.deepStrictEqual(containsA(), 20);