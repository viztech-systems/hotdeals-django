import { combineReducers } from 'redux';
import auth from './auth';
import { userReducer, adminReducer } from './user_type';

const rootReducer =  combineReducers({
    auth,
    userReducer,
    adminReducer
});

export default rootReducer;
