import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../root.reducer';
import {UserReducerState} from '../slices/user.slice';

export const selectUserState = createSelector(
  (state: RootState) => state.user,
  (userState: UserReducerState) => {
    return userState;
  },
);
