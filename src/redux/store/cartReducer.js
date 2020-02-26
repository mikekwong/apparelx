import { actionTypes } from "../constants/actionTypes";
import { addItemToCart, removeItemFromCart } from "../../cartUtils/cartUtils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM:
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, action.payload]
      // };
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
