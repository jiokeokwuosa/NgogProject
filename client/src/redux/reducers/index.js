import {combineReducers} from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    register: registrationReducer, 
    error: errorReducer
});