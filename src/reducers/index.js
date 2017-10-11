import { combineReducers } from 'redux';
import addReducer from './addAndListReducer';
import HeaderReducer from './HeaderReducer';

export default combineReducers({
  addReducer: addReducer,
  HeaderReducer: HeaderReducer,
});
