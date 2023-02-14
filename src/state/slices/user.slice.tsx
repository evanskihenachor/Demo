import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models/user.types';

export interface UserReducerState {
  users: User[];
}

const initialState: UserReducerState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsersAction(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const {setUsersAction} = userSlice.actions;
export default userSlice.reducer;
