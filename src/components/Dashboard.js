import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../resources/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login,logOut } from '../store/user/userSlice'

import { Outlet } from 'react-router-dom'
import { openCloseMenu } from '../store/ui/uiStateSlice'
import { getDocument } from '../store/user/userDataSlice'
import {updateId} from '../store/user/userQueries'
import HomeHeader from './Pages/Home/HomeHeader'
import { listenToUserData, updateData } from '../store/user/userDataSlice'
 import { database } from '../resources/firebase'
import { doc, onSnapshot } from 'firebase/firestore'
import LoadingView from './Pages/Expenses/LoadingView'



//================
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthorized = useSelector((state)=> state.user.loggedIn)
  const docID = useSelector(state => state.user.uId)

  const error = useSelector(state => state.userData.error)

  // const docId = useSelector(state => state.userData.DocumentId)
  // const unsubscribe = useSelector(state => state.userData.unsubscribe)


  

  const userDataLoading = useSelector(state => state.userData.loading)

  const queriesLoading = useSelector((state)=> state.userQueries.loading)



  const openMenu = useSelector((state)=> state.uiState.openMenu)

  // useEffect(()=>{
    
  //   dispatch(openCloseMenu({close: false}))

  // },[openMenu])


  // onAuthStateChanged(auth,(user)=>{
  //   if(!user){
  //     navigate('/')        
  //   }

  //   if(user){
  //     dispatch(login({loggedIn:true}))

  //   }
  // })
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
     if(isAuthorized){
  
       dispatch(getDocument({docID}))
       dispatch(updateId({docID}))
     }
   },[])



   ///live update effect
   useEffect(()=>{
    const docRef = doc(database,'users',docID)
    
        const unsubscribe = onSnapshot(docRef,(snapShot) => {
    
            
                if(snapShot.exists()){
                    const documentData = snapShot.data()
                    // console.log(documentData, 'snapshot');
                    dispatch(updateData(documentData))
                  }
                })



    return ()=> unsubscribe()   

   },[])


  //  console.log('loading', userDataLoading);
  //  console.log(userData);
  //  console.log(error);


  // signOutUser()



  return isAuthorized ? (
    <div className='w-screen h-screen flex m-0 relative'>


  
  
    {queriesLoading && <LoadingView/>}

  


      {  <Menu /> }

        {/* <button onClick={()=>{
          signOutUser()
        }}>logout</button> */}

          <HomeHeader/>


        <div className={`${openMenu ? 'w-full ml-[184px]':'w-full ml-[184px] md:ml-0'}`}>

          <Outlet/>

        </div>

          {openMenu && <div className='fixed hidden md:block h-screen bg-gray-800 bg-opacity-5 backdrop-blur-md w-screen z-20' 
          
          // onClick={()=>{ 
          //     dispatch(openCloseMenu())
          //     signOutUser()
          //   }}
          />}



    </div>
  ) : (
    <div>
      <h2>Please wait...</h2>
    </div>
  )
}

export default Dashboard