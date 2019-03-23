import { createSelector } from 'reselect';

/**
 * Direct selector to the aboutUser state domain
 */

const selectAboutUserDomain = state => state.aboutUser;
const selectUserProfileDomain = state => state.userProfile;

/**
 * Other specific selectors
 */

const makeSelectUserProfileInfo = () =>
  createSelector(
    selectUserProfileDomain,
    profile => profile.userProfileInfo && profile.userProfileInfo,
  );

/**
 * Default selector used by AboutUser
 */

const makeSelectAboutUser = () =>
  createSelector(selectAboutUserDomain, substate => substate.toJS());

export default makeSelectAboutUser;
export { selectAboutUserDomain, makeSelectUserProfileInfo };
