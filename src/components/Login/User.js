import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authedUser } from '../../actions/authedUser';
import './user.scss';

class User extends Component {
  handleLogin=(id)=> {
    this.props.dispatch(authedUser(id))
  }

  render() {
    const { user } = this.props;
    if(user === null){
      return <p>This User does not exist</p>
    }
    const {id, name} = user;
    return (
      <div className='user-wrapper' onClick={()=> this.handleLogin(id)}>
        <div className='avatar'></div>
        <div className='user-info'>
          <p>{id}</p>
          <p>{name}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}, {id}){
  const user = users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(User);
