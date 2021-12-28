import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { CurrentLike } from './types';

export const initialState: CurrentLike = {
  like: {
    userId: -1,
    postId: -1,
  },
};
const slice = createSlice({
  name: 'currentLike',
  initialState,
  reducers: {
    getUserLikes(state, action) {},
    like(state, action) {},
    unlike(state, action) {},
  },
});

export const { actions: currentLike, reducer } = slice;

export const useCurrentLikeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: currentLikeSaga });
  return { actions: slice.actions };
};
