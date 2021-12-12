import React from 'react';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import './App.scss';
import { handleInitialData } from './actions';
// import { getAllQuestions } from './actions/questions';


class App extends React.Component {
  componentDidMount(){
    // const me =handleInitialData();
    // console.log('Me here...',me);
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
  function mapStateToProps({questions}){
    console.log('mapStateToProps in App', questions);
    return {
      questions: questions
    }
  }


export default connect(mapStateToProps)(App);
