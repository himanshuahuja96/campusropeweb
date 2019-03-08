/*
 *
 * Login reducer
 *
 */

import { DEFAULT_ACTION,SET_REDIRECT_TO_REFERRER } from './constants';

export const initialState = {
  redirectToReferrer:false
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_REDIRECT_TO_REFERRER:
      return {...state,redirectToReferrer:action.bool}
    default:
      return state;
  }
}

export default loginReducer;
