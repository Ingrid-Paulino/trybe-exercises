// API do POKEMON -> https://pokeapi.co/
// Lista dos Pokemons -> https://www.pokemon.com/br/pokedex/

const appendPokemon = (pokemon, uriImagem) => {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let divNome = document.createElement("div");
  let divImagem = document.createElement("div");
  let img = document.createElement("img");

  divNome.innerHTML = pokemon;
  img.src = uriImagem;
  divImagem.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImagem);

  ul.appendChild(li);
};

// const getPokemon = (pokemon) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//     });
//   }
// );
// }

// const fetchPokemon = () => {
//   // o problema desse jeito é que eu nao sei qual a ordem ele vai me devolver - nn temos controle da resposta, nn temos dominio da resposta que vai chegar pra mim, por esse motivo precisamos de ter um controle das execuçoes para ter controle das respostas
//   getPokemon('bulbasaur');
//   getPokemon('rattata');
//   getPokemon('ditto');

// //   fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((response) => {
// //     response.json().then((dados) => {
// //       appendPokemon(dados.name, dados.sprites.front_default);
// //       fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
// //         response.json().then((dados) => {
// //           appendPokemon(dados.name, dados.sprites.front_default);
// //           fetch("https://pokeapi.co/api/v2/pokemon/rattata").then(
// //             (response) => {
// //               response.json().then((dados) => {
// //                 appendPokemon(dados.name, dados.sprites.front_default);
// //               });
// //             }
// //           );
// //         });
// //       });
// //     });
// //   });
// };

// window.onload = fetchPokemon();

// forma 2
// const getPokemon = (pokemon, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       callback();
//     });
//   }
// );
// }

// const imprimeTexto = ( ) => console.log('Imprime qualquer coisa');
// const fetchPokemon = () => {
//   // tendo controle do tempo das chamadas

//   getPokemon('bulbasaur', getPokemon('pikachu'))

// }

// window.onload = fetchPokemon();

// const getPokemon = (pokemon, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       callback();
//     });
//   }
// );
// }

// const imprimeTexto = ( ) => console.log('Imprime qualquer coisa');
// const fetchPokemon = () => {
//   // assim perco novamente o poder de quem vai aparecer primeiro

//   getPokemon('bulbasaur',
//     getPokemon('weedle',
//       getPokemon('vulpix')));

// }

// window.onload = fetchPokemon();

// const getPokemon = (pokemon, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       // verifica se tem alguma coisa dentro do parametro da callback, tendo controle do que esta acontecendo com a resposta
//       callback ? callback() : undefined;
//     });
//   }
// );
// }

// const imprimeTexto = ( ) => console.log('Imprime qualquer coisa');
// const fetchPokemon = () => {
//   // assim perco novamente o poder de quem vai aparecer primeiro

//   getPokemon('bulbasaur',
//     getPokemon('weedle',
//       getPokemon('vulpix')));

// }

// window.onload = fetchPokemon();

// transformando em uma promisse

// const getPokemon = (pokemon, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       // verifica se tem alguma coisa dentro do parametro da callback, tendo controle do que esta acontecendo com a resposta
//       callback ? callback() : undefined;
//     });
//   });
// };

// const imprimeTexto = () => console.log("Imprime qualquer coisa");

// const getPokemonPromise = (pokemon) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//       response.json().then((dadosPokemon) => {
//         appendPokemon(dadosPokemon.name, dadosPokemon.sprites.front_default);
//         resolve();
//       });
//     });
//   });
// };

// const fetchPokemon = () => {
//     getPokemonPromise("ditto")
//     .then(() => getPokemonPromise("spearow"))
//     .then(() => getPokemonPromise("rattata"))
//     .then(() => getPokemonPromise("zubat"))

//     //posso colocar quantos then eu quiser aqui agr, e vai seguir um abixo do outro, em ordem
// };

// window.onload = fetchPokemon();



// pode ser que eu tenha um erro
// const getPokemon = (pokemon, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       // verifica se tem alguma coisa dentro do parametro da callback, tendo controle do que esta acontecendo com a resposta
//       callback ? callback() : undefined;
//     });
//   });
// };

