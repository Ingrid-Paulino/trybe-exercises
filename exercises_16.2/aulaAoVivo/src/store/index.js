import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import {rootReducer} from '../redecer/index';
import rootReducer from '../reducer';

//importa so um reduce
// const store = createStore(reducer);


//importa varios reducers
// nessa aplicação usaremos 1 reducer so, mas sempre use rootReducer isso é um padrao
// forma 1
// const store = createStore(rootReducer)

//forma 2
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

//forma 3
const store = createStore(
  rootReducer, // junta todos os reducers
  composeWithDevTools(),
);




export default store;