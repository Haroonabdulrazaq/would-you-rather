import { getInitialData } from '../api';
import { getAllQuestions } from './questions';


export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData()
    .then(({users, questions})=>{
      console.log('Questions in Index Actions', questions);
      dispatch(getAllQuestions(questions))
    })
  }
}

