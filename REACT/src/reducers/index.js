import { combineReducers } from 'redux';
import selectedReducer from './selectedReducer';

const globalReducer = combineReducers({
  selectedReducer: selectedReducer
});

export default globalReducer;