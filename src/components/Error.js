import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './error.scss';

class Error extends Component {
  render() {
    return (
      <div className='error-wrapper'>
        <div className='error'></div>
        <div>Oops, Seems you lost your way {this.props.username}</div>
        <div>Let's get you back <Link to='/' >home</Link></div>
      </div>
    )
  }
}
function mapStateToProps({authedUser, users}) {
  const user = users[authedUser]['name']
  return {
    username: user
  }
}
export default connect(mapStateToProps)(Error);
