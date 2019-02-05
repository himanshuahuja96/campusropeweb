import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_QUESTION, FETCH_QUESTIONS, DELETE_QUESTION } from './constants';
import feathersClient, { supportService } from './../../feathers';
import {
  submitQuestionError,
  submitQuestionDone,
  storeQuestions,
} from './actions';
import { openSnack } from '../Home/actions';

function* submitQuestionSaga({ payload }) {
  try {
    const response = yield supportService.create(payload);
    yield put(openSnack('success', 'Successfully submitted your question.'));
    yield put(submitQuestionDone());
  } catch (e) {
    yield put(openSnack('error', 'Unable to submit your question.'));
  }
}

function* fetchQuestionsSaga() {
  try {
    const data = yield supportService.find();
    yield put(storeQuestions(data));
  } catch (e) {
    yield put(openSnack('error', 'Unable to fetch questions.'));
  }
}

function* deleteQuestionSaga({ id }) {
  console.log('deleteQuestionSaga');
  try {
    const data = yield supportService.remove(id);
    yield put(openSnack('success', 'Successfully Deleted!'));
  } catch (e) {
    yield put(openSnack('error', 'Unable to delete question.'));
  }
}

// Individual exports for testing
export default function* supportSaga() {
  yield [
    takeLatest(SUBMIT_QUESTION, submitQuestionSaga),
    takeLatest(FETCH_QUESTIONS, fetchQuestionsSaga),
    takeLatest(DELETE_QUESTION, deleteQuestionSaga),
  ];
}
