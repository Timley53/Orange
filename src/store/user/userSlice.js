import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    username: '',
    password: '',
    email: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        updateUserDetails:(state, action) =>{

            const {username, password, email} = action.payload
            state.username = username
            state.password = password
            state.email = email
        },

        login: (state, action) =>{
          
                state.loggedIn = action.payload.loggedIn
        }
    }
})

export default userSlice.reducer
export const { updateUserDetails, login} = userSlice.actions