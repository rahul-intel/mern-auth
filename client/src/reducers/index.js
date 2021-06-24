import { combineReducers } from 'redux';

import auth from './auth';
import error from './errors';
import posts from './posts';
export const reducers = combineReducers({ auth, error, posts });