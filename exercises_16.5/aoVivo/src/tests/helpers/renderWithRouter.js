//tests/helpers/renderWithRouter.js
// Roteia as rotas
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialEntries = ['/register']) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        {component}
      </Router>,
    ),
    history,
  };
};

export default renderWithRouter;

 //initialEntries = ['/rota'] - isso é o segundo parametro do renderWithRouter, podemos passar uma rota que sera renderizado,nesse caso estabeleci uma, mas na hr do teste posso mudar colocando outra.
  