/*
 *
 * HelplineUserList reducer
 *
 */
import { DEFAULT_ACTION, SET_HELPLINES } from './constants';

export const initialState = {
  helplineList: [],
};

function helplineUserListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_HELPLINES:
      return {
        ...state,
        helplineList: action.helplines,
      };
    default:
      return state;
  }
}

export default helplineUserListReducer;
