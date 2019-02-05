import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_ERROR,
  SUBMIT_QUESTION_DONE,
  FETCH_QUESTIONS,
  STORE_QUESTIONS,
  DELETE_QUESTION,
} from './constants';

export const submitQuestion = payload => {
  console.log('action submitQuestion', payload);
  return {
    type: SUBMIT_QUESTION,
    payload,
  };
};

export const submitQuestionError = message => ({
  type: SUBMIT_QUESTION_ERROR,
  message,
});

export const submitQuestionDone = () => ({
  type: SUBMIT_QUESTION_DONE,
});

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const storeQuestions = payload => ({
  type: STORE_QUESTIONS,
  payload,
});

export const deleteQuestion = id => ({
  type: DELETE_QUESTION,
  id,
});
