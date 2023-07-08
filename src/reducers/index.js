import { combineReducers } from 'redux'
import authReducer from './authReducer';
import rateReducer from './rateReducer';

export const reducers = combineReducers({authReducer, rateReducer});