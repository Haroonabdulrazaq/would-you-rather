import React from 'react';
import ReactDOM from 'react-dom';
// import store from './store';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
