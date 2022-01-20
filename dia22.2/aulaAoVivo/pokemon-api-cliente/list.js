const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data.name;
}

getPokemonById(1);
getPokemonById(2);
getPokemonById(3);


const promises = [];

async function main() {
  for (let index = 1; index <= 50; index++) {
    const promise = getPokemonById(index);  
    promises.push(promise);
  }

  console.log(promises);

  const names = await Promise.all(promises);  // Use promisse.all quando for usar um array de promisse
  
  console.log(names);
}

main();