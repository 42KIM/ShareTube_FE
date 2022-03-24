import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { IChannel, ISubsFull } from '@/types';
import { subscriptionApi } from '@/apis';

const initialState = {
  totalSubscriptions: 0,
  channelDetails: [] as IChannel[]
};

const getSubscriptions = createAsyncThunk(
  'subscription/getSubscriptions',
  async () => {
    const response = await subscriptionApi.getFullSubscriptions();
    return response;
  }
);

const slice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    // Hydrate action?
    [HYDRATE]: () => {}
  },
  extraReducers: {
    [getSubscriptions.fulfilled.type]: (
      state,
      action: PayloadAction<ISubsFull>
    ) => ({
      ...state,
      totalSubscriptions: action.payload.totalSubscriptions,
      channelDetails: action.payload.channelDetails
    })
    // [getSubscriptions.rejected.type]: () => {}
  }
});

export const subscriptionReducer = slice.reducer;

export { getSubscriptions };
