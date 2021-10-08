//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

// {/* O BrowserRouter não funciona no testing-library por isso usamos o renderWithRouter */}
const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    //...render- é um array com todos os seletores
    // history é colocado aqui para podermos capituralo no arquivo App.test.js
    ...render(<Router history={history}>{component}</Router>), history,
  });
};

// Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.

export default renderWithRouter;