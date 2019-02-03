/*
 *
 * Support reducer
 *
 */

import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_ERROR,
  SUBMIT_QUESTION_DONE,
} from './constants';

export const initialState = {
  callInProgress: false,
  error: null,
};

function supportReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_QUESTION:
      return { ...state, callInProgress: true, error: null };
    case SUBMIT_QUESTION_ERROR:
      return { ...state, callInProgress: false, error: action.errorMsg };
    case SUBMIT_QUESTION_DONE:
      return { ...state, callInProgress: false };
    default:
      return state;
  }
}

export default supportReducer;
