import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the helplineAdd state domain
 */

const selectHelplineAddDomain = state => state.get('helplineAdd', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HelplineAdd
 */

const makeSelectHelplineAdd = () =>
  createSelector(selectHelplineAddDomain, substate => substate.toJS());

export default makeSelectHelplineAdd;
export { selectHelplineAddDomain };
