import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    openMenu: false
}


const uiStateSlice =  createSlice({
    name: 'uiState',
    initialState,
    reducers:{
        openCloseMenu: (state, action) =>{
                if(action.payload){
                    state.openMenu = false
                    return
                }

            state.openMenu = !state.openMenu
        }
    }
})


export default uiStateSlice.reducer
export const { openCloseMenu} = uiStateSlice.actions