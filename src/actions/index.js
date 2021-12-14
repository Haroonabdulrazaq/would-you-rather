import { getInitialData } from '../utils/api';
import { getAllQuestions } from './questions';
import { getUsers } from './usersAction';


export function handleInitialData(){
  return async (dispatch)=>{
    return getInitialData()
      .then(({users, questions})=>{
        dispatch(getUsers(users))
        dispatch(getAllQuestions(questions))
      })
  }
}

