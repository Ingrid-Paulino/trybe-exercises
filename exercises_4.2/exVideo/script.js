                   // ARRAY
//ex:1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//ex:2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Portfólio');

console.log(menuServices);

//ex:3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

              //FOR
//ex:1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1 ) {
    console.log(groceryList[i])
}

               //FOR/OF

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
    console.log(name);
}

const frutas = ['banana', 'maça', 'uva']
for (fruta of frutas) {
    console.log(fruta);
}

for(let i = 0; i <= 10; i += 1 ) {
    console.log([i])
}

for(let i = 0; i <= 10; i += 1 ) {
    console.log(i)
}


// me retorna a letra da string na posição que eu quero 
function testDEString(name) {
    return name[name.length - 1] //sempre vai me devolver a ultima letra
}
console.log(testDEString('Ingrid'));



function testDeString(name) {
    return name[name.length - 2] // sempre vai me retornar, a penutima letra
}
console.log(testDeString('Ingrid'));
