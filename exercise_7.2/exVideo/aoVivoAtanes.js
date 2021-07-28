// não deu certo
const obj = {
  nome: 'ingrid',
  idade: 18
}

function pessoa(obj, key, value){
  obj[key] = value
}
pessoa(obj, 'cidade', 'Belo Horizonte');
console.log(obj);





const pessoa = {
  nome: 'gabriel',
  sobreNome: 'bolivia',
  age: 27,
  usaOculos:true,
};

console.table(pessoa);

// iserir uma nova propriedade no objeto

pessoa.time = 'America';
console.table(pessoa)

pessoa['estado'] = 'Minas Gerais';
console.table(pessoa);

// trocar um campo especifico
pessoa.time = 'Atletico';
//pessoa['time'] = 'Atletico'
console.table(pessoa);


//visualizar so algumas propriedades

console.log(`O ${pessoa.nome} torce para o ${pessoa.time}`);

const endereco = {
  logradouro: 'Rua aclimação',
  numero: 123,
  bairros: {bairro1:'Aclimação', bairro2: 'Paraiso', bairro3:'Mooca'},
}

//colocar o obj endereço dentro de pessoa
pessoa['endereco'] = endereco; 
//pessoa.endereco = endereco;
// pessoa['endereco'] = const endereco = {
//     logradouro: 'Rua aclimação',
//     numero: 123,
//     bairro: 'Aclimação',
// }; 

console.table(pessoa);

// acessando as coisas do meu objeto
console.log(pessoa.endereco.bairros.bairro1);
 
// me da as chaves do meu objeto
console.log(Object.keys(pessoa))



const livro1 = {
  autor: 'Machado de Assis',
  titulo: 'Eramos seis'
}

const livro2 = {
  autor: 'Jose de alencar',
  titulo: 'Vereda',
  qtdPaginas: 200,
}

function verificaQtdPaginas(livro) {
  return Object.keys(livro).includes('qtdPaginas');
}
console.log(verificaQtdPaginas(livro1));
console.log(verificaQtdPaginas(livro2));


console.log(Object.values(pessoa));

console.log(Object.entries(pessoa));



// ------------------------------------------
const livro ={
  titulo: 'Eramos seis',
  editora: 'Atica'
}
console.log(livro);
const autor = {
  nome: 'Machado de Assis'
}
console.log(autor);
Object.assign(livro, autor)

console.log(livro);
console.log(autor);

// assign aceita que facemos um clone
const livroComAutor = Object.assign({},livro,autor);
console.log(livroComAutor);





// enprime a string como um objeto
console.log(Object.entries('Alexandre'));

let nome = 'Alexandre';

for (letra in nome){
  console.log(nome[letra]);
}

console.log(Object.entries('Alexandre'));

let nome = '123';

for (letra in nome){
  console.log(nome[letra]);
}

console.log(Object.entries('Alexandre'));

let nome = 123;

for (letra in nome){
  console.log(nome[letra]);
}