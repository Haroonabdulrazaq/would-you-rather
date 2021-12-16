import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className='login-wrapper'>
        <div className='cover'>
          <h3>Would you Rather?</h3>
        </div>
        <div className='login'></div>
      </div>
    )
  }
}

export default Login;