// const imprimeTexto = () => console.log("Imprime qualquer coisa");

// const getPokemonPromise = (pokemon) => {
//   return new Promise((resolve, reject) => {
//     if (pokemon !== "atanes") {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
//       response.json().then((dadosPokemon) => {
//         appendPokemon(dadosPokemon.name, dadosPokemon.sprites.front_default);
//         resolve();
//       });
//     });
//     }else {
//       // me mostra uma mensagem de erro
//       reject('Atanes não é pokemon meu querido!!')
//     }
//   });
//     }
    


// const fetchPokemon = () => {
//     getPokemonPromise("ditto")
//     .then(() => getPokemonPromise("spearow"))
//     .then(() => getPokemonPromise("rattata"))
//     .then(() => getPokemonPromise("zubat"))
//     .then(() => getPokemonPromise("atanes")) // vai dar erro, pois nn tem, assim podemos criar o erro para ligar com isso
//     .catch((erro)=>console.log(erro)) // posso colocar qualquer coisa ao inves do log, vai depender do que eu quero trabalhar/fazer


//     //posso colocar quantos then eu quiser aqui agr, e vai seguir um abixo do outro, em ordem
// };

// window.onload = fetchPokemon();



//melhor solução --



const getPokemon = (pokemon, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
    response.json().then((dados) => {
      appendPokemon(dados.name, dados.sprites.front_default);
      // verifica se tem alguma coisa dentro do parametro da callback, tendo controle do que esta acontecendo com a resposta
      callback ? callback() : undefined;
    });
  });
};

const imprimeTexto = () => console.log("Imprime qualquer coisa");

const getPokemonPromise = (pokemon) => {
  return new Promise((resolve, reject) => {
  if(pokemon === undefined) {
    // me mostra uma mensagem de erro
    reject("Voce precisa definir o nome do pokemon para continuar")
  }
    if (pokemon !== "atanes") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
      response.json().then((dadosPokemon) => {
        appendPokemon(dadosPokemon.name, dadosPokemon.sprites.front_default);
        resolve();
      });
    });
    }else {
      reject('Atanes não é pokemon meu querido!!')
    }
  });
    }


const fetchPokemon = async () => {
  //para tratar erro nesse caso criamos um bloco try
  // a vantage desse é que podemos tratar varios erro empilhados - erros diferentes
try {
    await  getPokemonPromise("ditto") // enquanto essa nn me der uma resposta, a de baixo nn vai funcionar igual o then, assim sucesivamente. mas fica mais bonito o codigo. 
  await  getPokemonPromise("spearow")
  await  getPokemonPromise("rattata")
  await  getPokemonPromise("pikachu")
  await  getPokemonPromise("zubat")
  await  getPokemonPromise("atanes") 
}catch (error) {
  console.log(error);
}
};

window.onload = fetchPokemon();




  // if (!dayName) {
  //   const cronograma = Object.entries(hours);
  //   return cronograma.reduce(
  //     (acc, days) => ({ ...acc, ...getDayentry(days[0]) }),
  //     {}
  //   );
  // }
  // return getDayentry(dayName);


    // if (!idOrName) {
  //   const func = employees.reduce((acc, curr) => {
  //     acc[`${curr.firstName} ${curr.lastName}`] = curr.responsibleFor.map((id) => {
  //       const respon = species.find((animal) => id === animal.id);
  //       return respon.name;
  //     });
  //     return acc;
  //   }, {});
  //   return func;
  // }

  const idOuName = employees.find((escolha) => escolha.id === idOrName || escolha.firstName === idOrName || escolha.lastName === idOrName);

  return idOuName;


  const valores = Object.values(hours);
  const cronoParaHumanos = Object.keys(hours).reduce((acc, curr, index) => {
    acc[curr] = `Open from ${Object.keys(acc)[index]}am until ${Object.keys(acc)[index] - 12} pm`;
    return acc;

  }, {});

  if (!dayName) {
    return cronoParaHumanos;
  }
  