import { GET_QUESTIONS } from '../actions/questions';

const questionsReducers=(state={}, action)=> {
  switch (action.type) {
    case GET_QUESTIONS:
      return state.questions;
    default:
      return state;
  }
} 

export default questionsReducers;
