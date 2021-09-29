// Renderização
import React from 'react';
import { render } from '@testing-library/react'; // import
import App from '../../../movie-cards-library-crud/src/App';
//verificar se algum elemento dentro do componente App possui o texto "learn react". Para rodar os testes vá para a pasta src , e execute npm test .

//forma 1
test('renders learn react link', () => {
  const meuApp = render(<App />);
  const linkElement = meuApp.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Para não ter que sempre salvar o retorno da função do render podemos realizar o object destructuring no retorno do render() . Como segue abaixo:
const { getByText } = render(<App />)

//forma 2
test('renders learn react link', () => {
  // getByText - metodo que sera usado
  const { getByText } = render(<App />);
  // faz a comparação se existe no render o texto learn react
  const linkElement = getByText(/learn react/i); // '/learn react/i' - é sensitive, e não é necessario escrever toda a fraze. 
  expect(linkElement).toBeInTheDocument();
});
