import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import Login from './Login/Login';
import './App.scss';
import { handleInitialData } from '../actions';

class App extends React.Component {
  componentDidMount(){
    this.props.handleInitialData();
    // this.props.dispatch(handleInitialData());
  }
  render(){
    console.log('This is a props', this.props);
    const { questionId, userId } = this.props;
    return (
      <div className="App">
        <Home questionId= {questionId}/>
        <Login userId={userId} />
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('My State', state);
  const {users, questions} = state;
  return {
    userId: Object.keys(users)
    .sort((a,b) => users[b].timestamp - users[a].timestamp),
    questionId: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
//