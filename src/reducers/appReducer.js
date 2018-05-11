import { combineReducers } from 'redux';
import mailListReducer from './mailListReducer';
import geolocationReducer from './geolocationReducer';


const appReducer = combineReducers ({
  mailListReducer,
  geolocationReducer
});

export default appReducer;