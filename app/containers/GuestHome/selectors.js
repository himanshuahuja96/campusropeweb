import { createSelector } from 'reselect';

/**
 * Direct selector to the guestHome state domain
 */

const selectGuestHomeDomain = state => state.guestHome;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuestHome
 */

const makeSelectGuestHome = () =>
  createSelector(selectGuestHomeDomain, substate => substate);

export default makeSelectGuestHome;
export { selectGuestHomeDomain };
