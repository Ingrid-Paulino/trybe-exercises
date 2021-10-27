//reducers/cartReducer
import { ADD_CART, REMOVE_CART } from '../actions/changeCart';

const INITIAL_STATE = {
  listCart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CART:
    return {
      ...state,
      listCart: [...state.listCart, action.payload],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + action.payload.price,
    };
  case REMOVE_CART: {
    const listCartFiltered = state.listCart
      .filter((product) => product.id !== action.payload.id);
    return {
      ...state,
      listCart: listCartFiltered,
      totalItems: listCartFiltered.length,
      totalPrice: listCartFiltered.reduce((acc, crr) => acc + crr.price, 0),
    };
  }
  default:
    return state;
  }
};

export default cartReducer;