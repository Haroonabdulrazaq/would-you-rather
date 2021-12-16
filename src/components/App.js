import React from 'react';
import { connect } from 'react-redux';
// import Home from './Home/Home';
import Login from './Login/Login';
import './App.scss';
import { handleInitialData } from '../actions';

class App extends React.Component {
  componentDidMount(){
    this.props.handleInitialData();
    console.log('This is a props', this.props);
  }
  render(){
    console.log('This is second props',this.props);
    return (
      <div className="App">
        {/* <Home questionId= {this.props.questionId}/> */}
        <Login />
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('My State', state);
  const {users, questions} = state;
  return {
    users,
    questionId: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
