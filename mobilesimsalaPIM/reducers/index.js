import { combineReducers } from 'redux';
import addReducer from './addAndListReducer.js';
import HeaderReducer from './HeaderReducer.js';

export default combineReducers({
  addReducer: addReducer,
  HeaderReducer: HeaderReducer,
});
