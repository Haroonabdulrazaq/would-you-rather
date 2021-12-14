import React from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import './App.scss';
import { handleInitialData } from '../actions';


class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
    console.log('This is a props', this.props);
  }

  render(){
    return (
      <div className="App">
        <Home/>
        {this.props.questionId.map((id)=>(
          <li key={id}>
          {/* <Tweet id={id}/> */}
        </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({users, questions}){
  return {
    users,
    questionId: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App);
