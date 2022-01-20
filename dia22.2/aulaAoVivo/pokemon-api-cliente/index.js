const axios = require('axios'); 

// jeito 1
const handleResponse = (response) => console.log(response.data.name);



// jeito 1
// axios.get('https://pokeapi.co/api/v2/pokemon/1')
//   .then((response) => console.log(response.data.name));
  // .then(handleResponse);

// jeito 2
const main = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
  console.log(response.data.name);
  // console.log(response);
}


main();