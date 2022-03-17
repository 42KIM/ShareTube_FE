import { combineReducers } from 'redux';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
