import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { GrCheckbox } from 'react-icons/gr';
import  { IoCheckmarkCircle } from 'react-icons/io5';
import { addQuestionAnswer } from '../../actions/questions';
import { addUserAnswer } from '../../actions/usersAction';
import BackButton from '../BackButton';
import './questionDetail.scss';



class QuestionDetail extends Component {
  state = {
    optionOneClicked: false,
    optionTwoClicked: false,
    percentageOne: Math.ceil((this.props.question.optionOne.votes.length/3)*100),
    percentageTwo: Math.ceil((this.props.question.optionTwo.votes.length/3)*100),
  }

  componentDidMount(){
    const {question, user,  answersId} = this.props;
    
    const checkAnswered = answersId.find((aid)=>  question.id === aid);  // Checking if the option has been answered

    console.log('Getting votes', question.optionOne.votes.length);
    if(checkAnswered){  // changing the UI accordingly
      if(user.answers[checkAnswered] === 'optionOne'){
        this.setState(()=>({
          optionOneClicked: true,
          percentage: Math.ceil((this.props.question.optionOne.votes.length/3)*100),
        }))
      } else if(user.answers[checkAnswered] === 'optionTwo'){
        this.setState(()=>({
          optionTwoClicked: true,
          percentage: Math.ceil((this.props.question.optionTwo.votes.length/3)*100),
        }))
      }
    }
  }

  handleAnswer =({authedUser, id, answer , optionType })=>{
    const {dispatch, question} = this.props

    dispatch(addQuestionAnswer(authedUser, answer, id, optionType))
    dispatch(addUserAnswer(authedUser, id, optionType))

    if(optionType === 'optionOne') {
      console.log('Option1', question.optionOne);
      this.setState(()=>({
        optionOneClicked: true,
        percentageOne: Math.ceil(((question.optionOne.votes.length + 1)/3)*100),
      }))
    } else {
      console.log('Option2', question.optionTwo);
      this.setState(()=>({
        optionTwoClicked: true,
        percentageTwo: Math.ceil(((question.optionTwo.votes.length + 1)/3)*100),
      }))
    }
  }
  render() {
    const { optionOneClicked, optionTwoClicked, percentageOne, percentageTwo } = this.state
    const {question, user, users, authedUser} = this.props;
    const { id, author, optionOne, optionTwo} = question;


    return (
      <div className='detail-wrapper'>
        <BackButton />
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
              {optionOneClicked && <p>{percentageOne}% voted for this Option</p>}
              <button disabled={optionTwoClicked || optionOneClicked} className='option optionA' onClick={()=> this.handleAnswer({authedUser, id, answer: optionOne.text, optionType: 'optionOne'})}>
                {optionOneClicked? <IoCheckmarkCircle  className='radio-button ans'/> :<GrCheckbox className='radio-button'/>}
                {optionOne.text}
              </button>
              <span className='you-invert'>OR</span>
              <button disabled={optionTwoClicked || optionOneClicked} className='option optionB' onClick={()=> this.handleAnswer({authedUser, id, answer: optionTwo.text, optionType: 'optionTwo'})}>
               {optionTwoClicked ? <IoCheckmarkCircle className='radio-button ans'/> : <GrCheckbox className='radio-button '/>}
                {optionTwo.text}
              </button>
              {optionTwoClicked && <p>{percentageTwo}% voted for this Option</p>}

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

