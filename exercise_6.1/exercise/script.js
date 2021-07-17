//estados
const estados = ['selecione','Acre','Alagoas','Amapá', 'Amazonas', 'Bahia', 'Ceará','Espírito Santo' , 'Goiás', 'Maranhão', 'Mato Grosso','Mato Grosso do Sul','Minas Gerais', 'Pará','Paraíba','Paraná','Pernambuco','Piauí', 'Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal']; 

const estado = document.getElementById('estado');

for(let index = 0; index < estados.length; index += 1) {
  const createOption = document.createElement('option');
  estado.appendChild(createOption).innerText = estados[index];
  select.appendChild(createOptions).value = estados[index];
}