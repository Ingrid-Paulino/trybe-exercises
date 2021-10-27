import { CHANGE_THEME } from '../actions/changeTheme';

const INITIAL_STATE = {
  theme: 'light', //vai iniciar com o light
};

// reducer é uma função, ele é responsavel por altera o meu state
//action fala oq fazer ja o reducer fala como/oque fazer
function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_THEME:
    //devolve um state novo, pus {} pq la no action pus em obj
    //faz copia do meu estado, garanto que tudo que tem no meu state, permanecera la
    //state.theme: action.payload , //estu acessando direito da minha chave
    //ou
    //theme: action.mode - se eu nn tivesse feito por payload
    //estou atualizando essa chave apenas - aqui eu pego o mode
    return { ...state, theme: action.payload }; 
  default:
    return state;
  }
}

export default myReducer;