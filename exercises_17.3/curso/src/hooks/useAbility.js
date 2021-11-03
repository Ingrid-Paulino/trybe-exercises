//Hooks customizados
//Criamos hooks quando vou utilizalo em varios lugares, nesse caso aqui não seria necessario
import { useState, useEffect } from 'react';

//criação da função que vai retornar esse hook
//por padrao no react, eu tenho que usar o 'use' no inicio do meu hook
//esse hook é uma funçaõ que tem dois estados, um é a url e a outra é a lista de abilidades
// criei um useEffect que executa toda vez que a minha url trocar

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  //busca as informações do pokemon
  //acontece a busca da abilidade do pokemon, toda vez que a minha url mudar
  // if - se a minha pokeUrl for diferente de estring vazia, é buscado as informaçoes
  //data é todo o meu array
  useEffect(async () => {
    if(pokeUrl !== '') {
      // console.log(pokeUrl);
      const results = await fetch(pokeUrl)
      .then((response) => response.json())
      .then((data) => data.abilities);
      // console.log(results);
      //desconstrui o abilities
      const abilities = results.map(({ ability }) => ability.name);
      setPokemonAbilities(abilities);
    }
  }, [pokeUrl]);

  //o meu retorno é duas informaçoes, por isso na hr de puxar eu sempre coloco duas informaçoes tbm.
  return [pokemonAbilities, setPokeUrl]
}

export default useAbility;