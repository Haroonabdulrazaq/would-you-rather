import { GET_USERS, ADD_USER_ANSWER } from '../actions/usersAction';

const usersReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_USERS:
      // console.log('I am the user Action in userReducer', action.users);
      return {...state, ...action.users};
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
