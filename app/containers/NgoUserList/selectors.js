import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoUserList state domain
 */

const selectNgoUserListDomain = state => state.get('ngoUserList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoUserList
 */

const makeSelectNgoUserList = () =>
  createSelector(selectNgoUserListDomain, substate => substate.toJS());

export default makeSelectNgoUserList;
export { selectNgoUserListDomain };
