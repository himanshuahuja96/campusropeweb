/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN_FORM_SUBMIT, LOGOUT,SET_REDIRECT_TO_REFERRER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function onLoginFormSubmit(values, actions) {
  return {
    type: LOGIN_FORM_SUBMIT,
    values,
    actions,
  };
}

export function logOut() {
  return {
    type: LOGOUT,
  };
}

export function setRedirectToReferrer(bool) {
  return {
    type: SET_REDIRECT_TO_REFERRER,
    bool
  };
}