import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';


const middleware = applyMiddleware(
  thunk
)
export default middleware;
