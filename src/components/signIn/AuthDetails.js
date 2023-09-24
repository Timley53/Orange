import React from 'react'
import { checkDatabase, logOut } from '../../store/user/userSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../resources/firebase'
import { useEffect } from 'react'

function AuthDetails() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const uId = useSelector((state)=> state.user.uId)
  const checkDatabaseLoading = useSelector((state)=> state.user.checkDatabaseLoading)
  const isDatabase = useSelector((state)=> state.user.isDatabase)
  const isAuthorized = useSelector((state)=> state.user.loggedIn)
  
    
  const signOutUser = () =>{
    dispatch(logOut())
    signOut(auth).then(()=> console.log('sign out ')).catch(err => console.log(err.message))
    navigate('/')
 localStorage.removeItem('persist:root')

  }

  

 

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(!user || !isAuthorized ){
        navigate('/signin')        
      }

      if(user && isAuthorized ){
        dispatch(checkDatabase({
          uId
        }))

      }
      })
        

  },[])


  useEffect(()=>{
   
    onAuthStateChanged(auth,(user)=>{
if(user && isAuthorized && isDatabase ){
  navigate('/dashboard')        
}
})

  },[isDatabase])



  return (
    <div>AuthDetails
      <button onClick={()=>signOutUser()
      } className='p-2 bg-orange-400 hover:bg-orange-200'>
  Log Out
      </button>
    </div>
  )
}

export default AuthDetails