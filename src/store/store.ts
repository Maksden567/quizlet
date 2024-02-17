import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slices/authSlice'
import { authApi } from "./rtk/useAuth";
import { moduleApi } from "./rtk/useModule";

const store = configureStore({
    reducer:{
        counterReducer,
        [authApi.reducerPath]: authApi.reducer,
        [moduleApi.reducerPath]: moduleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(moduleApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;