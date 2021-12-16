import React, { Component } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineLogout} from 'react-icons/ai';
import {connect} from 'react-redux';
import Question from './Question';
import './home.scss';

class Home extends Component {
  render() {
    // const {authedUser}  =this.props
    if(this.props.users ===null ) {
      return <p>Loading...</p>
    }
    if(this.props.user) {
      console.log('Question', this.props.questions);
      console.log('I am currently loggedIn', this.props.answeredQuestions);
    }
    // console.log('I am an Answered Question', this.props.answeredQuestions);
    return (
      <main className='main-wrapper'>
        <div className='nav'>
          <h3 className="navbar-brand">Would you Rather?</h3>
          <div className="navbar-menu">
            <p className="authed-user">{this.props.authedUser? this.props.users[this.props.authedUser]['name'] : 'Welcome' }</p>
            <AiOutlineMenu className='menu-icon'/>
          </div>
        </div>
        <div className='wrapper'>
          <div className='side-bar'>
            <div className='sidebar-top'>
              <div className='profile-pic'></div>
              <div className='options-btn'>
                <div className='btn Unanswered'>Unanswered</div>
                <div className='btn answered'>Answered</div>
              </div>
            </div>
            <div className='sidebar-bottom'><AiOutlineLogout title='Logout' className='logout-icon'/> </div>
          </div>
          <div className='content'>
            <h2>Tab Answered or Unanswered</h2>
            <ul>
              {this.props.questionId.map((id)=>(
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    )
  }
}
function mapStateToProps({authedUser, users, questions}){
  const currentUser = users[authedUser]
  const answersId= Object.keys(users[authedUser]['answers'])
  const answeredQuestions = questions[answersId]
  return {
    authedUser,
    questions,
    users,
    questionId: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    currentUser, 
    answeredQuestions,
    answersId,
  }
}
// authedUser: Is the id of the logged In user
// CurrentUser: Is the Object of the loggedIn User
// answersId: Is an Arrays of Id of the current user answers
// answeredQuestions: 
export default connect(mapStateToProps)(Home);
