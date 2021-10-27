//reducers/index
import { combineReducers } from 'redux'; // o combine é sempre desse index separado
import myReducer from './myReducer';
import shop from './shop';
import cartReducer from './cartReducer';


// na criação do store nos passamos o rootReducer
//o combineReducers é para o caso se eu tiver muitos reducers
const rootReducer = combineReducers({ myReducer, shop, cartReducer });

export default rootReducer;