/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import ls from 'local-storage';
import {
  userDrawerMenus,
  adminDrawerMenus,
  adminHomeMenus,
  userHomeMenus,
} from './menus';
import { USER_TOKEN } from '../../constants/local_storage_constants';

const selectLoggedUserDomain = state => state.loggedUser;

const makeSelectLoggedUser = () =>
  createSelector(selectLoggedUserDomain, loggedUser => loggedUser.user);

const makeSelectLoggedUserMenus = () =>
  createSelector(selectLoggedUserDomain, loggedUserState => {
    if (loggedUserState.user && loggedUserState.user.role === 'user') {
      return userDrawerMenus;
    }
    if (loggedUserState.user && loggedUserState.user.role === 'admin') {
      return adminDrawerMenus;
    }
    return [];
  });

const makeSelectLoggedUserHomeMenus = () =>
  createSelector(selectLoggedUserDomain, loggedUserState => {
    if (loggedUserState.user && loggedUserState.user.role === 'user') {
      return userHomeMenus;
    }
    if (loggedUserState.user && loggedUserState.user.role === 'admin') {
      return adminHomeMenus;
    }
    return userHomeMenus;
  });

const makeSelectIsLoggedUser = userId =>
  createSelector(
    selectLoggedUserDomain,
    loggedUser => loggedUser.user._id === userId,
  );

const isLoggedIn = () => ls.get(USER_TOKEN);

export default makeSelectLoggedUser;
export {
  selectLoggedUserDomain,
  makeSelectLoggedUser,
  makeSelectLoggedUserMenus,
  makeSelectLoggedUserHomeMenus,
  makeSelectIsLoggedUser,
  isLoggedIn,
};
