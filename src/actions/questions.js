import { saveQuestionAnswer } from '../utils/api';
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

// export function handleSaveQuestionAnswer(answer, id, optionType){
//   return (dispatch, getState) =>{
//     const { authedUser } = getState();

//     dispatch(addQuestionAnswer(authedUser, answer, id, optionType))

//     return saveQuestionAnswer({
//       authedUser,
//       qid: id,
//       answer
//     }).then((result)=>{
//       console.log('I am the result in questionsAction', result);
//       dispatch(addQuestionAnswer(result))
//     })
//   }
// }