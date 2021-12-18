import React, { Component } from 'react';
import {connect} from 'react-redux';

import {AiOutlineMenu} from 'react-icons/ai';



class Nav extends Component {
  render(){
    // console.log('I am a prop in Nav', this.props)this.props.,authedUser
    return (
      <div className='nav'>
        <h3 className="navbar-brand">Would you Rather?</h3>
        <div className="navbar-menu">
          <p className="authed-user">{this.props.authedUser? this.props.users[this.props.authedUser]['name'] : 'Welcome' }</p>
          {this.props.authedUser && <AiOutlineMenu className='menu-icon'/>}
        </div>
      </div>
    )
  }
}
function mapStateToProps({authedUser, users}){
  return {
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav);
