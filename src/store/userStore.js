import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import uiStateReducer from './ui/uiStateSlice'
import userDataReducer from './user/userDataSlice'
import storage from "redux-persist/lib/storage"
import userQueriesReducer from "./user/userQueries";
import {persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key:"root",
    version: 1,
    storage
}


const reducer= combineReducers({
    user: userReducer,
    uiState: uiStateReducer,
    userData: userDataReducer,
    userQueries: userQueriesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const userStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})


export default userStore