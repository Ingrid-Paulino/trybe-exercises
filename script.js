const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará','Paraíba','Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina','São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']; 

const stateSelect = document.querySelector('#state');
// for (let index = 0; index < stateSelect.clientHeight; index += 1) {
//   const stateOption =document.createElement('option');

//   stateOption.innerText = states[index];
//   stateOption.value = states;
// }

for (let state of states) {
  const stateOption = document.createElement('option');
  stateOption.innerText = state;
  stateOption.value = state;
  stateSelect.appendChild(stateOption);
}

// Validaçoes:
// o que vou validar
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email'); 
const phoneInput = document.getElementById('phone'); 
const addressInput = document.getElementById('address'); 
const submitbutton = document.getElementById('btn-submit');
const form = document.getElementById('register-form');

//poderia usar o submitbutton, com esse form ele //ja envia com enter em cada validação 
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); //com isso ele nn envia mais assim que eu der submit e nn faz a atualização da pagina. previne o envio padrao do html. Se eu tirar o preventdefout ele envia atualizando a pagina
//  phoneInput.value = 'aisubfdisfidjgiofdggdf'
//  console.log('oiii')

//  //assim nn atualiza quando eu envar

// })

// form.addEventListener('submit', function(event) {
//   //event.preventDefault(); //com isso ele nn envia mais assim que eu der submit e nn faz a atualização da pagina. previne o envio padrao do html. Se eu tirar o preventdefout ele envia atualizando a pagina
//  phoneInput.value = 'aisubfdisfidjgiofdggdf'
//  console.log('oiii')

// // envia

// })

form.addEventListener('submit', function(event) {
  event.preventDefault();



})

submitbutton.addEventListener('click', function(event) {
  event.preventDefault();
  const splitName = nameinput.value.split(' ');
  console.log(splitName)
  if(splitName.lenght <= 1) {
    alert('Name invalido: campo vazio ou um nome so')
  }

  if(nameInput.value.lenght === 0) {
    return alert('nome invalido');
  }

  if (emailInput.value.lenght === 0) {
    alert('e-mail invalido');
  }
  if (emailInput.value === '') {
    alert('e-mail invalido');
  }//se oemail estiver vazio

  if (emailInput.value === '') {
    return alert('e-mail invalido');
  }//se eu colocar um return ele nn vai fazer mais nada pra vaixo se tiver
})

obs: input te devolve String