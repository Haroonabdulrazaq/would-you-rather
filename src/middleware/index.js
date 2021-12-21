import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';


const middleware = applyMiddleware(
  thunk,
  logger
)
export default middleware;
