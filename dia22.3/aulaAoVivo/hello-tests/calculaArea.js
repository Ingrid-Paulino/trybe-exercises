const readline = require('readline-sync');

module.exports = { 
  calculaArea: () => {
    const side = readline.questionInt('Digite o valor do lado do quadrado:');

    if (side < 0) throw Error('Valor inválido');

    return Math.pow(side, 2);
  }
}