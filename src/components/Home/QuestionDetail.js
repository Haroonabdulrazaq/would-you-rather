import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { GrCheckbox } from 'react-icons/gr';
import  { IoCheckmarkCircle } from 'react-icons/io5';
import { addQuestionAnswer } from '../../actions/questions';
import { addUserAnswer } from '../../actions/usersAction';
import './questionDetail.scss';

class QuestionDetail extends Component {
  state = {
    optionOneClicked: false,
    optionTwoClicked: false,
  }

  componentDidMount(){
    // const { optionOneClicked, optionTwoClicked } = this.state
    const {question, user,  answersId} = this.props;
    const { id } = question;
    
    const checkAnswered = answersId.find((aid)=>  id === aid);  // Checking if the option has been answered

    if(checkAnswered){  // changing the UI accordingly
      if(user.answers[checkAnswered] === 'optionOne'){
        this.setState(()=>({
          optionOneClicked: true
        }))
      } else if(user.answers[checkAnswered] === 'optionTwo'){
        this.setState(()=>({
          optionTwoClicked: true
        }))
      }
    }
  }

  handleAnswer =({authedUser, id, answer , optionType })=>{
    console.log('I have been clicked');
    console.log(authedUser, id, answer);
    this.props.dispatch(addQuestionAnswer(authedUser, answer, id, optionType))
    this.props.dispatch(addUserAnswer(authedUser, id, optionType))
    if(optionType === 'optionOne') {
      this.setState(()=>({
        optionOneClicked: true
      }))
    } else {
      this.setState(()=>({
        optionTwoClicked: true
      }))
    }
  }
  render() {
    const { optionOneClicked, optionTwoClicked } = this.state
    const {question, user, users, authedUser} = this.props;
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
              <button disabled={optionTwoClicked || optionOneClicked} className='option optionA' onClick={()=> this.handleAnswer({authedUser, id, answer: optionOne.text, optionType: 'optionOne'})}>
                {optionOneClicked? <IoCheckmarkCircle  className='radio-button ans'/> :<GrCheckbox className='radio-button'/>}
                {optionOne.text}
              </button>
              <span className='you-invert'>OR</span>
              <button disabled={optionTwoClicked || optionOneClicked} className='option optionB' onClick={()=> this.handleAnswer({authedUser, id, answer: optionTwo.text, optionType: 'optionTwo'})}>
               {optionTwoClicked ? <IoCheckmarkCircle className='radio-button ans'/> : <GrCheckbox className='radio-button '/>}
                {optionTwo.text}
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}, props){
  const { id } = props.match.params
  const question = questions[id]
  const user = users[authedUser]
  const answersId = Object.keys(users[authedUser]['answers'])
  return {
    id,
    authedUser,
    users,
    user,
    questions,
    question,
    answersId,
    // question: question? formatQuestion(question[optionOne.text]): null,
  }
}

export default  connect(mapStateToProps)(QuestionDetail);

// BiRadioCircle
// IoCheckmarkCircle

