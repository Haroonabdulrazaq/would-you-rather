import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {removeUser} from '../../actions/authedUser';
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai';
import './nav.scss';


class Nav extends Component {
  state= {
    open: false
  }
  handleClick =()=>{
    this.setState((prevState)=>({
      open: !prevState.open,
    }))
  }
  handleLogout=()=>{
    this.props.dispatch(removeUser(null))
    this.handleClick()
  }
  render(){
    return (
      <div className='nav-parent'>
        <div className='nav'>
          <h3 className="navbar-brand"><Link to='/'>Would <span className='you'>you</span>Rather?</Link></h3>
          <div className="navbar-menu">
            <p className="authed-user">{this.props.authedUser? this.props.users[this.props.authedUser]['name'] : 'Welcome' }</p>
            {this.props.user?
              null
              : this.state.open?
              <AiFillCloseCircle className='menu-icon' onClick={this.handleClick}/>:
              <AiOutlineMenu className='menu-icon' onClick={this.handleClick} />
            }
          </div> 
        </div>
        {this.state.open && <div className='nav-container'>
          {this.props.authedUser? <div className='nav-wrapper'>
            <Link to='/' className='nav-link' onClick={this.handleClick}>Home</Link>
            <Link to='/add' className='nav-link' onClick={this.handleClick}>Add Question</Link>
            <Link to='/leaderboard' className='nav-link' onClick={this.handleClick}>Leaderboard</Link>
            <Link to='#' className='nav-link logout' onClick={this.handleLogout}>Log Out</Link>
          </div>: 
            <Link to='#' onClick={this.handleClick} className='nav-link logout'>Select a user to log in!</Link>
          }
        </div>}
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
