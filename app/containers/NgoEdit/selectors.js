import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ngoEdit state domain
 */

const selectNgoEditDomain = state => state.get('ngoEdit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NgoEdit
 */

const makeSelectNgoEdit = () =>
  createSelector(selectNgoEditDomain, substate => substate.toJS());

export default makeSelectNgoEdit;
export { selectNgoEditDomain };
