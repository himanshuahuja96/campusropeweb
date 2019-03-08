import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoView state domain
 */

const selectNgoViewDomain = state => state.get('ngoView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoView
 */

const makeSelectNgoView = () =>
  createSelector(selectNgoViewDomain, substate => substate.toJS());

export default makeSelectNgoView;
export { selectNgoViewDomain };
