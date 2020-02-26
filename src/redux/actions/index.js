import { actionTypes } from "../constants/actionTypes";

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
