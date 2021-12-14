import { GET_USERS } from '../actions/usersAction';

const usersReducer=(state={}, action)=> {
  switch (action.type) {
    case GET_USERS:
      // console.log('I am the user Action in userReducer', action.users);
      return {...state, ...action.users};
    default:
      return state
  }
} 

export default usersReducer;
