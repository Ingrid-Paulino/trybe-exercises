//ex:1
let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

//----------------------------

//ex:2
let n1 = 10;
let n2 =20;
var maiorNumero = '';

if(n1 > n2){
    maiorNumero += 'n1'
}else {
    maiorNumero += 'n2'
}

console.log(maiorNumero);

//-----------------------------------

//ex:3 -- Deu errado

let n1 = 20;
let n2 = 10;
let n3 = 400;

if(n1 > n2 || n1 > n3) {
    console.log('n1');
}else if(n2 > n1 || n2 > n3) {
    console.log('n2');
}else {
    console.log('n3');
}

//----------------------------

//ex:4 

let valor= -9;

if(valor >= 0) {
    console.log('Positivo');
}else {
    console.log('Negativo');
}

//---------------------------------

//ex:5 deu erro

let l1 = 80;
let l2 = 'o';
let l3 = 50;
let soma = l1 + l2 + l3;
let res= '';

if(soma === 180) {
    res = 'true'
}else if(soma > 180 || soma < 180) {
    res = 'false'
}else{
    res = 'erro'
}

console.log(res)

//-----------------------------------

//ex:6



//------------------------------------
//1:
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//2:
let num1 = 3
let num2 = 8

if(num1 > num2) {
    console.log("num1: "+ num1);
}else {
    console.log("num2: "+ num2);
}

//3:
let num1 = 6;
let num2 = 50;
let num3 = 20;

if(num1 > num2 || num1 > num3) {
    console.log("num1: "+ num1);
}else if(num2 > num3) {
    console.log("num2: "+ num2);
}else {
    console.log("num3: "+ num3);
}

//4: fiquei na duvida
var valor = "5";

if(valor === "1") {
    console.log("Positivo!")
} else if(valor =! "1") {
    console.log("Negativo")
}else {
    console.log("Zero")
}



switch(valor) {
  case "1":
    console.log("Positivo")
    break;

  case "2":
    console.log("Negativo")
    break;

  case "3":
    console.log("Zero")
    break;

  default:
    console.log("Sem resposta!")
}

//5:
let trianguloLado1 = 60;
let trianguloLado2 = 80;
let trianguloLado3 = 40;

if(trianguloLado1 + trianguloLado2 + trianguloLado3 == 180) {
  console.log("True")
}else {
  console.log("False")
}

//6: Deu erro no cavalo
let xadrez= "Cavalo"

switch (xadrez.toLowerCase()){
  case "torre":
    console.log("Movimenta em linha reta ou para os lados, por todas as casas")
    break;

  case "rei":
    console.log("Se movimenta para qualquer lado e direção,todavia somente de casa em casa")
    break;

  case "rainha":
    console.log("Se movimenta para qualquer lado e direção")
    break

  case "Bispo":
    console.log("Movimenta so na adiagonal por todo o tabuleiro")
    break;

  case "Cavalo":
    console.log("Se movimenta em L")
    break;

  default:
    console.log("não ha essa peça")
    break
}

//7 deu erro
let Porcentagem = -1 ; 

if(Porcentagem >= 90) {
  console.log("nota: A")
}else if(Porcentagem >= 80) {
  console.log("nota: B")
}else if(Porcentagem >=70) {
  console .log("nota: C")
}else if(Porcentagem >= 60) {
  console.log("nota: D")
}else if(Porcentagem >= 50) {
  console.log("nota: E")
}else if(Porcentagem < 50) {
  console.log("nota: F")
}else{
  console.log("Nota negativa")
}

//8: deu erro
let numero1 = 8;
let numero2 = 2;
let numero3 = 6;

if(numero1 % 0 || numero2 % 0 || numero3 % 0) {
  console.log("True");
}else{
  console.log("False");
}

//9: não soube fazer
let numero4 = 8;
let numero5 = 2;
let numero6 = 3;

if(numero4 % (=! 0 )|| numero5 % 0 || numero6 % 0) {
  console.log("True");
}else{
  console.log("False");
}

//10: 
let n1 = 8;
let n2 = 10;

let lucro = (10 - 8) * 1000 ;




console.log(lucro)
