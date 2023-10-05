import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, database } from '../../resources/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc} from "firebase/firestore";
import { Defaultuser } from "../../resources/Data";

// let database, auth

const initialState = {
    loading: false,
    loggedIn: false,
    users: {},
    uId:'',
    error: null,
    signedIn: false,
    fullname:'',
    email:'',
    userCreated: false,
    isDatabase: false,
    checkDatabaseLoading: false,
    databaseCreated: false

}


export const logIn = createAsyncThunk('user/login',
 async (params, thunkAPI)=>{

    const {email, password} = params

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password ) 


        // console.log(userCredentials);
      
       return userCredentials.user.uid


    
    }catch(err){
        console.log(err.massage)
        throw new Error(err.message)
    }

})

export const userSignUp = createAsyncThunk('user/signUp', 
    async (params, thunkAPI)=>{

        const {email, password, fullname} = params

        let user

        try{
         const userCredentials = await createUserWithEmailAndPassword(auth, email,password)

         console.log(userCredentials)

         if(userCredentials.user){
        //    user = await signInWithEmailAndPassword(auth, email, password )

        //    console.log(user)
            //    const collectionRef = collection(database,'users' )
               const docRef = doc(database,'users',userCredentials.user.uid )
                 await setDoc(docRef, {  
                             UserDetails:{
                                 ...Defaultuser.UserDetails,
                                name: fullname,
                                email: email,
                                createdOn: new Date(),
                                databaseCreated: false
                             },
                    })


           }
                    // console.log(user, 'in user.user')

                    // // console.log(docRef, 'in docRef.user')

                    // await setDoc(docRef, {
                    //     ...Defaultuser,
                    //          UserDetails:{
                    //              ...Defaultuser.UserDetails,
                    //             name: fullname,
                    //             email: email,
                    //             createdOn: new Date()
                    //          }
                    // })


                }
         
            catch(err){
                        console.log(err.massage, '1-here')

                        throw new Error(err.message)
                    }

                }
            )

            export const checkDatabase = createAsyncThunk('user/checkDatabase', async (params, ThunkApi)=>{
                try{

                    const {uId} = params

                    const collectionRef = collection(database,'users' )

                    const docRef = doc(collectionRef,uId )
                    const userData = await getDoc
                    (docRef)

                    console.log(userData.data())

                    const userCredentials = userData.data()

                    if(!userCredentials.UserDetails.databaseCreated){
                        await setDoc(docRef, {
                            ...Defaultuser,    
                            UserDetails:{
                                ...userCredentials.UserDetails,
                                databaseCreated: true,
                            },
                        })

                        return
                    }else if(userCredentials.UserDetails.databaseCreated){
                            return
                    }

                    

                }catch(err){
                    throw new Error(err.message)  
                }
            })



export const createUserDatabase = createAsyncThunk('user/createDatabase', async (params, thunkAPI)=>{

    //the id passed as params will be taken from store, once the uuser signs up the userId will be stored then we can access it to create a user specific collectiton data, rhe fullname will be put as a property in  the default documents..
    const { Id, fullname,email } = params

    try{

        const collectionRef = collection(database,'users' )

        const docRef = doc(collectionRef,Id )

        await setDoc(docRef, {
            ...Defaultuser,
                 UserDetails:{
                     ...Defaultuser.UserDetails,
                    name: fullname,
                    email: email,
                    // createdOn: new Date()
                 }
        })

        // const docRef = await addDoc(collectionRef, {
        //     ...Defaultuser,
        //      UserDetails:{
        //          ...Defaultuser.UserDetails,
        //         name: fullname,
        //         email: email,
        //      },


        // } )
console.log(Id);
        return Id

    }catch(err){
        console.log(err.massage, '2-here')

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
        },
        logOut:(state, action)=>{
            state.loggedIn = false
            state.signedIn = false
            // state.userFileCreation.userFileCreated = false


        },
        setUserCreated: (state, action)=>{
            state.userCreated = false
        },

        addUserId: (state, action)=>{
            state.uId = action.payload
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
                // state.signedIn = true
                state.userCreated = true

                // state.userFileCreation.userFileCreated =  true
                // state.uId = action.payload.uId
                // state.fullname = action.payload.fullname
                // state.email = action.payload.email
                state.error = null
                // console.log('fufilled')
                // console.log(state.uId)
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

    

        // checking Database documents for users

        builder.addCase(checkDatabase.pending, (state, action)=>{
            state.checkDatabaseLoading = true
            state.error = null

    });

    builder.addCase(checkDatabase.fulfilled, (state, action)=>{
        state.checkDatabaseLoading = false
        state.isDatabase = true
        state = true
          
    });
    
    builder.addCase(checkDatabase.rejected, (state, action)=>{
        state.checkDatabaseLoading = false
            state.error = action.error.message.split(' ').slice(1).join(' ')
    });




    }
})

export default userSlice.reducer
export const { updateUserDetails, login, logOut, addUserId, setUserCreated} = userSlice.actions
