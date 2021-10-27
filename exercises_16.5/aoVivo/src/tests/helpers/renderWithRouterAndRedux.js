  //tests/helpers/renderWithRouterAndRedux.js
// router e redux junto - dessa forma não é necessario ficar em aruivos separados, fizemos um marge
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../reducers';

const renderWithRouterAndRedux = (
  component,
  //initialState, store, initialEntries, history  - no caso deles não receber nada eles recebem o metodo default - resposta ja definida.
  {
    initialState = {},
    store = createStore(rootReducers, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {}, // se nn tiver nada a cima, é definido como objeto vazio
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
  store,
});

export default renderWithRouterAndRedux;