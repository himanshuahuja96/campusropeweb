import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoVerificationView state domain
 */

const selectNgoVerificationViewDomain = state =>
  state.get('ngoVerificationView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoVerificationView
 */

const makeSelectNgoVerificationView = () =>
  createSelector(selectNgoVerificationViewDomain, substate => substate.toJS());

export default makeSelectNgoVerificationView;
export { selectNgoVerificationViewDomain };
