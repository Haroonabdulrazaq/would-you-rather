import React, { Component } from 'react';
import {AiOutlineLogout} from 'react-icons/ai';
import {connect} from 'react-redux';
import Question from './Question';
import {removeUser} from '../../actions/authedUser';

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
    handleLogout=()=>{
      this.props.dispatch(removeUser(null))
    }
  render() {
    if(this.props.users ===null ) {
      return <p>Loading...</p>
    }

    const {tab, currentTab} = this.state
    let myTab = [];
    if(tab) {
      myTab = this.props.unAnsweredId
    }else {
      myTab = this.props.answersId
    }
    // console.log(this.props.currentUser);
    return (
      <main className='main-wrapper'>
        <div className='wrapper'>
          <div className='side-bar'>
            <div className='sidebar-top'>
              <div className='profile-pic' style={{
                backgroundImage: `url(${this.props.currentUser.avatarURL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundClip: 'padding-box',
              }}></div>
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
            <div className='sidebar-bottom'>
             <p> <AiOutlineLogout title='Logout' className='logout-icon' onClick={this.handleLogout}/></p>
              <p style={{
                display: 'block',
                fontSize:'17px'
            }}onClick={this.handleLogout} >Logout</p>
            </div>
          </div>
          <div className='content'>
            <h2 className='current-tab'>{currentTab}</h2>
            {myTab.length >=1? <ul>
              {myTab.map((id)=>(
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
            </ul>: <h2 className='center-text'>All Questions have been answered</h2>}
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
