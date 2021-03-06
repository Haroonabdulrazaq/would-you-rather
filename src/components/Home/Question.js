import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './question.scss';

class Question extends Component {
  render() {
    const { id, users, question } = this.props;
    const { author, timestamp } = question;
    return (
      <div className='question-wrapper'>
        <div className='question-author'>
          Authored by: {users[author].name}
        </div>
        <div className='question-info'>
          <div className='no-answers'>
            {`...${question.optionOne.text}`}
           {/* <p>No of Answers: {question.optionOne.votes.length + question.optionTwo.votes.length}</p> */}
            <p style={{color: '#aaa'}}>{new Date(timestamp).toLocaleTimeString()} GMT+1</p>
          </div>
          <div className='question-btn'>
            <Link to={`/question/${id}`} className='view-btn'>
              View Detail
            </Link>
          </div>
        </div>
      </div> 
    )
  }
}

function mapStateToProps({questions, users}, {id}){
  const question = questions[id]
  return {
    id,
    users,
    questions,
    question,
    // question: question? formatQuestion(question[optionOne.text]): null,
  }
}

export default connect(mapStateToProps)(Question);
