import { GET_QUESTIONS, ADD_QUESTION_ANSWER, ADD_NEW_QUESTION } from '../actions/questions';

const questionsReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_NEW_QUESTION:
      return {
        ...state, 
        [action.question.id]: {...action.question}
      };
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
