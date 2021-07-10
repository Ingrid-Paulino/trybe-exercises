let criaH1 = document.createElement('h1');
document.body.appendChild(criaH1).innerText = 'Exercicio 5.2';

let div1 = document.createElement('div');
div1.className = 'main-content';
document.body.appendChild(div1);


let filhoDiv1 = document.createElement('div') ;
filhoDiv1.className = 'center-content';
div1.appendChild(filhoDiv1);

let filhoP = document.createElement('p')
div1.appendChild(filhoP).innerText = 'Olá, mundo!'

let filho2Div1 = document.createElement('div');
div1.appendChild(filho2Div1).className = 'left-content'

let filho3Div1 = document.createElement('div');
div1.appendChild(filho3Div1).className = 'right-content'

let img = document.createElement('img');
img.src = 'https://picsum.photos/200'
filho2Div1.appendChild(img).className = 'small-image';

let listaFilhaFilho3Div1 = document.createElement('ul')
for(let i = 1; i <= 10; i += 1) {
    let lista = document.createElement('li');
    lista.innerText = `${i}`
    listaFilhaFilho3Div1.appendChild(lista);
}

filho3Div1.appendChild(listaFilhaFilho3Div1);

for(index = 1; index <= 3; index += 1) {

    let filhaH3 = document.createElement('h3');
    div1.appendChild(filhaH3);   
    filhaH3.className = 'description';
 }

criaH1.className = 'title';
div1.removeChild(filho2Div1)
filho3Div1.style.marginRight = 'auto'
div1.style.backgroundColor = 'green'
listaFilhaFilho3Div1.lastChild.remove()

