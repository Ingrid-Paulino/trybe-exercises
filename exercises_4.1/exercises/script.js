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

//ex:3

let n1 = 20;
let n2 = 1000;
let n3 = 400;

if(n1 > n2 && n1 > n3) {
    console.log('O maior número é: ', n1, 'n1');
} else if (n2 > n1 && n2 > n3) {
  console.log('O maior número é: ', n2, 'n2');
} else {
    console.log('O maior número é: ', n3, 'n3');
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

//ex:5

let l1 = 65;
let l2 = 'o';
let l3 = 15;
let soma = l1 + l2 + l3;
let todosAngulosPositivos = l1 > 0 && l2 > 0 && l3 > 0;

if (todosAngulosPositivos) {
  if(soma === 180) {
      console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');

}

//-----------------------------------

//ex:6
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//ex: 7
let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//ex:8 

let a = 1;
let b = 4;
let c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//9

let a = 1;
let b = 3;
let c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

// ex:10 

let custoProduto = 1;
let valorVenda = 3;

if (custoProduto >= 0 && valorVenda >= 0) {
  let totalcustoProduto = custoProduto * 1.2;
  let totalProfit = (valorVenda - totalcustoProduto) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

//11

let impostoINSS;
let impostoIR;

let salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  impostoINSS = salarioBruto * 0.08; //se fizermos 100 / 8 da 0,08 - isso mostra quanto é 8% do nosso salario bruto 
} else if (salarioBruto <= 2594.92) {
  impostoINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  impostoINSS = salarioBruto * 0.11;
} else {
  impostoINSS = 570.88; //quanto vai remover do meu salario
}

let salarioBase = salarioBruto - impostoINSS;

//calculo do imposto de renda
if (salarioBase <= 1903.98) {
  impostoIR = 0;
} else if (salarioBase <= 2826.65) {
  impostoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  impostoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  impostoIR = (salarioBase * 0.225) - 636.13;
} else {
  impostoIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário Líquido: " + (salarioBase - impostoIR));
