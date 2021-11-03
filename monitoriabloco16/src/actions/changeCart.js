//action/changeCart
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

export const removeCart = (product) => ({
  type: REMOVE_CART,
  payload: product,
});

