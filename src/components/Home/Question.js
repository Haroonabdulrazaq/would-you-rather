import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './question.scss';

class Question extends Component {
  render() {
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

export default Question;
