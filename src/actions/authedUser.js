export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const authedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id
  }
}