const readline = require("readline-sync");

const peso = readline.questionInt("Qual seu peso? ");
const altura = readline.questionFloat("Qual sua altura? ");
const nome = readline.question("Qual seu nome? ");

function imc() {
  const calculo = peso / (altura * 2);
  console.log(`Olá ${nome}, sua massa corporal é ${calculo}`);

  if (calculo < 18.5) {
    console.log("Abaixo de 18,5");
  } else if ((calculo >= 18.5) & (calculo <= 24.9)) {
    console.log("Entre 18,5 e 24,9");
  } else if ((calculo <= 25.0) & (calculo <= 29.9)) {
    console.log("Entre 25,0 e 29,9");
  } else if ((calculo >= 30.0) & (calculo <= 34.9)) {
    console.log("Entre 30,0 e 34,9");
  } else if ((calculo >= 35.0) & (calculo <= 39.9)) {
    console.log("Entre 35,0 e 39,9");
  } else {
    console.log("40,0 e acima");
  }
}

module.exports = imc;