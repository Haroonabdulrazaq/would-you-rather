import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import Nav from './Home/Nav';
import Home from './Home/Home';
import NewQuestion from './Home/NewQuestion';
import Error from './Error';
import QuestionDetail from './Home/QuestionDetail.js';
import Login from './Login/Login';
import './App.scss';
import { handleInitialData } from '../actions';
import LeaderBoard from './LeaderBoard';

class App extends React.Component {
  componentDidMount(){
    this.props.handleInitialData();
  }
  render(){
    return (
      <Router className="App">
        <Nav/>
        <LoadingBar color="blue"/>
       {!this.props.authedUser? <Login />
       : 
       <Switch> 
         <Route path='/' exact={true} component={Home}/>
         <Route path='/add' exact={true} component={NewQuestion}/>
         <Route path='/leaderboard' exact={true} component={LeaderBoard}/>
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
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
