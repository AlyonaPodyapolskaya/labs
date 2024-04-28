import { combineReducers } from 'redux';
import counterReducer from './reducers';
import userReducer from './reducersUser';

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default rootReducer;
