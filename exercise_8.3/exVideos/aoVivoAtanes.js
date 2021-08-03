// Filter
// Links uteis:
// HoF FILTER
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// O método filter() cria um novo array com todos os elementos que passaram no teste 
// implementado pela função fornecida.

// Operações com String em Javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let cervejas = [
  { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
  { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
  { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
  { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
  { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
  { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
  { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

// Mostrar todas as cervejas com valor abaixo de R$ 25.00
// forma 1
//   let cervejasAte25 = [];

// for (let index = 0; index < cervejas.length; index += 1) {
//   if (cervejas[index].valor < 25.00) {
//     cervejas.push(cervejas[index]);
//   }
// }
// console.log(cervejasAte25)

// forma 2 -- assim facilita a nossa vida filter me retorna todos os elementos
let cervejasAte25 = cervejas.filter((cerveja) => cerveja.valor < 25.00)
console.log(cervejasAte25);

//find me retorna so um elemento
// let cervejasAte25 = cervejas.find((cerveja) => cerveja.valor < 25.00)
// console.log(cervejasAte25);

console.log()

// Mostrar todas as cervejas com estoque baixo de 100 unidades
let cervejasComBaixoEstoque = cervejas.filter((cerveja) => {
  return cerveja.estoque < 100;
})
console.log(cervejasComBaixoEstoque);

console.log()

//como temos so uma linha, podemos diminuir tudo
// let cervejasComBaixoEstoque = cervejas.filter((cerveja) => cerveja.estoque < 100);
// console.log(cervejasComBaixoEstoque);

// Mostrar todas as cervejas que começam com a letra L

let cervajasComLetraL = cervejas.filter((cerveja) => cerveja.descricao[0] === 'L');
console.log(cervajasComLetraL);

console.log();

//ou
// let cervajasComLetraL = cervejas.filter((cerveja) => cerveja.descricao.startsWith('L'));
// console.log(cervajasComLetraL);

// console.log()

// Mostrar todas as cervejas que contenham a palavra IPA na sua descricao
 let cervajasIPA = cervejas.filter((cerveja) => cerveja.descricao.includes('IPA')); //busca o que tiver IPA

console.log(cervajasIPA);

console.log()

//map --- transforma um array em outro array com as fiferenças feitas do meu array inicial
// exemplo 1
// Links uteis:
// HoF MAP
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// O método map() invoca a função callback passada por argumento para cada elemento do Array 
// e devolve um novo Array como resultado.

// Operações com String em Javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let cervejas = [
  { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
  { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
  { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
  { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
  { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
  { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
  { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

// Apresentar a listagem das cervejas com sua descrição e valor.
// Saida esperada: Cerveja {descricaoCerveja} com o valor de R$ {valorCerveja}

// usando for/of - dessa forma so inprime o valor
// for (cerveja of cervejas) {
//   console.log(`Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);
// }

//ou

// let listagem = [];
// for (cerveja of cervejas) {
//    listagem.push(`Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);
//   }


// usando map - gera um novo vetor
// let listaCervejas = cervejas.map((cerveja) => {
//   return `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`
// });
// console.log(listaCervejas); 

// ou

let listaCervejas = cervejas.map((cerveja) => `Cerveja ${cerveja.descricao} com o valor de R$ ${cerveja.valor}`);
console.log(listaCervejas); 

// Aplicar um aumento de 15% no valor de todas as cervejas da nossa listagem

let cervejasComAumento = cervejas.map((cerveja) => {
  cerveja.valor *= 1.15;
  return cerveja;
})

console.log(cervejasComAumento);


// não faça assim nunca, guarde sempre em uma variaveis porque assim voce pode apagar/ substituir o array original. mas imagina se voce altera de forma errada.
// cervejas = cervejas.map((cerveja) => {
//   cerveja.valor *= 1.15;
//   // return cerveja;
// })
// console.log(cervejas);



// exemplo 2
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
let novosValoresParaCervejas = cervejas.map((cerveja) => {
  const fabricante = aumentos.find((aumento) => aumento.fabricante === cerveja.fabricante);
  cerveja.valor *= fabricante.aumentoPercentual;
  return cerveja;
});
console.log(novosValoresParaCervejas);


// exemplo 3
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
// qtd de cervejas do pedido e placa do veiculo que vai fazer a entrega

let entregasResumo = pedidos.map((pedido) => {
  dadosCerveja = cervejas.find((cerveja) => cerveja.codigo === pedido.codigoCerveja);
  entrega = entregas.find((entrega) => entrega.pedidoId === pedido.id);
  return {pedido: pedido.id, cerveja: dadosCerveja.descricao, qtd: pedido.quantidade, veiculo: entrega.placaVeiculo};
})
console.log(entregasResumo);