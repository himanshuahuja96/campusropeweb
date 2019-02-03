import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_ERROR,
  SUBMIT_QUESTION_DONE,
} from './constants';

export const submitQuestion = payload => ({
  type: SUBMIT_QUESTION,
  payload,
});

export const submitQuestionError = message => ({
  type: SUBMIT_QUESTION_ERROR,
  message,
});

export const submitQuestionDone = () => ({
  type: SUBMIT_QUESTION_DONE,
});
