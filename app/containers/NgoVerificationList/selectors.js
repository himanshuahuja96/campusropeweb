import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoVerificationList state domain
 */

const selectNgoVerificationListDomain = state =>
  state.get('ngoVerificationList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoVerificationList
 */

const makeSelectNgoVerificationList = () =>
  createSelector(selectNgoVerificationListDomain, substate => substate.toJS());

export default makeSelectNgoVerificationList;
export { selectNgoVerificationListDomain };
