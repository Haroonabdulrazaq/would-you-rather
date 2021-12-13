export const GET_USERS = 'GET_USERS';

export const getUsers = (users)=> {
  return  {
    type: GET_USERS,
    users
  }
}