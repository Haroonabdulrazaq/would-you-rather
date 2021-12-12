export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getAllQuestions(questions){
  return {
    type: GET_QUESTIONS,
    questions,
  }
}
