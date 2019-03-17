import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_USER_PROFILE, SAVE_USER_PROFILE } from './constants';
import { setUserProfile } from './actions';
import featherClient, { userService } from '../../feathers';

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(FETCH_USER_PROFILE, fetchUserProfile),
    takeLatest(SAVE_USER_PROFILE, saveUserProfileSaga),
  ];
}

export function* fetchUserProfile({ payload }) {
  const { userId } = payload;
  try {
    yield featherClient.authenticate();
    const userProfile = yield userService.get(userId);
    yield put(setUserProfile(userProfile));
  } catch (e) {
    throw e;
  }
}
/*eslint-disable*/
export function* saveUserProfileSaga(action) {
  const { payload, actions } = action;
  try {
    yield featherClient.authenticate();
    const userProfile = yield userService.patch(payload._id, payload);
    yield put(setUserProfile(userProfile));
    actions.setSubmitting(false);
  } catch (e) {
    actions.setSubmitting(false);
  }
}
