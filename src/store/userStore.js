import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import uiStateReducer from './ui/uiStateSlice'
import userDataReducer from './user/userDataSlice'



const userStore = configureStore({
    reducer:{
        user: userReducer,
        uiState: uiStateReducer,
        userData: userDataReducer,
    }
})


export default userStore