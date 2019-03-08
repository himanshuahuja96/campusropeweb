import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoAdd state domain
 */

const selectNgoAddDomain = state => state.get('ngoAdd', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoAdd
 */

const makeSelectNgoAdd = () =>
  createSelector(selectNgoAddDomain, substate => substate.toJS());

export default makeSelectNgoAdd;
export { selectNgoAddDomain };
