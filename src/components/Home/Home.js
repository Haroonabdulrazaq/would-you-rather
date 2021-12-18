import React, { Component } from 'react';
import Nav from './Nav';
import {AiOutlineLogout} from 'react-icons/ai';
import {connect} from 'react-redux';
import Question from './Question';
import './home.scss';

class Home extends Component {
    state ={
      tab: true,
      currentTab: 'Un Answered Questions'
    }
    handleUnAnswered=()=>{
      this.setState(()=>({ 
        tab: true,
        currentTab: 'Un Answered Questions'
      }))
    }
    handleAnswered=()=>{
      this.setState(()=>({ 
        tab: false,
        currentTab: 'Answered Questions'
      }))
    }
  render() {
    // const {authedUser}  =this.props
    if(this.props.users ===null ) {
      return <p>Loading...</p>
    }
    if(this.props.users) {
      console.log('QuestionId', this.props.questionId);
      console.log('AnsweredId', this.props.answersId);
      console.log('UnAnsweredId', this.props.unAnsweredId);
    }
    const {tab, currentTab} = this.state
    let myTab = [];
    if(tab) {
      myTab = this.props.unAnsweredId
    }else {
      myTab = this.props.answersId
    }
    
    return (
      <main className='main-wrapper'>
        <Nav authedUser={this.props.authedUser}/>
        <div className='wrapper'>
          <div className='side-bar'>
            <div className='sidebar-top'>
              <div className='profile-pic'></div>
              <div className='options-btn'>
                <div className='btn Unanswered'
                  style={{borderBottom: tab? '3px solid #800080': null}} 
                  onClick={this.handleUnAnswered}>Unanswered
                </div>
                <div className='btn answered'
                  style={{borderBottom: tab? null:  '3px solid #800080'}}
                  onClick={this.handleAnswered}>Answered
                </div>
              </div>
            </div>
            <div className='sidebar-bottom'><AiOutlineLogout title='Logout' className='logout-icon'/> </div>
          </div>
          <div className='content'>
            <h2>{currentTab}</h2>
            <ul>
              {myTab.map((id)=>(
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
  const questionId= Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const unAnsweredId = questionId.filter(x => !answersId.includes(x));
  return {
    authedUser,
    users,
    currentUser, 
    questions,
    questionId,
    answersId,
    unAnsweredId,
  }
}
// authedUser: Is the id of the logged In user
// CurrentUser: Is the Object of the loggedIn User
// answersId: Is an Arrays of Id of the current user answers
// answeredQuestions: 
export default connect(mapStateToProps)(Home);
