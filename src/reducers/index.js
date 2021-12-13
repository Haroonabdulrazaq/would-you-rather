import { combineReducers } from "redux";
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
  usersReducer,
  questionsReducer,
});

export default rootReducer;