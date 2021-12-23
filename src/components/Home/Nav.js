import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import {AiOutlineMenu} from 'react-icons/ai';
import './nav.scss';


class Nav extends Component {
  render(){
    // console.log('I am a prop in Nav', this.props)this.props.,authedUser
    return (
      <div className='nav'>
        <h3 className="navbar-brand"><Link to='/'>Would <span className='you'>you</span>Rather?</Link></h3>
        <div className="navbar-menu">
          <Link to='/leaderboard'>Leaderboard</Link>
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
