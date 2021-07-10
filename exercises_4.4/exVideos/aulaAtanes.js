let pessoaEstudante = {
    nome: 'Romana',
    sobrenome: 'Jesus',
    idade: 70,
    apelido: 'Espanhola',
    blocoFinalizado:['bloco1', 'bloco2', 'bloco3'], // array
    endereco: { //outro objeto
            logradouro: 'Rua xingu',
            numero: 245,
            cidade: 'Santos',
            estado: 'São Paulo'
    } 
};
console.log(pessoaEstudante);
//posso colocar um vetor dentro do meu objeto

//conceguimos colocar um objeto dentro de um objeto

let pessoaEstudante2 = {
    'primeiro-nome': 'Luana',
    'sobrenome': 'Silva',
   ' idade': 20,
    'apelido': 'Lu'
}; // psso usar assum tambem, é mais usado quando colocamos um (-) tracinho para ceparar palavras

console.log(pessoaEstudante);


console.log(` Meu nome é ${pessoaEstudante.nome} ${pessoaEstudante.sobrenome}`); // forma de acessar o valor guardado na propriedade do objeto 1

console.log(` Meu nome é ${pessoaEstudante['nome']} ${pessoaEstudante['sobrenome']}`); // forma de acessar o valor guardado na propriedade do objeto 2

pessoaEstudante.idade = 60; //muda o valor

console.log(pessoaEstudante.idade);

pessoaEstudante.turma = 'turma 14A'//inclui uma nova propriedade - maneira 1


pessoaEstudante['turma2'] = 'turma 14b' //inclui uma nova propriedade - maneira 2

console.log(pessoaEstudante.turma); 

delete pessoaEstudante.apelido; //deleta uma propriedade

console.log(pessoaEstudante.apelido)

pessoaEstudante['turma-final'] = 'turma 14 final' // podemos criar uma nova assim tambem

console.log(pessoaEstudante['turma-final']);

for(let bloco of pessoaEstudante.blocoFinalizado){
    console.log(bloco);
}// for/of acessa o valor


console.log(pessoaEstudante.endereco);

for(let chave in pessoaEstudante) {
    console.log(chave)
} //caminha dentro do objeto, e imprime as chaves

for(let chave in pessoaEstudante) {
    console.log(pessoaEstudante[chave])
} // imprime conteudo



//-------------------

//funçoes


function imprimeResultado(){
    console.log(`Trabalhar com funcão é mara!`);
};

imprimeResultado(); //chamar a função

function imprimeResultado(textoParaImprimir){
    console.log(textoParaImprimir);
};

imprimeResultado('Trabalhar com função é muito legal');

imprimeResultado('Como diria o Gus, isso é muito legalllllll')

// assim imprime toda vez que eu precisar

function maiorNumero(numero1, numero2) {
    return Math.max(numero1,numero2)
}

console.log(maiorNumero(5, 9)); // me passa o mair numero. o max é o maior numero

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(3, 5));