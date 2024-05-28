import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { initialWsState } from './wsReducerModel';

const wsSlice = createSlice({
    name: 'wsReducer',
    initialState: initialWsState,
    reducers: {
        setIsConnected: (state, action: PayloadAction<boolean>) => {
            state.isConnected = action.payload;
        },
    },
});

export const { setIsConnected } = wsSlice.actions;

export const getIsConnected = (store: RootState) => store.wsReducer.isConnected;

export default wsSlice.reducer;
