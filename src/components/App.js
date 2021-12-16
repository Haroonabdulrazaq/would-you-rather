import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import Login from './Login/Login';
import './App.scss';
import { handleInitialData } from '../actions';

class App extends React.Component {
  componentDidMount(){
    this.props.handleInitialData();
  }
  render(){
    return (
      <div className="App">
        <Home />
        <Login />
      </div>
    );
  }
}

function mapStateToProps(state){
  const {users} = state;
  return {
    userId: Object.keys(users)
    .sort((a,b) => users[b].timestamp - users[a].timestamp),
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
