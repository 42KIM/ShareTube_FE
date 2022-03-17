import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { ILogInPayload, IChannel } from '@/types';

const initialState = {
  accessToken: '',
  user: {
    email: '',
    id: '',
    nickname: '',
    profile: '',
    role: ''
  },
  youtubeSubs: {
    topChannels: [] as IChannel[],
    totalSubscriptions: 0
  }
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Hydrate action?
    [HYDRATE]: () => {},
    logIn: (state, action: PayloadAction<ILogInPayload>) => {
      const { accessToken, user, youtubeSubs } = action.payload;
      return {
        ...state,
        accessToken,
        user,
        youtubeSubs
      };
    }
  }
});

export const authReducer = slice.reducer;

export const { logIn } = slice.actions;
