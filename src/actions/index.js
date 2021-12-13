import { getInitialData } from '../utils/api';
import { getAllQuestions } from './questions';
import { getUsers } from './usersAction';


export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData()
    .then(({users, questions})=>{
      console.log('Questions in Index Actions', questions);
      dispatch(getAllQuestions(questions))
      dispatch(getUsers(users))
    })
  }
}

