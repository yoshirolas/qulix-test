import { combineReducers } from 'redux';
import mailListReducer from './mailListReducer';


const appReducer = combineReducers ({
  mailListReducer,
});

export default appReducer;