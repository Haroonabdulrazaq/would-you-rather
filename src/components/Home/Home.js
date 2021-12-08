import React, { Component } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineLogout} from 'react-icons/ai';
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
              <div className='option-btns'></div>
            </div>
            <div className='sidebar-bottom'><AiOutlineLogout title='Logout' className='logout-icon'/> </div>
          </div>
          <div className='content'>
            
          </div>
        </div>
      </main>
    )
  }
}

export default Home;
