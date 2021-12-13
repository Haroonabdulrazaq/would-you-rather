import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import './App.scss';
import { handleInitialData } from '../actions';
// import { getAllQuestions } from './actions/questions';


class App extends React.Component {
  componentDidMount(){
    console.log('This dot props', this.props);
    this.props.dispatch(handleInitialData());
  }
  render(){
    console.log('This is a Prop in App', this.props);
    // dispatch(getAllQuestions(this.props))
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

function mapStateToProps({users, questions}){
  console.log('mapStateToProps in App', users);
  console.log('mapStateToProps in App', questions);
  return {
    questions
  }
}

export default connect(mapStateToProps)(App);
