const readline = require("readline-sync");

const tempo = readline.questionInt("distancia: ")
const distância = readline.questionInt("tempo: ")

function velocidadeMedia() {
  const tempoEmSeg = tempo * 60;
  console.log(distância / tempo);
  return distância / tempoEmSeg
}

velocidadeMedia();