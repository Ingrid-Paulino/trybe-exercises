const {
  incluirPokemon,
  clearPokemons,
  populaPokemons,
  filterBySpeed,
  filterByName,
} = require("../js/pokemons");
//toBe - dados naturais
//toEqual - dados complexos


// me da a certeza que antes de cada teste os meus dados estarao com a estrutura inicial correta. No caso aqui estariamos olhando o array
//ele trabalha em cima desses arrays, evitando o erro de esta alterando a/as minha referencia que são essas funçoes abaixo



describe('Verifica retorno dos pokemons com base na sua velocidade', () => {

//pode ser global ou pode estar dentro do describe
  beforeEach(() => {
    clearPokemons();
    populaPokemons();
  }) 

//executa depois de cada teste executar
//afterEach()



// pasando um novo pokemon
// com o beforeEach, não vai inportar o que escrevi na linha 71
it('Retorna novos pokemons', () => {
  incluirPokemon({name: "Atanes", type: "Electric", speed: 99})
  expect.assertions(1);
  return filterBySpeed(50).then((resposta) => {
    expect(resposta).toEqual(['Charmander', 'Pikachu', 'Atanes']);
  })
})

  // // Com promisse usamos o than - esta me dando um falso-positivo 
// test('Retorna os pokemons com velocidade acima de 50', () => {
//   filterBySpeed(50).then((resposta) => {
//     expect(resposta).toEqual(['Charmander', 'Pikachu']);
//   })
// })

// // Com promisse usamos o than - esta me dando um falso-positivo 
// test('Retorna os pokemons com velocidade acima de 50', () => {
//   filterBySpeed(50).then((resposta) => {
//     expect(resposta).toEqual(['Charmander', 'Atanes'])
//   })
// })


// expect.assertions - fala pro meu testes quantar respostar eu espero da minha promise

//é necessario usar o expect.assetions - ele significa quantos test vc quer validar, nocaso abaixo é so um
// return é pra saber de onde ele vai esperar a resposta

//OBS: para esse carregar, comente as linhas acimas
// OBS: se eu mudar a posiçoes do array, meu test não passa
test('Retorna os pokemons com velocidade acima de 50', () => {
  expect.assertions(1);
  return filterBySpeed(50).then((resposta) => {
    expect(resposta).toEqual(['Charmander', 'Pikachu']);
  })
})

//com promisse tem que colocar expect.assertion
//com o catch passa o test se a resposta for a errada
it('Retorna erro quando não encontra um pokemon', () =>{
  expect.assertions(1);
  return filterBySpeed(100).catch((resposta) => {
    expect(resposta).toEqual("Nenhum Pokemon encontrado.")
  })
})


// pasando um novo pokemon
//Se eu colocar esse teste para ser o primeiro la em cima, vai falhar o meu test, pois no caso eu estarei alterando a minha referencia, o array pai, pois nesse test eu crio um novo pokemon
it('Retorna novos pokemons', () => {
  incluirPokemon({name: "Atanes", type: "Electric", speed: 99})
  expect.assertions(1);
  return filterBySpeed(50).then((resposta) => {
    expect(resposta).toEqual(['Charmander', 'Pikachu', 'Atanes']);
  })
})
})






describe('Verifica retorno dos pokemons com base na sua velocidade  usando async/await', async () => {

  beforeEach(() => {
    clearPokemons();
    populaPokemons();
  }) 

//executa depois de cada teste executar
//afterEach()

  it('Retorna novos pokemons', () => {
    incluirPokemon({name: "Atanes", type: "Electric", speed: 99})
    expect.assertions(1);
    const resposta = await filterBySpeed(50);
    expect(resposta).toEqual(['Charmander', 'Pikachu', 'Atanes']);
  })

  it('Retorna novos pokemons', () => {
    expect.assertions(1);
    const resposta = await filterBySpeed(50);
    expect(resposta).toEqual(['Charmander', 'Pikachu']);
  })


  // quero pegar o erro, por isso do catch
  // unica forma de pegar o erro com async é com o try/catch
  it('Retorna novos pokemons', () => {
    expect.assertions(1); //fala pro meu testes quantar respostar eu espero da minha promise
    try {
      const resposta = await filterBySpeed(100);
    }catch (error) {
    expect(error).toEqual('Nenhum Pokemon encontrado');
    }
  })

});


test('Verifica se existe um pokemon com o nome Atanes', () => {
  incluirPokemon({name: "Atanes", type: "Electric", speed: 99})
  expect(filterByName('Atanes')).toEqual({ name: "Atanes", type: "Electric", speed: 90 });
});