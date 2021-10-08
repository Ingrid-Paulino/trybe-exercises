import categories from '../data'; // inportei o data completo
import { SELECT_MOVIE } from '../action';

const INITIAL_STATE = {
  //estou pegando o primeiro filme da lista - (data)
  selectedCategory: categories[0].name,
  selectedMovie: categories[0].movies[0],
  // categories: categories ,
  categories,
};

function movieReducer(state = INITIAL_STATE, action) {
  //swith varia de acordo com o action.type
  switch (action.type) {
    // case 'SELECT_MOVIE': //colocamos o nome da nossa action - o type dele
    case SELECT_MOVIE : // importamos do action o SELECT_MOVIE 
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
        selectedMovie: action.payload.selectedMovie,
      };
    default:
      return state;
  }
}

export default movieReducer;