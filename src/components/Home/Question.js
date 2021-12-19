import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './question.scss';

class Question extends Component {
  render() {
    // console.log('I am this dot props', this.props);
    const { id } = this.props;
    return (
     <Link to={`/question/${id}`} className='question-wrapper'>
        {id}
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
      </Link> 
    )
  }
}

function mapStateToProps({questions, users}, {id}){
  const question = questions[id]
  return {
    users,
    questions,
    id,
    question,
    // question: question? formatQuestion(question[optionOne.text]): null,
  }
}

export default connect(mapStateToProps)(Question);
