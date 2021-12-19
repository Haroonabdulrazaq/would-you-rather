import React, { Component } from 'react';
import {connect} from 'react-redux';
import './questionDetail.scss';

class QuestionDetail extends Component {
  render() {
    const {question, user, users} = this.props;
    // console.log('Hello Question...', question);
    const { author, optionOne, optionTwo} = question;
    return (
      <div className='detail-wrapper'>
        <section className='question-box'>
          <div className='question-head'>
            Would <span className='you-invert'>you</span>Rather?
          </div>
          <div className='question-content'>
            <div className='author-info'>
              <div className='avatar' style={{
                backgroundImage: `url(${user.avatarURL})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: window.innerWidth<= 768? 'contain': 'cover',
                backgroundClip: 'padding-box',
                width: window.innerWidth<= 768? '50%': '100%',
              }}></div>
              <div className='avatar-info'>
                <p>{users[author].name} ask?</p>
                <p>{user.name}</p>
              </div>
            </div>
            <div className='option-parent'>
              <div className='option optionA'>
                {optionOne.text}
              </div>
              <span className='you-invert'>OR</span>
              <div className='option optionB'>
                {optionTwo.text}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}, props){
  // console.log('Params...', props);
  const { id } = props.match.params
  const question = questions[id]
  const user = users[authedUser]
  return {
    id,
    users,
    user,
    questions,
    question,
    // question: question? formatQuestion(question[optionOne.text]): null,
  }
}

export default  connect(mapStateToProps)(QuestionDetail);

