import { GET_QUESTIONS, ADD_QUESTION_ANSWER } from '../actions/questions';

const questionsReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION_ANSWER:
      const {authedUser, id, optionType} = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          [optionType]: {
            ...state[id][optionType],
            votes: [
              ...state[id][optionType].votes,
              authedUser,
            ],
          },
        },
      };
    default:
      return state;
  }
} 

export default questionsReducer;
