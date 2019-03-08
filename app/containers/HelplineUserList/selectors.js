import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the helplineUserList state domain
 */

const selectHelplineUserListDomain = state =>
  state.get('helplineUserList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HelplineUserList
 */

const makeSelectHelplineUserList = () =>
  createSelector(selectHelplineUserListDomain, substate => substate.toJS());

export default makeSelectHelplineUserList;
export { selectHelplineUserListDomain };
