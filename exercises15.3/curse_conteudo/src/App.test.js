// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
// import { render, waitFor } from '@testing-library/react';
import App from './App';

// forma 1
test('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  // PARTE 1
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

  // PARTE 2
    // forma 1
    // const response = { json: jest.fn().mockImplementation(() => Promise.resolve(joke)) }

    // forma 2 - mais facil
    // const response = { json: jest.fn(() => Promise.resolve(joke)) }

    // forma 3 - muto mais facil
    // a promise ja esta imbutida aqui
    const response = { json: jest.fn().mockResolvedValue(joke) }

    //simular o comportamento do fatch agr
    //global é um arrayzao e dentro dele tem o fetch
    global.fetch = jest.fn().mockResolvedValue(response)

    //Obs: podemos fazer tudo em uma tacada so
    //forma concatenada
    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke) })

  // PARTE 3
    const { findByText } = render(<App />)
    await findByText('Whiteboards.. are remarkable')

    //OBS: podemos usar o waitFor tambem
    // await waitFor(() => findByText('Whiteboards.. are remarkable'));
})




// //forma 2
// // App.test.js
// import React from 'react';
// import { render } from '@testing-library/react'
// import App from './App';

// afterEach(() => jest.clearAllMocks());
// it('fetch joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, "fetch")
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });
//   const { findByText } = render(<App />);
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     {"headers": {"Accept": "application/json"}}
//   );
// });

// // Vamos em partes entender o que esta acontecendo:
// // A constante joke cria um objeto similar ao que é retornado da API ;

// // O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;

// // Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;

// // É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ;

// // As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.

// // A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.

// //forma 3
// afterEach(() => jest.clearAllMocks());
// it('should fetch users', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   global.fetch = jest.fn(()=>
//   Promise.resolve({
//     json: ()=> Promise.resolve(joke)
//   }));

//   const { findByText } = render(<App />);
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
// });

// // O código é muito similar ao do primeiro exemplo, alterando somente o mock .

// // Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise , e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise , que quando resolvida retorna sua piada.

// // Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await , onde temos o mock dessa forma:
// // forma 4
// global.fetch = jest.fn(async () => ({
//   json: async () => joke
// }));