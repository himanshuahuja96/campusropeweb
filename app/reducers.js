/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import loggedUserReducer from './store/loggeduser/reducer';
import constantsReducer from './store/constants/reducer';
import helplineReducer from './store/helpline/reducer';
import ngoReducer from './store/ngo/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    loggedUser: loggedUserReducer,
    constants: constantsReducer,
    helpline: helplineReducer,
    ngo: ngoReducer,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
