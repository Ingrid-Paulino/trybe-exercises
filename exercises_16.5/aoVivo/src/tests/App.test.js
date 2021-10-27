//tests/App.test.js
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
// import store from '../store';
// import { Provader } from 'react-redux';
// import rootReducer from "../reducers";
// import renderWithRouter from './helpers/renderWithRouter';

// import store from '../store'; //importei a store mas posso criar a minha propria store so para o test

describe('Cadastro de clientes', () => {
  test('Verifica se a tela inicial é renderizada', () => {
    //criando a propria store do testes

    //forma 1
    // const store = createStore(rootReducer, {
    //   loginReducer:{
    //     email:'x',
    //     senha: '1244354',
    //   }
    // })

    //forma 2
    // const store = createStore({...rootReducer, {
    //   loginReducer:{
    //     email:'x',
    //     senha: '1244354',
    //   }
    // }})

    //forma 3
    // const store = createStore({
    //   loginReducer:{
    //     email:'x',
    //     senha: '1244354',
    //   }
    // })
    
    //forma 4
    // const store = createStore({});

    //em caixa com todos os modelos a cima 
    // renderWithRouter(
    //   <Provider store={ store }>
    //     <App />);
    //   </Provider>


    //OBS: isso acima, posso fazer em arquivo ceparado no helpers

    renderWithRouterAndRedux(
      <App />,
    );
    const initialText = screen.getByText(/cadastro de clientes/i);
    expect(initialText).toBeInTheDocument();
  });


  test('verificar se os dados de login são salvos corretamente', () => {
    const { store } = renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/login'] },
    );

    const emailInput = screen.getByTestId('input-email');
    const passwordInput = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('btn-login');

    userEvent.type(emailInput, 'mmmaravilhoso@trybe.com');
    userEvent.type(passwordInput, '123gus');

    userEvent.click(buttonLogin);

    //espera que o email do store  seja igual ao mmmaravilhoso@trybe.com
    expect(store.getState().loginReducer.email).toBe('mmmaravilhoso@trybe.com');
    expect(store.getState().loginReducer.password).toBe('123gus');
  });


  test('Verifica se o cadastro funciona corretamente', () => {
    const { store } = renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/register'],
        initialState: {
          registerReducer: [],
          loginReducer: {
            email: 'mmmaravilhoso@trybe.com',
            password: '123gus',
          },
        },
      },
    );

    const nameInput = screen.getByTestId('input-register-nome');
    const ageInput = screen.getByTestId('input-register-idade');
    const emailInput = screen.getByTestId('input-register-email');
    const buttonRegister = screen.getByRole('button', { name: /registrar cliente/i });

    const BUSGBUNNY_AGE = '80';
    userEvent.type(nameInput, 'Perna Longa');
    userEvent.type(ageInput, BUSGBUNNY_AGE);
    userEvent.type(emailInput, 'bugsbunny@warner.com');

    userEvent.click(buttonRegister);

      //forma 1
    // expect(store.getState().registerReducer[0].name).toBe('Perna Longa');

    //forma 2
    const [client] = store.getState().registerReducer;
    expect(client.name).toBe('Perna Longa');
    expect(client.age).toBe(BUSGBUNNY_AGE);
    expect(client.email).toBe('bugsbunny@warner.com');
  });
});

