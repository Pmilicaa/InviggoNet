import { createSlice } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { currentUserSaga } from "./saga";
import { CurrentUserState } from "./types";


export const initialState: CurrentUserState = {
  user: {
    id: -1,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
  }
};

const slice = createSlice({
  name: 'currentUserState',
  initialState,
  reducers: {

    changeUser(state, action) {
      state.user = action.payload;
    },

    getUser(state, action) {

    },

    logout(state, action) {
      state.user = {
        id: -1,
        email: '',
        username: '',
        firstName: '',
        lastName: '',
      }
    },

    login(state, action) {
    }
  },
});

export const { actions: currentUserAction, reducer } = slice;

export const useCurrentUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: currentUserSaga });
  return { actions: slice.actions };
};