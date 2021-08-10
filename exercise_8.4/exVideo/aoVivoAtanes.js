// Links uteis:
// HoF REDUCE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array,
// resultando num único valor de retorno.

let numeros = [3, 5, 7, 11, 89, 0, 13, 2, 10];

// Apresentar a soma de todos os números do Array numeros
// com o forEach
let soma = 0;
numeros.forEach((numero) => soma += numero);
console.log(soma)

// com o reduce
let somaValores = numeros.reduce((acc, numero) => acc + numero, 0); // segundo parametro é opicional, se eu nn ponho é o v1 valor que é 3 // acc = acumulador // 0 é a primeira posição posso colocar outros numeros
console.log(somaValores)



let cervejas = [
  {
    codigo: 123,
    fabricante: "Urquell",
    descricao: "Pilsner Urquell 500ML",
    valor: 20,
    estoque: 200,
  },
  {
    codigo: 176,
    fabricante: "Schornstein",
    descricao: "Schornstein Imperial 500ML",
    valor: 35.99,
    estoque: 150,
  },
  {
    codigo: 122,
    fabricante: "Schornstein",
    descricao: "Schornstein IPA 500ML",
    valor: 18.99,
    estoque: 300,
  },
  {
    codigo: 323,
    fabricante: "Maniacs",
    descricao: "Maniacs Craft Lager 355ML",
    valor: 19.99,
    estoque: 500,
  },
  {
    codigo: 183,
    fabricante: "Leuven",
    descricao: "Leuven Red ALE Knight 600ML",
    valor: 25.99,
    estoque: 100,
  },
  {
    codigo: 129,
    fabricante: "Leuven",
    descricao: "Leuven Witbier The Witch 500ML",
    valor: 19.99,
    estoque: 200,
  },
  {
    codigo: 451,
    fabricante: "Lupulus",
    descricao: "Lupulus Blanche 330ML",
    valor: 29.99,
    estoque: 0,
  },
];

// Apresentar a listagem das cervejas com sua descrição e valor.
// Saida esperada: Cerveja {descricaoCerveja} com o valor de R$ {valorCerveja}

// forma 1
// let listaCervejas = cervejas.map((cerveja)=> `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);

// console.log(listaCervejas);

// forma 2
// let vetorCervejas = cervejas.reduce((acumulador, cerveja)=>{
//     acumulador.push(`Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);
//     return acumulador;
// }, []);   // as respostas serao guardadas em um vetor , estou iniciando com um vetror vazio

// console.log(vetorCervejas);


// forma 3
// let vetorCervejas = cervejas.reduce((acumulador, cerveja)=>{
//    let textoFinal = `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`
//     acumulador.push(textoFinal);
//     return acumulador;
// }, []);   // as respostas serao guardadas em um vetor , estou iniciando com um vetror vazio

// console.log(vetorCervejas);


// forma 4
// let vetorCervejas = cervejas.reduce((acumulador, cerveja)=>{ 
//     acumulador += `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}\n`;
//     return acumulador;
// }, '');   // as respostas serao guardadas em um vetor , estou iniciando com um vetror vazio

// console.log(vetorCervejas); // me retorna varias string


// forma 5
// let vetorCervejas = cervejas.reduce((acumulador, cerveja)=>{ 
//     acumulador += `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}\n`;
//     return acumulador;
// }, {});   // as respostas serao guardadas em um vetor , estou iniciando com um vetror vazio

// console.log(vetorCervejas); // me retorna em forma de objeto




// Aplicar um aumento de 15% no valor de todas as cervejas da nossa listagem

// forma 1
// cervejas = cervejas.map((cerveja) => {
//   cerveja.valor *= 1.15;
//   return cerveja;
// });


// forma 2
let novoVetorCervejas = cervejas.reduce((acc, cerveja) => {
  cerveja.valor *= 1.15;
  acc.push(cerveja);
  return acc
}, [])

console.log(novoVetorCervejas);




//-----------------------------------------------------------------------------------

let cervejas = [
  { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
  { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
  { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
  { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
  { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
  { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
  { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

let aumentos = [
  { fabricante: 'Urquell', aumentoPercentual: 1.10 },
  { fabricante: 'Schornstein', aumentoPercentual: 1.25 },
  { fabricante: 'Leuven', aumentoPercentual: 1.12 },
  { fabricante: 'Maniacs', aumentoPercentual: 1.05 },
  { fabricante: 'Lupulus', aumentoPercentual: 1.10 },
]

// Aplicar o aumento especificado para cada fabricante de cerveja

// forma 1
// let novosValoresParaCervejas = cervejas.map((cerveja)=>{
//   const fabricante = aumentos.find((aumento)=> aumento.fabricante === cerveja.fabricante);
//   cerveja.valor *= fabricante.aumentoPercentual;
//   return cerveja;

// });

// console.log(novosValoresParaCervejas);


// forma 2
let novosValoresParaCervejas = cervejas.reduce((acc, cerveja) => {
  const fabricante = aumentos.find((aumento)=> aumento.fabricante === cerveja.fabricante);
  cerveja.valor *= fabricante.aumentoPercentual;
  acc.push(cerveja)
  return acc
}, [])

console.log(novosValoresParaCervejas);



// ----------------------------------------------------------------------------------------------------------

let cervejas = [
  { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
  { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
  { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
  { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
  { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
  { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
  { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

let pedidos = [
  {id: 345, codigoCerveja: 122, quantidade: 30},
  {id: 765, codigoCerveja: 176, quantidade: 50},
  {id: 234, codigoCerveja: 183, quantidade: 70},
  {id: 980, codigoCerveja: 451, quantidade: 20},
  {id: 211, codigoCerveja: 323, quantidade: 100},
]

let entregas = [
  { placaVeiculo: 'XPL0912', pedidoId:345},
  { placaVeiculo: 'TRP1242', pedidoId:765},
  { placaVeiculo: 'FOL1122', pedidoId:234},
  { placaVeiculo: 'DQE0459', pedidoId:980},
  { placaVeiculo: 'RTP0909', pedidoId:211},
]

// Criar um array de objetos com as informaçoes do id do pedido, descriçao da cerveja, 
// qtd de cervejas do pedido e placa do veiculo que vai fazer a entrega e valor total do pedido

// forma 1
// let entregasResumo = pedidos.map((pedido)=>{
//   const dadosCerveja = cervejas.find((cerveja)=> cerveja.codigo === pedido.codigoCerveja);
//   const entrega = entregas.find((entrega)=>entrega.pedidoId === pedido.id);
//   return {pedido: pedido.id, cerveja: dadosCerveja.descricao, qtd: pedido.quantidade, veiculo: entrega.placaVeiculo};
// });

// console.log(entregasResumo);


// forma 2
let entregasResumo = pedidos.reduce((acc, pedido)=>{
  const dadosCerveja = cervejas.find((cerveja)=> cerveja.codigo === pedido.codigoCerveja);
  const entrega = entregas.find((entrega)=>entrega.pedidoId === pedido.id);

  acc.push({pedido: pedido.id, cerveja: dadosCerveja.descricao, qtd: pedido.quantidade, totalPedido: pedido.quantidade * dadosCerveja.valor, veiculo: entrega.placaVeiculo})
  
  return acc;
}, []);

console.log(entregasResumo);


function countAnimals(especiess) {
  // seu código aqui
  if (especiess) return species.find((nome) => nome.name === especiess).residents.length;

  return species.reduce((acc, currElement) => ({
    ...acc, [currElement.name]: currElement.residents.length }), {});
}
