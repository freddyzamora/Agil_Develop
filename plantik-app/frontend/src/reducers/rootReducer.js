import { combineReducers } from 'redux';
import { authReducer } from './authReducer';


export const rootReducer = combineReducers({
    // TODO: AuthReducer
    auth: authReducer
})