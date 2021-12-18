export const formatQuestion=(users, question)=> {
  const {id, author, timestamp, optionOne, optionTwo } = question;
  return {
    id,
    author: users[author].name,
    

  }
}