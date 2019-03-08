import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutUser state domain
 */

const selectAboutUserDomain = state => state.get('aboutUser', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutUser
 */

const makeSelectAboutUser = () =>
  createSelector(selectAboutUserDomain, substate => substate.toJS());

export default makeSelectAboutUser;
export { selectAboutUserDomain };
