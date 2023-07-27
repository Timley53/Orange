import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../resources/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/user/userSlice'

import { Outlet } from 'react-router-dom'
import { openCloseMenu } from '../store/ui/uiStateSlice'
import { getCollection } from '../store/user/userDataSlice'
import { useWatch } from 'rc-field-form'
import HomeHeader from './Pages/Home/HomeHeader'
import { listenToUserData, updateData } from '../store/user/userDataSlice'
 import { database } from '../resources/firebase'
import { doc, onSnapshot } from 'firebase/firestore'



//================
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthorized = useSelector((state)=> state.user.loggedIn)
  const colID = useSelector(state => state.user.uId)

  const error = useSelector(state => state.userData.error)

  const docId = useSelector(state => state.userData.DocumentId)
  // const unsubscribe = useSelector(state => state.userData.unsubscribe)


  const userDataLoading = useSelector(state => state.userData.loading)
  



  const openMenu = useSelector((state)=> state.uiState.openMenu)

  // console.log(isAuthorized);

   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        navigate('/')        
      }

      if(user){
        dispatch(login({loggedIn:true}))

      }
    })

    
   },[isAuthorized])

   useEffect(()=>{
    dispatch(getCollection({colID}))
   },[])


   useEffect(()=>{

    // listenToUserData(dispatch({
    //   userId:colID,
    //   docId
    // }))


    const docRef = doc(database,colID,docId)
    
        const unsubscribe = onSnapshot(docRef,(snapShot) => {
    
            
                if(snapShot.exists()){
                    const documentData = snapShot.data()
                    console.log(documentData, 'snapshot');
                    dispatch(updateData(documentData))
                  }
                })



    return ()=> unsubscribe()   

   },[])


  //  console.log('loading', userDataLoading);
  //  console.log(userData);
  //  console.log(error);

  const signOutUser = () =>{
    signOut(auth).then(()=> console.log('sign out ')).catch(err => console.log(err.message))
  }




  return isAuthorized ? (
    <div className='w-screen h-screen flex m-0 relative'>
      {  <Menu /> }

        {/* <button onClick={()=>{
          signOutUser()
        }}>logout</button> */}

          <HomeHeader/>


        <div className={`${openMenu ? 'w-full ml-[184px]':'w-full ml-[184px] md:ml-0'}`}>

          <Outlet/>

        </div>

          {openMenu && <div className='fixed hidden md:block h-screen bg-gray-800 bg-opacity-5 backdrop-blur-md w-screen z-20' 
          
          onClick={()=>{ 
              dispatch(openCloseMenu())
              signOutUser()
            }}
          />}



    </div>
  ) : (
    <div>
      <h2>Please wait...</h2>
    </div>
  )
}

export default Dashboard