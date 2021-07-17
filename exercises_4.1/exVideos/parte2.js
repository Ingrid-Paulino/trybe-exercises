//Parte I e II
const nome = "Ingrid";
const birthCity = "Belo Horizonte";
let birthYear = 2030;

console.log(nome, birthCity, birthYear);
console.log(birthYear);

//Parte III
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientage);

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = 2 * 5 + 2 * 8;
console.log(area);
console.log(perimetro);

//Parte IV
let nota = 62;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota > 60 && nota < 80) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

//Parte V
let estadoDoCandidato = "reprovada(o)";

switch (estadoDoCandidato) {
  case "aprovada":
    console.log("Aprovada!");
    break;

  case "lista":
    console.log("Esta na lista");
    break;

  case "reprovada(o)":
    console.log("Reprovada(o)");
    break;

  default:
    console.log("Não se aplica");
}
