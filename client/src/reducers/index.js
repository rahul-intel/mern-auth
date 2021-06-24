import { combineReducers } from 'redux';

//import posts from './posts';
import auth from './auth';
import  error from './errors';
export const reducers = combineReducers({ auth, error });