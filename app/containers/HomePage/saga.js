/* eslint-disable no-underscore-dangle */
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import ls from 'local-storage';
import { HOME_MOUNTED, CHANGE_ROUTE, ROUTE_TO_USER_PROFILE } from './constants';
import { fetchConstantsSaga } from '../../store/constants/saga';
import { setLoggedUser } from '../../store/loggeduser/actions';
import feathersClient, { userService } from '../../feathers';
import {
  startFetchingData,
  stopFetchingData,
  setRedirectAction,
} from './actions';
import { USER_TOKEN } from '../../constants/local_storage_constants';
import makeSelectLoggedUser from '../../store/loggeduser/selectors';

export function* homeMountedSaga() {
  yield put(startFetchingData());
  try {
    yield call(feathersClient.authenticate);
    yield call(fetchConstantsSaga);
    const payload = yield feathersClient.passport.verifyJWT(
      localStorage.getItem('feathers-jwt'),
    );
    const loggedUser = yield userService.get(payload.userId);
    feathersClient.set('user', loggedUser);
    yield put(setLoggedUser(loggedUser));
    yield put(stopFetchingData());
  } catch (e) {
    yield put(push('/login'));
  }
}

export function* changeRouteSaga({ routingAction }) {
  if (ls.get(USER_TOKEN)) {
    yield put(routingAction());
  } else {
    yield put(setRedirectAction(routingAction));
    yield put(push('/login'));
  }
}

export function* routeToUserProfileSaga({ userId }) {
  const loggedUser = yield select(makeSelectLoggedUser());
  if (userId) {
    yield put(push(`/profile/${userId}`));
  } else {
    yield put(push(`/profile/${loggedUser._id}`));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [takeLatest(HOME_MOUNTED, homeMountedSaga)];
  yield [takeLatest(CHANGE_ROUTE, changeRouteSaga)];
  yield [takeLatest(ROUTE_TO_USER_PROFILE, routeToUserProfileSaga)];
}
