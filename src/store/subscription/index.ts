import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { IChannel } from '@/types';

const initialState = {
  totalSubscriptions: 0,
  channelDetails: [] as IChannel[]
};

const slice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    // Hydrate action?
    [HYDRATE]: () => {},
    getSubscriptions: (state) => {
      // 비동기로 서버로부터 구독 목록 리스트를 받아서 업데이트 한다.
      return {
        ...state
      };
    }
  }
});

export const subscriptionReducer = slice.reducer;

export const { getSubscriptions } = slice.actions;
