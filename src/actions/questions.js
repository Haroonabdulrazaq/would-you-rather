export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getAllQuestions = (questions)=>{
  return {
    type: GET_QUESTIONS,
    questions,
  }
}
