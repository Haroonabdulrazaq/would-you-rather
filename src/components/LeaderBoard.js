import React, { Component } from 'react';
import { connect } from 'react-redux';
import './leaderboard.scss';

class LeaderBoard extends Component {
  render() {
    const { users, numUsers } = this.props;

    return (
      <div className='leader-board'>
        <h3 className='center-text'>Leader Board</h3>
        <div className='board-wrapper'>
          {numUsers.map((user)=>(
            <div key={user} className='board'>
              <div className='pic-name'>
                <div className='pic' style={{
                backgroundImage: `url(${users[user].avatarURL})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundClip: 'padding-box',
                width: window.innerWidth<= 768? '50%': '100%',
              }}></div>
                <div className='name'>
                  {users[user].name}
                </div>
              </div>
              <div className='question-answer'>
                <p>Authored Questions:{' '}{users[user]['questions'].length}</p>
                <p>Answered Questions:{' '}{Object.keys(users[user]['answers']).length}</p>
              </div>
              <div className='total'>
                <div className='num'>
                  {users[user]['questions'].length + Object.keys(users[user]['answers']).length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProp({users, authedUser}){
  const user = users[authedUser];
  const numUsers = Object.keys(users);
  return {
    users,
    user,
    numUsers,
  }
}


export default connect(mapStateToProp)(LeaderBoard);
