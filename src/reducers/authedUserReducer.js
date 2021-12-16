import { SET_AUTHED_USER } from "../actions/authedUser";

function authedUserReducer(state=null, action){
  switch (action.type) {
    case SET_AUTHED_USER:
      return  action.id
    default:
      return state;
  }
}

export default authedUserReducer;
