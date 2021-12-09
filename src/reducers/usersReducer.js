const GET_USERS = 'GET_USERS';

const usersReducers=(state={}, action)=> {
  switch (action.type) {
    case GET_USERS:
      return state.users;
    default:
      return state
  }
} 

export default usersReducers;