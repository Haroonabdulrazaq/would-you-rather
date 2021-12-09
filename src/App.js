import React from 'react';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import './App.scss';
import { handleInitialData } from './actions';


class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Home/>
        </header>
      </div>
    );
  }
}

export default connect()(App);
