import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { listReducer } from './list';
import { subscriptionReducer } from './subscription';

export const rootReducer = combineReducers({
  auth: authReducer,
  subscription: subscriptionReducer,
  list: listReducer
});

export type RootState = ReturnType<typeof rootReducer>;
