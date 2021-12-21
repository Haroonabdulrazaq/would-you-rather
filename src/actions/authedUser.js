export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

export const authedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id
  }
}
export const removeUser = (payload) => {
  return {
    type: REMOVE_AUTHED_USER,
    payload
  }
}