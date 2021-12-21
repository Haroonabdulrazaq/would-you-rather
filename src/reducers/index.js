import { combineReducers } from "redux";
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import authedUserReducer from './authedUserReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  authedUser: authedUserReducer,
});

export default rootReducer;
