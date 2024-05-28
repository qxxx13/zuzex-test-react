import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { initialChatState } from './chatReducerModel';

const chatSlice = createSlice({
    name: 'chatReducer',
    initialState: initialChatState,
    reducers: {
        setChatMessages: (state, action: PayloadAction<string>) => {
            state.messages = [...state.messages, action.payload];
        },
    },
});

export const { setChatMessages } = chatSlice.actions;

export const getMessages = (store: RootState) => store.chatReducer.messages;

export default chatSlice.reducer;
