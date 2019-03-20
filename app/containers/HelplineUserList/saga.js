import { put, takeLatest } from 'redux-saga/effects';
import featherClient, { helplineService } from 'feathers';
import { FETCH_HELPLINES } from './constants';
import { setHelplines } from './actions';
import { startFetchingData, stopFetchingData } from '../HomePage/actions';

export function* fetchHelplinesSaga({ state }) {
  try {
    yield put(startFetchingData());
    yield put(setHelplines([]));
    yield featherClient.authenticate();
    const query = {
      operatingState: state,
    };
    const helplines = yield helplineService.find({ query });
    yield put(setHelplines(helplines.data));
    yield put(stopFetchingData());
  } catch (e) {
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [takeLatest(FETCH_HELPLINES, fetchHelplinesSaga)];
}
