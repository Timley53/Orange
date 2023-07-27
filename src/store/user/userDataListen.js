// import { database } from "../../resources/firebase"
// import {  doc, onSnapshot } from "firebase/firestore"
// // import {updateData,setUnsubscribe} from "./userDataSlice"
// import { createAction } from "@reduxjs/toolkit"

// export const UPDATE_DATA = 'userData/updateData'


// export const updateData = (payload)=>({
//     type: UPDATE_DATA,
//     payload
// })



// export const setUnsubscribe = createAction('userData/setUnsubscribe')



// export const listenToUserData  = (userId, docId)=> (dispatch) => {

//     dispatch(updateData(null))
//     dispatch(setUnsubscribe(null))

//     const docRef = doc(database,userId,docId)
    
//     const unsubscribe = onSnapshot(docRef,(snapShot) => {

        
//             if(snapShot.exists()){
//                 const documentData = snapShot.data()
        
//                 dispatch(updateData(documentData))
    

        
//             }
            
//             // else{
//             //     throw new Error("Data request error, reload page")
//             // }

      

            
//         })

//         dispatch(setUnsubscribe(unsubscribe))

// }