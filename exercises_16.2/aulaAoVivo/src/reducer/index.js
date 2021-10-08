import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

//função para juntar todos reducers
const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;