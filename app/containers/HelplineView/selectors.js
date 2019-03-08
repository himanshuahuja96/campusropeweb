import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the helplineView state domain
 */

const selectHelplineViewDomain = state =>
  state.get('helplineView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HelplineView
 */

const makeSelectHelplineView = () =>
  createSelector(selectHelplineViewDomain, substate => substate.toJS());

export default makeSelectHelplineView;
export { selectHelplineViewDomain };
