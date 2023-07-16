import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    openMenu: false
}


const uiStateSlice =  createSlice({
    name: 'uiState',
    initialState,
    reducers:{
        openCloseMenu: (state) =>{
            state.openMenu = !state.openMenu
        }
    }
})


export default uiStateSlice.reducer
export const { openCloseMenu} = uiStateSlice.actions