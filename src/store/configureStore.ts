import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './reducers';
import logger from 'redux-logger';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development'
  });

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;

const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export { wrapper };
export type { AppStore, RootState };
