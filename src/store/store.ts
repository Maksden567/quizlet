import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slices/authSlice'
import { authApi } from "./rtk/useAuth";
import { moduleApi } from "./rtk/useModule";
import { wordApi } from "./rtk/useWord";

const store = configureStore({
    reducer:{
        counterReducer,
        [authApi.reducerPath]: authApi.reducer,
        [moduleApi.reducerPath]: moduleApi.reducer,
        [wordApi.reducerPath]: wordApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(moduleApi.middleware).concat(wordApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;