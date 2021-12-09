const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = (questions)=>{
  return {
    type: GET_QUESTIONS,
    questions,
  }
}