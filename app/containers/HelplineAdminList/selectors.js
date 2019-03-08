import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the helplineAdminList state domain
 */

const selectHelplineAdminListDomain = state =>
  state.get('helplineAdminList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HelplineAdminList
 */

const makeSelectHelplineAdminList = () =>
  createSelector(selectHelplineAdminListDomain, substate => substate.toJS());

export default makeSelectHelplineAdminList;
export { selectHelplineAdminListDomain };
