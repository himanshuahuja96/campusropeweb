import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_QUESTION } from './constants';
import feathersClient, { supportService } from './../../feathers';
import { submitQuestionError, submitQuestionDone } from './actions';

export function* submitQuestionSaga({ payload }) {
  try {
    const response = yield supportService.create(payload);
    yield put(submitQuestionDone());
  } catch (e) {
    yield put(submitQuestionError('Unable to submit your question.'));
  }
}

// Individual exports for testing
export default function* supportSaga() {
  yield [takeLatest(SUBMIT_QUESTION, submitQuestionSaga)];
}
