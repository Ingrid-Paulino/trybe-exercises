const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const printName = () => "Lucas";
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));





function boasVindas(nome) {
  return 'Seja bem vindo(a), ' + nome;
}
console.log('Atanes')

const boasVindas = (nome) => 'Seja bem vindo(a), ' + nome;
console.log(boasVindas('Atanes'))

const boasVindas = nome => 'Seja bem vindo(a), ' + nome;
console.log(boasVindas('Atanes'))



const habilitado = (nome, idade) => {
  let retorno;
  if(idade >= 18){
    retorno = nome + 'você está habilitado(a) a dirigir!'
  } else {
    retorno = nome + 'você ainda não pode dirigir!'
  }
  return retorno
}
console.log(habilitado('Adriano', 21));




function boasVindas() {
  return 'Seja bem vindo ao nosso site!'
};
console.log(boasVindas())

const boasVindas = () => 'Seja muito bem vindo ao nosso site!';
console.log(boasVindas())