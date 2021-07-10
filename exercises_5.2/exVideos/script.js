let q = document.querySelector('#elementoOndeVoceEsta')

console.log(q);

let paai = document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';

console.log(paai);

let pai = document.querySelector('#elementoOndeVoceEsta').parentNode.parentNode;

console.log(pai);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Olá, Mundo!'


let paifilho = document.querySelector('#pai').firstElementChild ;

console.log(paifilho)


let filhoElementoOndeVcEsta = document.querySelector('#elementoOndeVoceEsta ').previousElementSibling ;

console.log(filhoElementoOndeVcEsta)

let ondeEsta = document.querySelector('#elementoOndeVoceEsta').nextSibling;

console.log(ondeEsta)


let terceirof = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

console.log(terceirof);

// let pai3f = document.querySelector('#pai') duvidaaaa



//-----------
let criaIrmao = document.querySelector('.pai').createElement('div');

console.log(criaIrmao)

let criaFilho 