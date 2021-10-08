import React from 'react';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('MovieList', ()=>{
  test('Renderiza "Carregando..." quando a aplicação é iniciada', () => {
    const { getByText } = render(<App/>);

    expect(getByText(/cArregaNdo/i)).toBeInTheDocument();
    // /carregando/i - uso de regex. Me posibilita passar tudo minusculo ou maiusculo, ou entao não passar todo o conteudo, e mesmo assim encontrar o que eu quero

    // expect(getByText('maitte')).toBeInTheDocument(); testando o teste para ver se ele esta funcionando, aqui ele da falso, e o teste esta correto. nao esta dando falso positivo
    // expect(getByText(/carReganDo/i')).toBeInTheDocument();  é sencitive, não importa se esta em maiuscula ou minuscula, e nao é necessario colocar a frase exatamente como esta
  });
  it('Exibe o primeiro filme', async () => {
    // forma 1
    // const { getByText, getAllByRole, getByTestId,getAllBytext } = render(<App/>);

    //forma 2 - assim usamos o screen, e não precisamos distruturar
    render(<App/>);

    // Função retirada da documentação do RTL, estou aprendendo a usar
    // https://testing-library.com/docs/react-testing-library/cheatsheet

    //Obs: nesse projeto nos precisamos usar uma função asincrona para esperar o carregando sair datela. Usaremos o waitForElemntToBeRemoved.
    await waitForElementToBeRemoved(() =>
      // Não distruturando no render nos passamos so o screen e o metodo que queremos usar
      //scrim é a forma mais nova de fazer
      screen.getByText(/carregando/i), 
      { timeout: 3000 },
    );

    expect(screen.getByText('Kingsglaive')).toBeInTheDocument();
    expect(screen.getByText('Final Fantasy')).toBeInTheDocument();
    expect(screen.getByText('Ghost In The Shell')).toBeInTheDocument();
  });

  test('Renderiza a página de detalhes ao clicar em "Ver detalhes"', async () => {
    render(<App/>);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i), 
      { timeout: 3000 },
    );

    const detailsButton = screen.getByTestId(/kingsglaiveDetails/i);
    fireEvent.click(detailsButton);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i),
      { timeout: 3000 },
    );

    expect(screen.getByText(/genre/i)).not.toBeNull();
  });
});