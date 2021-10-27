// src/App.test.js
import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest'; //biblioteca diferente para mock
import App from '../App';
import renderWithRedux from './helpers';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    //le: eu espero no meu teste que eu vou mockar isso uma vez

    //ou 

    // eu espero que a procima vez que eu utilizar i fetch, eu espero que seja nessa url e que o retorno vai ser o que esta na chave  body
    // estou mocando o fetch
    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      //oq a url tem q retornar
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);

    //aqui eu espero que o mock seja chamado, por isso é assincrono
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
