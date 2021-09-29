import React from 'react';
import renderWithRouter from './util/renderWithRouter';
import { fireEvent } from '@testing-library/react';
// import App from './App';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('Verifica se, após a renderização, aparece a página inicial', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/);
  expect(home).toBeInTheDocument();
});

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Sobre/i));

    //testando a rota depois de clicar no botao
    //forma 1
    // const pathname = history.location.pathname;
    //forma 2
    const { pathname } = history.location; //aqui tenho a rota

    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/'); //isso aqui é equivalente a digitar alguma coisa na url e dar enter
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  //   A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.

  // Por último, vamos mostrar como testar um componente separadamente:

  it('deve renderizar o componente About (apenas componente)', () => {
    //E necessario importar o component about
      // import App, { About } from './App';
    const { getByText } = renderWithRouter(<About />); //podemos usar com qualquer componente
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
})




