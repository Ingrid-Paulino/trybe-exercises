const pokeTips = require("../js/pokeTips");

// Validar as respostas da função pokeTips usando Jest

//não podemos fazer o test direto quando usamos callback - pois ela me retorna um falso-positivo

//Falso-positivo - ele passa, mas falha
test('Retornar o melhor pokemon para começar o jogo', () => {
  const callback = (dado) => {
    expect(dado).toBe('Charmander é o melhor pokémon para começar.');
  }
  pokeTips(callback);
})

// coloquei atanes para testar esse falso positivo  - ele passa, mas falha
test('Retornar o melhor pokemon para começar o jogo', () => {
  const callback = (dado) => {
    expect(dado).toBe('Atanes é o melhor pokémon para começar.');
  }
  pokeTips(callback);
})


// precisamos usar o done para forçar o test parar, para o processamento nn continuar sem que a callback não responda - dara certo usando o done.
test('Retornar o melhor pokemon para começar o jogo', (done) => {
  const callback = (dado) => {
    expect(dado).toBe('Charmander é o melhor pokémon para começar.');
    done();
  }
  pokeTips(callback);
})