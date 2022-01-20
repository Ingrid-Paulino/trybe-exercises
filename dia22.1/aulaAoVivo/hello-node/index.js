// CommonJS
const { readName, readWeigth, readHeight } = require('./questions');
const imc = require('./imc');
const fs = require('fs');

const main = async () => {
  const name = readName();
  const weigth = readWeigth();
  const height = readHeight();
  
  const imcValue = imc(weigth, height);
  
  const message = `Nome: ${name}, Peso: ${weigth}, Altura: ${height}, IMC: ${imcValue}`;
  
  await fs.promises.appendFile('imc.txt', message);
}

main();