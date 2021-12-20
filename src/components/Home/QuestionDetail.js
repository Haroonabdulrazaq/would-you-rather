import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { GrCheckbox } from 'react-icons/gr';
import  { IoCheckmarkCircle } from 'react-icons/io5';
import { addQuestionAnswer } from '../../actions/questions';
import './questionDetail.scss';

class QuestionDetail extends Component {
  state = {
    optionOneClicked: false,
    optionTwoClicked: false,
  }

  handleAnswer =({authedUser, id, answer , optionType })=>{
    console.log('I have been clicked');
    console.log(authedUser, id, answer);
    this.props.dispatch(addQuestionAnswer(authedUser, answer, id, optionType))
  }
  render() {
    const{ optionOneClicked, optionTwoClicked } = this.state
    const {question, user, users, authedUser} = this.props;
    // console.log('Hello Question...', question);
    const { id, author, optionOne, optionTwo} = question;

    return (
      <div className='detail-wrapper'>
        <section className='question-box'>
          <div className='question-head'>
            Would <span className='you-invert'>you</span>Rather?
          </div>
          <div className='question-content'>
            <div className='author-info'>
              <div className='avatar' style={{
                backgroundImage: `url(${users[author].avatarURL})`,
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
              <div className='option optionA' onClick={()=> this.handleAnswer({authedUser, id, answer: optionTwo.text, optionType: 'optionOne'})}>
                {optionOneClicked? <IoCheckmarkCircle  className='radio-button ans'/> :<GrCheckbox className='radio-button'/>}
                {optionOne.text}
              </div>
              <span className='you-invert'>OR</span>
              <div className='option optionB' onClick={()=> this.handleAnswer({authedUser, id, answer: optionTwo.text, optionType: 'optionTwo'})}>
               {optionTwoClicked ? <IoCheckmarkCircle className='radio-button ans'/> : <GrCheckbox className='radio-button '/>}
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
    authedUser,
    users,
    user,
    questions,
    question,
    // question: question? formatQuestion(question[optionOne.text]): null,
  }
}

export default  connect(mapStateToProps)(QuestionDetail);

// BiRadioCircle
// IoCheckmarkCircle

