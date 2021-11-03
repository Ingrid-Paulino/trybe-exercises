import { LOADING, API_ERROR, API_SUCESS } from '../actions/fetchApi';

const INITIAL_STATE = {
  loading: false,
  error: '',
  productList: [],
};

const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case API_ERROR:
    return { ...state, error: action.payload, loading: false };
  case API_SUCESS:
    return { ...state, productList: action.payload, loading: false };
  default:
    return state;
  }
};

export default shop;