import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import Cover from './Cover';
import './login.scss';

class Login extends Component {

  render() {
    return (
      <div className='login-wrapper'>
        <Cover />
        <div className='login'>
          <h2>Login As:</h2>
          <div className='user-u-list'>
            {
              this.props.userId.map((id)=>(
                <User id={id} key={id} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {users} = state;
  return {
    userId: Object.keys(users)
    .sort((a,b) => users[b].timestamp - users[a].timestamp),
  }
}

export default connect(mapStateToProps)(Login);
