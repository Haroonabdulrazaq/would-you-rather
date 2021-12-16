import React, { Component } from 'react';
import './question.scss';

class Question extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className='question-wrapper'>
        {id}
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
        <p>kghholi</p>
      </div>
    )
  }
}

export default Question;
