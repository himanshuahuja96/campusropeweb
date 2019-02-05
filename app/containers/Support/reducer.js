/*
 *
 * Support reducer
 *
 */

import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_ERROR,
  SUBMIT_QUESTION_DONE,
  STORE_QUESTIONS,
  DELETE_QUESTION,
} from './constants';

export const initialState = {
  callInProgress: false,
  error: null,
  questions: [],
};

function supportReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_QUESTION:
      return { ...state, callInProgress: true, error: null };
    case SUBMIT_QUESTION_ERROR:
      return { ...state, callInProgress: false, error: action.errorMsg };
    case SUBMIT_QUESTION_DONE:
      return { ...state, callInProgress: false };
    case STORE_QUESTIONS:
      return { ...state, questions: action.payload };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(q => q._id !== action.id),
      };

    default:
      return state;
  }
}

export default supportReducer;
