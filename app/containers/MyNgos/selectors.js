import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myNgos state domain
 */

const selectMyNgosDomain = state => state.get('myNgos', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyNgos
 */

const makeSelectMyNgos = () =>
  createSelector(selectMyNgosDomain, substate => substate.toJS());

export default makeSelectMyNgos;
export { selectMyNgosDomain };
