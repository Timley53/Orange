import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { database } from "../../resources/firebase"
// import { setUnsubscribe, updateData } from "./userDataListen"



const initialState = {
    loading: false,
    userData:{},
    error: '',
    DocumentId: '',
    statusMessage: null,
    unsubscribe: null

}

export const getCollection = createAsyncThunk('userData/getCollection', async (params, thunkAPI)=>{

    const { colID } = params


    try{

        const collectionRef = collection(database, colID)

        const getDocResponse = await getDocs(collectionRef)

        let userData

        getDocResponse.forEach((doc)=>{
            userData =  {
                Data: doc.data(),
                DocumentId: doc.id
                
            }

            // console.log(userData);

        })
        return {...userData}

    }catch(err){
        throw new Error(err.message)
    }
})


export const addNewExpense = createAsyncThunk('userData/addNewExpense', async (params, thunkAPI)=>{

    const {newData, userId, docId} = params 
    console.log('start')

    try{
        const docRef = doc(database, userId, docId)
        const docSnapshot = await getDoc(docRef) 

        // console.log(docSnapshot)
        
        if(docSnapshot.exists()){
            const docData = docSnapshot.data()
            // console.log(docData)
            docData.UserDetails.name = newData 
              await setDoc(docRef,docData) 



        }else{
            throw new Error('Data Does not exist')

        }


        


    }catch(err){
        throw Error(err.massage)
    }




})


export const listenToUserData = createAsyncThunk('userData/listen', (params, thunkAPI)=>{

    const {userId, docId} = params


    const docRef = doc(database,userId,docId)
    
    let documentData
    const unsubscribe = onSnapshot(docRef,(snapShot) => {

        
            if(snapShot.exists()){
                 documentData = snapShot.data()
        
    

        
            }
            
            // else{
            //     throw new Error("Data request error, reload page")
            // }

      

            
        })

        return {
            documentData,
            unsubscribe
        }


})


const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateData: (state, action)=>{
                state.userData = action.payload
            }
        // setUnsubscribe: (state, action)=>{
        //     if(action.payload){
        //         state.unsubscribe = action.payload
        //     }
        // }
    },

    extraReducers: (builder)=>{

        builder.addCase(getCollection.pending, (state, action)=>{
            state.loading = true
            state.error = null

    });

    builder.addCase(getCollection.fulfilled, (state, action)=>{
        state.loading = false
        state.userData = action.payload.Data
        state.DocumentId = action.payload.DocumentId
          
    });
    
    builder.addCase(getCollection.rejected, (state, action)=>{
        state.loading = false
            state.error = action.error.message.split(' ').slice(1).join(' ')
    });



///addNewExpense


        builder.addCase(addNewExpense.pending, (state, action)=>{
            state.loading = true
            state.error = null
            state.statusMessage = ''


    });

    builder.addCase(addNewExpense.fulfilled, (state, action)=>{
        state.loading = false
       state.statusMessage = 'Success'
          
    });
    
    builder.addCase(addNewExpense.rejected, (state, action)=>{
        state.loading = false
            state.error = action.error.message.split(' ').slice(1).join(' ')
    });

    //listen 

    builder.addCase(listenToUserData, (state,action)=>{
        state.userData = action.payload.documentData
        state.unsubscribe = action.payload.unsubscribe
    })
    
/*
    listen 

    builder.addCase(updateData, (state,action)=>{
        state.userData = action.payload
    })

    //unsubsscribe
    builder.addCase(setUnsubscribe, (state,action)=>{
        state.unsubscribe = action.payload
    })


    */


    }
})



export default userDataSlice.reducer
export const {  updateData} = userDataSlice.actions
