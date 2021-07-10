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