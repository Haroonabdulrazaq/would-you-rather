import { getInitialData } from '../api';
import { getAllQuestions } from './questions';


export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData()
    .then(({users, questions})=>{
      dispatch(getAllQuestions(questions))
    })
  }
}