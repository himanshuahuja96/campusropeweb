/*
 *
 * Home reducer
 *
 */

import {
  DEFAULT_ACTION,
  START_FETCHING_DATA,
  STOP_FETCHING_DATA,
  OPEN_SNACK,
  CLOSE_SNACK,
  SET_REDIRECT_ACTION,
} from './constants';

export const initialState = {
  isFetchingData: false,
  snackData: {
    opened: false,
    message: 'success',
    variant: 'success',
  },
  redirectAction: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case START_FETCHING_DATA:
      return { ...state, isFetchingData: true };
    case STOP_FETCHING_DATA:
      return { ...state, isFetchingData: false };
    case SET_REDIRECT_ACTION:
      return { ...state, redirectAction: action.redirectAction };
    case OPEN_SNACK:
      return {
        ...state,
        snackData: {
          ...state.snackData,
          opened: true,
          message: action.message,
          variant: action.variant,
        },
      };
    case CLOSE_SNACK:
      return { ...state, snackData: { ...state.snackData, opened: false } };
    default:
      return state;
  }
}

export default homeReducer;
