import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home/Home';
import Question from './Home/Question';
import Login from './Login/Login';
import './App.scss';
import { handleInitialData } from '../actions';

class App extends React.Component {
  componentDidMount(){
    this.props.handleInitialData();
  }
  render(){
    return (
      <Router className="App"> 
       {!this.props.authedUser? <Login />
       : 
       <Routes>
        <Route path='/' exact={true} element={<Home/>}/>
        <Route path='/question/:id' exact={true} element={<Question/>}/>
       </Routes>
       
       }
      </Router>
    );
  }
}

function mapStateToProps(state){
  const {users, authedUser} = state;
  return {
    userId: Object.keys(users)
    .sort((a,b) => users[b].timestamp - users[a].timestamp),
    authedUser,
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
