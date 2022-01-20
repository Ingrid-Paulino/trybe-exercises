const readlineSync = require('readline-sync');

const readName = () => {
  const name = readlineSync.question('Digite seu nome: ');

  return name;
};

const readWeigth = () => {
  const weight = readlineSync.questionFloat('Digite seu peso: ');

  return weight;
};

const readHeight = () => {
  const height = readlineSync.questionFloat('Digite seu altura: ');

  return height;
};

module.exports = {
  readName,
  readWeigth,
  readHeight,
};
