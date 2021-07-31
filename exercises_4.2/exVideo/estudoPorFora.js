// inceriu os valores no array
const idade = [];
idade[0] = 18;
idade[1] = 15;
console.log(idade);

console.log();

// modo 1
const numeros = [];
for (let i = 0; i <= 10; i += 1) {
  numeros.push(i); 
}
console.log(numeros);

//modo 2 -- metodos
const n = [];
for (let i = 0; i <= 10; i += 1) {
  n.push([i]); // adiciona elemento ao final do vetor
}
console.log(n);

n.unshift([11]); // adiciona no inicio o elemento 11
console.log(n); 

n.pop() //remove o ultimo elemento do vetor
console.log(n); 

n.shift() // remove o primeiro elemento do vetor
console.log(n); 

// exemplo com cidades
const cidades = ['Pelotas']; // Declarei conteudo inicial do vetor
console.log(cidades[0]); 

cidades.push('São Lorenço') // Adiciona cidade ao final do vetor
console.log(cidades[1]); 

cidades.unshift('Porto Alegre'); // Adiciona cidede ao inicio do vetor e joga as outras pociçoes para baixo
console.log(cidades); 
//forma 1
console.log(cidades.length); // Me mostra o tamanho do vetor
//forma 2 - imprime os meus valores
for (let i = 0; i < cidades.length; i += 1){
console.log(cidades[i]); 
}

let retirada = cidades.pop() // Remove o ultimo elemento do array
console.log(retirada); 

retirada = cidades.shift(); // Remove a primeira e sobe as demais
console.log(retirada); 

console.log(cidades); 

// exemplo 3 - com outros metodos

const frutas = ['banana', 'morango', 'uva', 'melão'];

// metodo toString(): devolve o meu array em formato de string, porem ceparado por virgula
// metodo join(): devolve o meu array em formato de string, porem ceparado com oque eu determinar
console.log(`${frutas.toString()} - ${frutas.join('-')}`); 
console.log(`${frutas.toString()} - ${frutas.join(' - ')}`); 
console.log(`${frutas.toString()} - ${frutas.join(' ')}`);
console.log(`${frutas.toString()} - ${frutas.join('')}`);
console.log(`${frutas.toString()} - ${frutas.join()}`);

//For/of so funciona com array - e retorana o valor
const frutas = ['banana', 'maça', 'uva']
for (fruta of frutas) {
    console.log(fruta);
}






