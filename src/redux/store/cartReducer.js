import { actionTypes } from "../constants/actionTypes";

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
