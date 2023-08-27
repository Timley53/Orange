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

export const getDocument = createAsyncThunk('userData/getCollection', async (params, thunkAPI)=>{

    const { docID } = params


    try{

        // const collectionRef = collection(database, 'users')
        // const docRef = doc(collectionRef, docID)

        const docRef = doc(database, 'users', docID)


        const getDocResponse = await getDoc(docRef)

        let userData

        if(getDocResponse.exists()){

            // console.log(getDocResponse.data())

            userData = {
                data: getDocResponse.data(),
                DocumentId: docID,
            }


        } else{
            throw new Error('Data does not exist')
        }
        
        
        
        // getDocResponse.forEach((doc)=>{
            //     userData =  {
                //         Data: doc.data(),
                //         DocumentId: doc.id
                
                //     }
                
                //     // console.log(userData);
                
                // })
                return {...userData}

    }catch(err){
        console.log(err)

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
        console.log(err.massage)
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

        builder.addCase(getDocument.pending, (state, action)=>{
            state.loading = true
            state.error = null

    });

    builder.addCase(getDocument.fulfilled, (state, action)=>{
        state.loading = false
        state.userData = action.payload.data
        state.DocumentId = action.payload.DocumentId
          
    });
    
    builder.addCase(getDocument.rejected, (state, action)=>{
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
