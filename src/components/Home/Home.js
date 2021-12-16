import React, { Component } from 'react';
// import {_getQuestions} from '../../_DATA';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineLogout} from 'react-icons/ai';
import {connect} from 'react-redux';
import Question from './Question';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <main className='main-wrapper'>
        <div className='nav'>
          <h3 className="navbar-brand">Would you Rather?</h3>
          <AiOutlineMenu className='menu-icon '/>
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
                  <Question id={id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

function mapStateToProps({questions}){
  // console.log('Home mapStateToProps', questions);
  return {
    questions
  }
}


export default connect(mapStateToProps)(Home);
