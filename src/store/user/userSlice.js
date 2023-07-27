import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, database } from '../../resources/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Defaultuser } from "../../resources/Data";

const initialState = {
    loading: false,
    loggedIn: false,
    users: {},
    uId:'',
    error: null,
    signedIn: false,
    fullname:'',
    email:'',
    
    userFileCreation:{
        loading:false,
        userFileCreated:false,
    }

}


export const logIn = createAsyncThunk('user/login',
 async (params, thunkAPI)=>{

    const {email, password} = params

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password ) 


        // console.log(userCredentials);
      
       return userCredentials.user.uid


    
    }catch(err){
        throw new Error(err.message)
    }

})

export const userSignUp = createAsyncThunk('user/signUp', 
    async (params, thunkAPI)=>{

        const {email, password, fullname} = params

        
        try{
         const userCredentials = await createUserWithEmailAndPassword(auth, email,password)

         return {
             uId:userCredentials.user.uid, fullname, email 
        }

            

        }catch(err){
            throw new Error(err.message)
        }

    }
)


export const createUserDatabase = createAsyncThunk('user/createDatabase', async (params, thunkAPI)=>{

    //the id passed as params will be taken from store, once the uuser signs up the userId will be stored then we can access it to create a user specific collectiton data, rhe fullname will be put as a property in  the default documents..
    const { Id, fullname,email } = params

    try{

        const collectionRef = collection(database,Id )

        const docRef = await addDoc(collectionRef, {
            ...Defaultuser,
             UserDetails:{
                 ...Defaultuser.UserDetails,
                name: fullname,
                email: email,
             },


        } )
console.log(docRef.id);
        return docRef.id

    }catch(err){
        throw new Error(err.message)

    }

}) 

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
    },

    extraReducers: (builder)=>{

        builder.addCase(logIn.pending, (state, action)=>{
                state.loading = true
                state.error = null

        });

        builder.addCase(logIn.fulfilled, (state, action)=>{
                state.loading = false
                state.loggedIn = true
                state.uId = action.payload
                state.error = null
        });
        
        builder.addCase(logIn.rejected, (state, action)=>{
                state.loading = false
                state.error = action.error.message.split(' ').slice(1).join(' ')
        });
        

        // sign up cases
        builder.addCase(userSignUp.pending, (state, action)=>{
                state.loading = true
                state.error = null

        });

        builder.addCase(userSignUp.fulfilled, (state, action)=>{
                state.loading = false
                state.signedIn = true
                state.uId = action.payload.uId
                state.fullname = action.payload.fullname
                state.email = action.payload.email
                state.error = null
        });
        
        builder.addCase(userSignUp.rejected, (state, action)=>{
                state.loading = false
                state.error = action.error.message.split(' ').slice(1).join(' ')
        });


        // creating documents for users

        builder.addCase(createUserDatabase.pending, (state, action)=>{
            state.userFileCreation.loading = true
            state.error = null

    });

    builder.addCase(createUserDatabase.fulfilled, (state, action)=>{
        state.userFileCreation.loading = false
        state.userFileCreation.userFileCreated = true
          
    });
    
    builder.addCase(createUserDatabase.rejected, (state, action)=>{
        state.userFileCreation.loading = false
            state.error = action.error.message.split(' ').slice(1).join(' ')
    });


    }
})

export default userSlice.reducer
export const { updateUserDetails, login} = userSlice.actions
