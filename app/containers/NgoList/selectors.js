import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoList state domain
 */

const selectNgoListDomain = state => state.get('ngoList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoList
 */

const makeSelectNgoList = () =>
  createSelector(selectNgoListDomain, substate => substate.toJS());

export default makeSelectNgoList;
export { selectNgoListDomain };
