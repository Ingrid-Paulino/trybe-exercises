// Primeiro vamos criar e retornar a nossa store :
const store = Redux.createStore();

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.
const reducer = (state) => {
  return state;
  };
  
  const store = Redux.createStore(reducer);

// Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
const reducer = (state = { login: false, email: "" }) => {
  return state;
  };
  
  const store = Redux.createStore(reducer);

//Agora sim, nosso reducer está pronto! Mas o state pode ficar muito grande, e o código vai ficar "bagunçado". Então podemos reescrevê-lo. (geralmente usamos o nome INITIAL_STATE)
const ESTADO_INICIAL = {
  login: false,
  email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL) => {
  return state;
  };
  
  const store = Redux.createStore(reducer);

// Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());

//{ login: false, email: '' }

// Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action ! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action . Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store .
const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }

// Conseguimos mudar o estado da store utilizando o dispatch . Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado. Note, também, que o reducer retorna todo o estado , e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! Mas e se tivermos mais de um reducer ?


// Combinando Reducers
// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

//geralmente usamos o nome rootReducer
const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;

// Agora basta fazer a sua importação no seu store para a mágica acontecer!
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
//...

// Vamos imprimir essa store com os reducers combinados para verificar o output :
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

//Agora temos acesso a ambos reducers armazenados na store. 

//Em reducers combinados, as actions podem ser escritas normalmente, pois todos eles escutam a action e só executam a mudança quando a action.type da ação é reconhecida. Ou seja, cada action é envida para todos os reducers , independente se ele a utiliza ou não, cabendo ao switch administrar a execução da action , com base na propriedade type .

//Um detalhe importante é a forma que ocorre o acesso às informações do estado. Considerando que só existisse o meuReducer e que temos uma chave email nele, para acessar o valor dessa chave bastava utilizar state.email , já que o meuReducer era acessado diretamente. Agora, ao utilizar a combinação, é preciso especificar qual o reducer que gerencia este estado, então acessaríamos através de state.meuReducer.email . É como se cada reducer fosse uma gaveta de um arquivo (a store) e, para acessar os dados da gaveta, é preciso abri-la!

//Para ilustrar, vamos usar o subscribe junto com nossa store . No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});
//...