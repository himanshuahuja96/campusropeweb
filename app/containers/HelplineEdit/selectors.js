import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the helplineEdit state domain
 */

const selectHelplineEditDomain = state =>
  state.get('helplineEdit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HelplineEdit
 */

const makeSelectHelplineEdit = () =>
  createSelector(selectHelplineEditDomain, substate => substate.toJS());

export default makeSelectHelplineEdit;
export { selectHelplineEditDomain };
