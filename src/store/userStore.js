import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'



const userStore = configureStore({
    reducer:{
        user: userReducer
    }
})


export default userStore