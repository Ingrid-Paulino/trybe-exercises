//Adicionar textos -- chame os id
const inputText = document.getElementById('input-add-text');
const btnAddText = document.getElementById('btn-add-text');
const listText = document.getElementById('test-list')

//Adiciona Imagens
const inputImage = document.getElementById('input-add-image');
const btnAddImage = document.getElementById('btn-add-image');
const containerImage = document.getElementById('image-container')

//usamos o const pois eu não altero os valores da minha variavel

//forma1
btnAddText.addEventListener('click', addText);

function addText(event) {
    const textContent = inputText.value;
    const listItem = document.createElement('li');
    listItem.innerText = textContent; 
    listItem.classList.add('text-list-item')
    //listItem.classList.add('text-list-item', 'lista-item') // é tipo o className, mas é melhor. tem o o valor remove tambem no .add como valor -- esse comando trabalha com array, poe varias class de uma vez so
    listText.appendChild(listItem);
    inputText.value = ''; //se torna vazio para o texto sumir
}

//forma2
// btnAddText.addEventListener('click', function() {
//     const textContent= inputText.value;
//     // console.log(textContent) -- mostra o valor do que eu escrever na linha de cima.
// })

function addText(event) {
    const imageSource = inputImage.value;
    const imageItem = document.createElement('img');
    imageItem.src = imageSource; 
    imageItem.classList.add('image-item');
    containerImage.appendChild(imageItem);
    inputImage.value = ''; //se torna vazio para o texto sumir
}
