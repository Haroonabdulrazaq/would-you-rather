import { GET_QUESTIONS } from '../actions/questions';

const questionsReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_QUESTIONS:
      // console.log('Hello Im in questionsReducers', action.questions);
      return {...state, ...action.questions};
    default:
      return state;
  }
} 

export default questionsReducer;
