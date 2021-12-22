import { GET_USERS, ADD_USER_ANSWER, ADD_QUESTION_TO_USER } from '../actions/usersAction';

const usersReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_USERS:
      return {...state, ...action.users};
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([
            action.qId,
          ]),
        },
      };
    case ADD_USER_ANSWER:
      const {authedUser, id, optionType} = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [id]: optionType,
          },
        },
      };
    default:
      return state;
  }
} 

export default usersReducer;
