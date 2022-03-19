import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { IListSummary } from '@/types';

const initialState = {
  my: {
    totalCreatedListCount: 0,
    createdList: [] as IListSummary[]
  },
  shared: {
    totalSharedListCount: 0,
    sharedLists: [] as IListSummary[]
  }
};

const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // Hydrate action?
    [HYDRATE]: () => {},
    getMyLists: (state) => {
      // 비동기로 서버로부터 마이리스트를 받아서 업데이트 한다.
      return {
        ...state
      };
    },
    getSharedLists: (state) => {
      // 서버로부터 공유 받은 리스트를 받아서 업데이트
      return {
        ...state
      };
    }
  }
});

export const listReducer = slice.reducer;

export const { getMyLists, getSharedLists } = slice.actions;
