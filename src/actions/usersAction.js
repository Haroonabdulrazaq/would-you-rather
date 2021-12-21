export const GET_USERS = 'GET_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export const getUsers = (users)=> {
  return  {
    type: GET_USERS,
    users
  }
}
export const addUserAnswer =(authedUser, id, optionType)=> {
  return  {
    type: ADD_USER_ANSWER,
    payload: {authedUser, id, optionType}
  }
}

export function addQuestionToUser(authedUser, qId) {
  return {
    type: ADD_QUESTION_TO_USER,
    authedUser,
    qId,
  };
}