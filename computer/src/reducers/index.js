import { combineReducers } from 'redux';
import AddReducer from './AddAndListReducer';
import HeaderReducer from './HeaderReducer';

export default combineReducers({
  AddReducer: AddReducer,
  HeaderReducer: HeaderReducer,
});
