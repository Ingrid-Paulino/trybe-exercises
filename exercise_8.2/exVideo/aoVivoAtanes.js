// forEach 

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// O método forEach() executa uma dada função em cada elemento de um array.

// Fazer o log de todos os jogadores do Array abaixo

const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

// Usando for tradicional
for (let index = 0; index < jogadores.length; index += 1) {
  console.log(jogadores[index]);
}
console.log()

// Qual outro for podemos usar ?
for (let jogador of jogadores) {
  console.log(jogador);

}

console.log()

// Agora usando o Hof forEach
jogadores.forEach((value) => {
  console.log(value);
}) //posso passar 3 valores diferentes (elemento, posição/index, arraytodo)

console.log()

jogadores.forEach((value, index, array) => {
  console.log(`Valor: ${value}, indice: ${index}, Array: ${array}`);
})

// Fazer o log de cada numero do array abaixo multiplicado por 3

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

// Com for of
for (numero of numeros) {
  console.log(numero * 3);
}

console.log()

// Com o forEach
numeros.forEach((numero) => console.log(numero * 3));

// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliaça2o, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
    {nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8},
    {nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5},
    {nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7},
    {nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4},
    {nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7},
    {nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7}]

pessoasEstudantes.forEach((estudante) => {
  let mediaFinal = (estudante.avaliacao + estudante.projeto + estudante.trabalhoGrupo) / 3
  if (mediaFinal >= 7) {
    console.log(`O estudante ${estudante.nome} passou com média final ${mediaFinal.toFixed(1)}`) //toFixed arredonda o numero para o numero de casas que eu passar
  }
})

// some every find

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado 
// pela função atribuída e retorna um valor true ou false.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// O método every() testa se todos os elementos do array passam pelo teste implementado 
// pela função fornecida.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de 
// teste provida. Caso contrario, undefined é retornado.

// Verificar se alguma pessoa da lista abaixo não dirige


const pessoas = [
  {nome: 'Robert', sobreNome: 'De Niro', dirige: true },
  {nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: false },
  {nome: 'Will', sobreNome: 'Smith', dirige: true },
  {nome: 'Mariah', sobreNome: 'Carey', dirige: false },
  {nome: 'Lady', sobreNome: 'Gaga', dirige: true },
  {nome: 'Justin', sobreNome: 'Bieber', dirige: false },
]
// Usando o find -- ele retorna o primeiro elemento da condição
const pessoaQueNaoSabeDirige = pessoas.find((pessoa) => pessoa.dirige === true);
console.log(pessoaQueNaoSabeDirige)

const temPessoaQueNaoDirige = (pessoas) => {
    for(pessoa of pessoas){
        if(pessoa.dirige !== true){
            return true;
            break;
        }
    }
    return false;
}
console.log(temPessoaQueNaoDirige(pessoas));


// // Usando o some
const todasPessoasDirigem = pessoas.some((value) => value.dirige !== true); // tambem tem valor index e array como parametro
console.log(todasPessoasDirigem);

// // Usando o every
const todasPessoasDirigem = pessoas.every((pessoa) => pessoa.dirige === true);
console.log(todasPessoasDirigem);



// Verificar se todas as pessoas da listagem dirigem

const todasPessoasDirigem = (pessoas) => {
    for(pessoa of pessoas){
        if(pessoa.dirige !== true){
            return false;
        }
    }
    return true;
}

// console.log(todasPessoasDirigem(pessoas));

// Usando o every


// sort
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é 
// necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.



// Ordenar o jogadores em ordem alfabética
const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];
jogadores.sort(); //segue o alfabeto
console.log(jogadores);

// Ordenar os números em ordem crescente
const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

numeros.sort();
console.log(numeros)

// precisamos passar os parametros de comparação para dar certo
const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];
//num1 = numero 12  num2 = 3, ele pega de 2 em 2
//Se retornar 0 é pq os numeros do parametros são iguais
numeros.sort((num1, num2) => num1 -num2);
console.log(numeros)

// Ordenar os numeros em ordem crescente
const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];
//num1 = numero 12  num2 = 3, ele pega de 2 em 2
// E so inverter a ordem dos numeros
numeros.sort((num1, num2) => num2 - num1);
console.log(numeros)