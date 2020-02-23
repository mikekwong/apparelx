import { actionTypes } from "../constants/actionTypes";

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});
