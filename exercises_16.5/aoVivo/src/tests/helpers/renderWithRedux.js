//tests/helpers/renderWithRedux.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../reducers';

import { render } from '@testing-library/react';


// forma 1
// function renderWithRedux(
//   component,
//   //store e initialStore vai ter esse resultado no caso de nada ser passado
//   { initialState = {}, store = createStore(rootReducers, initialState) }) {

//forma 2
// se nn vier nada o initialState vai ser {} obj vazio
// function renderWithRedux(component, { initialState = {}, store }) {
//   const store = createStore(initialState);

//   const renderReturn = render(
//     // <Provider store={ store }>
//     //   <App />
//     // </Provider>
//     <Provider store={ store }>
//       {component}
//     </Provider>
//   );

//   return {
//     ...renderReturn,
//     store,
//   };
// }

// forma 3
// export default function renderWithRedux(
//   component, 
//   //store vai ter esse resultado no caso de nada ser passado
//   { initialState = {}, store = createStore(rootReducers, initialState) }) {

  
//   return {
//     ...render(
//     // <Provider store={ store }>
//     //   <App />
//     // </Provider>
//     <Provider store={ store }>
//       {component}
//     </Provider>
//   )};

// }

export default renderWithRedux = (
  component,
  { initialState = {}, store = createStore(rootReducers, initialState) },
) => ({
  ...render(
    <Provider store={ store }>
      { component }
    </Provider>,
  ),
  store,
});

  //posso usar aqui :
//store.getState();
//store.dispatch();

  // const { store } = renderWithRedux(<App />);
  // store.getState();
  // store.dispatch();