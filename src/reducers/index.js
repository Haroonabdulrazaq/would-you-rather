import { combineReducers } from "redux";
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});

export default rootReducer;
