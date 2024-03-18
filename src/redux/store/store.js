import {configureStore,} from '@reduxjs/toolkit';
//auth
import authTokenReducer from '../features/authentication/authToken';
import {authSlice} from "../features/authentication/authSlice"
import arabicDate from '../features/arabicDate/arabicDate';
import { dailyTodolistSlice } from '../features/dailyTodoSlice/dailyTodoSlice';




export const store = configureStore({
    reducer: {
        //auth
        [authSlice.reducerPath]: authSlice.reducer,
        authToken: authTokenReducer,
        //date
        arabicDate: arabicDate,
        //todo
        [dailyTodolistSlice.reducerPath]:dailyTodolistSlice.reducer,

    },middleware:getDefaultMiddhleware => [
        ...getDefaultMiddhleware(),
        authSlice.middleware,
        dailyTodolistSlice.middleware
    ],
});