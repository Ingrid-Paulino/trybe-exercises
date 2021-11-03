//a store é unica, sempre tem so um arquivo unico
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; //nn preciso escrever index, posso colocar so o nome da pasta, pois ja entende que eu quero o arquivo index, isso acontece so com o index

//Colocamos o thunk dentro do composeWithDevtools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;