import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore"
import { database } from "../../resources/firebase"

const initialState = {
    loading: false,
    userData:{},
    error: '',

}

export const getCollection = createAsyncThunk('userData/getCollection', async (params, thunkAPI)=>{

    const { colID } = params



    try{

        const collectionRef = collection(database, colID)

        const getDocResponse = await getDocs(collectionRef)

        let userData

        getDocResponse.forEach((doc)=>{
            userData =  doc.data()

            console.log(userData);

        })
        return userData

    }catch(err){
        throw new Error(err.message)
    }
})


const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers:{},

    extraReducers: (builder)=>{

        builder.addCase(getCollection.pending, (state, action)=>{
            state.loading = true
            state.error = null

    });

    builder.addCase(getCollection.fulfilled, (state, action)=>{
        state.loading = false
        state.userData = action.payload
          
    });
    
    builder.addCase(getCollection.rejected, (state, action)=>{
        state.loading = false
            state.error = action.error.message.split(' ').slice(1).join(' ')
    });


    }
})



export default userDataSlice.reducer
export const { updateUserDetails, login} = userDataSlice.actions
