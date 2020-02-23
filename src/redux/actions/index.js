import { actionTypes } from "../constants/actionTypes";

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
