// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

  //forma1
  //cria a store mocando-a para os testes
  // const createMockStore = () => (
  //   createStore(combineReducers({ reducer }), applyMiddleware(thunk))
  // );
  
  //aqui provemos essa store para o nosso component
  //no lugar do 2° component eu poderia escrever um fixo como <App />, mas nn ficaria dinamoco
  // const renderWithRedux = (component) => {
  //   const mockStore = createMockStore();
  //   return { ...render(<Provider store={ mockStore }>{component}</Provider>), mockStore};
  // };


  //Forma 2 toda a explicação
  //forma mais elaborada/sufisticada de usar o renderWithRedux
  //podemos passar um estado inicial para a nossa store como 2° parametro
  // const createMockStore = (initialState) => (
  //   createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
  // );
  
  // //o estado inicial é um objeto que cegue a mesma strutura do redux e que nos fornece um estado inicial
  // // const renderWithRedux = (component, initialState) // convem passar o initialState dentro de um objeto. sendo assim o segundo parametro é um objeto que recebe uma chave initialState e uma outra chave que passamos é a store

  // //caso eu nn passe nada para o meu initialState e para a store, ela recebera esse valor default que eu defini
  // const renderWithRedux = (
  //   component,
  //   { initialState = {}, store = createMockStore(initialState) } = {},//caso eu nn passe obj nenhum como segundo parametro, eu coloco como se ele foce um objeto vazio
  //   ) => {
  //   //Ao inves de eu passar a store como na linha 49 eu tiro essa linha e ja uso-a na store na linha 47 de forma default
  //   // const mockStore = createMockStore(initialState);// podemos passar o nosso estado inicial aqui tbm

  //   //como nn vamos usar a mockStore, podemos passar diretamente a store
  //   // return { ...render(<Provider store={ mockStore }>{component}</Provider>), mockStore};

  //   return { ...render(<Provider store={ store }>{component}</Provider>), store};
  // };

  // forma 2 sem as explicaçoes
  const createMockStore = (initialState) => (
    createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
  );
  
  const renderWithRedux = (
    component,
    { initialState = {}, store = createMockStore(initialState) } = {},
    ) => {
    
    return { ...render(<Provider store={ store }>{component}</Provider>), store};
  };

export default renderWithRedux;



/*
quando chamamos a funçaõ nos nosssos testes nos chamamos assim:
  1° parametro é o component
  2° parametro é um objeto
    - podemos definir dentro , um estado inicia que tera as informaçoes que quisermos.
    - temos tbm o store que vai recebe a minnhaStoreCustomizada. 

      - renderWithRedux(<App />, { initialState: {name: 'ingrid', email: 'lalalalal'}, store: minhaStoreCustomizada } )

*/