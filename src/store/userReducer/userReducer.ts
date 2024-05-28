import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../types/UserType';
import { RootState } from '../store';
import { initialUsersState } from './userReducerModel';

export const usersSlice = createSlice({
    name: 'usersReducer',
    initialState: initialUsersState,
    reducers: {
        setConnectedUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<UserType>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setConnectedUsers, setCurrentUser } = usersSlice.actions;

export const getConnectedUsers = (store: RootState) => store.userReducer.users;
export const getCurrentUser = (store: RootState) => store.userReducer.currentUser;

export default usersSlice.reducer;
