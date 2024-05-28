import { configureStore } from '@reduxjs/toolkit';

import chatReducer from './chatReducer/chatReducer';
import userReducer from './userReducer/userReducer';

export const store = configureStore({
    reducer: {
        chatReducer: chatReducer,
        userReducer: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
