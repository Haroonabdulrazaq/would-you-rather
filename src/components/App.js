import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Home/Nav';
import Home from './Home/Home';
import NewQuestion from './Home/NewQuestion';
import Error from './Error';
import QuestionDetail from './Home/QuestionDetail.js';
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
        <Nav/>
       {!this.props.authedUser? <Login />
       : 
       <Switch> 
         <Route path='/' exact={true} component={Home}/>
         <Route path='/new-question/' exact={true} component={NewQuestion}/>
         <Route path='/question/:id' exact={true} component={QuestionDetail}/>
         <Route path='*' exact={true} component={Error}/>
       </Switch>
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
