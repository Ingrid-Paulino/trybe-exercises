const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);








// outro exemplo de callback
const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2) => num1 + num2;

let resultadoSoma = funcSoma(10, 8);
resultadoFinal(resultadoSoma);



//forma 2 do mesmo problema
const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2) => {
  let soma = num1 + num2;
  resultadoFinal(soma);
}

funcSoma(10, 8);


//foema 3 usando callback
const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
}

funcSoma(10, 8, resultadoFinal);