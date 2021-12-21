// import { saveQuestionAnswer } from '../utils/api';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


export function getAllQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function addQuestionAnswer(authedUser, answer, id, optionType) {
  return {
    type: ADD_QUESTION_ANSWER,
    payload: {authedUser, answer, id, optionType},
  }
}
