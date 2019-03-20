/*
 *
 * HelplineUserList actions
 *
 */

import { DEFAULT_ACTION, FETCH_HELPLINES, SET_HELPLINES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchHelplines(state = 'All India') {
  return {
    type: FETCH_HELPLINES,
    state,
  };
}

export function setHelplines(helplines) {
  return {
    type: SET_HELPLINES,
    helplines,
  };
}
