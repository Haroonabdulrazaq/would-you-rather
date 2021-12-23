import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from './usersAction';
import { showLoading, hideLoading } from "react-redux-loading";


export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';


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

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addNewQuestion(question));
        dispatch(addQuestionToUser(authedUser, question.id))
        dispatch(hideLoading())
      })
      .catch((error)=> {
        alert("Error occured while adding new question:", error);
      });
  };
}
