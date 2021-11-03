import React, { useEffect, useState } from 'react';
import useAbility from './hooks/useAbility';

function App() {
  const [pokemons, setpokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  //puxando informaçoes
  const [abilities, setPokeUrl] = useAbility();
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`

  //useEffect
     //tem 2 parametros
      //1° é uma callback
      //2° é uma lista de dependencias, no caso é um array, onde dentro coloco a condição para eu executar o useEffect

        //É componentDidMount:
        //quando deixo a lista vazia, assim ele executa o meu useEffect apenas quando o meu componente for montado na tela
          /*
            useEffect( callback, [])
          */

        //É componentdidUpdate e shouldUpdated:
        //quando coloco o valor de uma variavel, ele executa a callback toda vez que eu trocar o meu estado dessa variavel.
        // usamos quando o component é atualizado
        // ex:
          /*
            useEffect( callback, [pokemons])
          */

        //componentWillAllMount
        //Para ser executado, ele precisa de uma outra função que retorna um return nessa minha callback .
        //usamos quando o componente vai ser desmontado
          /*
            useEffect( () => {return () => {}}, [])
          */
  /*
  //Esta configuração executará a função toda vez que o componente sofrer qualquer tipo de alteração e renderizar, **repetidas vezes**. Ela precisa ser utilizada com **cautela**, pois facilmente resulta em **loops infinitos**.

  // useEffect(async () => {
  //   // destruturei results, assim ja me devolve so o que tem dentro de results, ao inves de me retornar todo o meu json
  //   const { results } = await fetch(url).then((response) => response.json());
  //   // console.log(results);
  //   setpokemons(results);
  // })
  */

  //transformei em componentdidUpdate shouldUpdated
  //agr toda vez que eu atualizar o meu limit ele vai executar uma busca nos pokemons de novo
  useEffect(async () => {
    const { results } = await fetch(url).then((response) => response.json());
    setpokemons(results);
  }, [limit]);

  const handleMorePokemons = () => {
    setLimit(limit + 10)  //toda vez que somar aqui o meu limit de pokemons que vim pra mim vai mudar
    // console.log(limit);
  }

  return ( 
    <div>
      {/* no h1, esta mostrando a abilidade que eu cliquei */}
      {/* abilities estou pegando do meu hook */}
      {/* transformei abilities em string */}
      <h1>{abilities.toString()}</h1>
      <button type="button" onClick={handleMorePokemons}>Buscar mais pokemons</button>
      <ul>
        {
          // toda vez que eu clicar no nome, a url sera trocada
          // A minha url troca quando eu clico no objeto
          pokemons.map(({ name, url }) => <li key={name} onClick={() => setPokeUrl(url)}>{name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;