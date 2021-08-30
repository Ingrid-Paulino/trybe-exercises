// function verificaPalidromo(arara) {
//     for(let index = 0; index < arara.lengh; index += 1) {
//         for(let i = 0; index < arara.lengh; index += 1) {
//             if(arara[index] )
//         }

//     }
// }  nao conseguir a n 1


//n° 2 
function maiorValor(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}



console.log(maiorValor([2, 3, 6, 7, 10, 1]));



// me retorna a letra da string na posição que eu quero 
function testDEString(name) {
    return name[name.length - 1] //sempre vai me devolver a ultima letra
}
console.log(testDEString('Ingrid'));



function testDeString(name) {
    return name[name.length - 2] // sempre vai me retornar, a penutima letra
}
console.log(testDeString('Ingrid'));