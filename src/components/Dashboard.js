import React from 'react'
import Menu from './Menu'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../resources/firebase'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  
  const navigate = useNavigate()

    onAuthStateChanged(auth,(user)=>{
      if(!user){
        navigate('/')        
      }
    })

    

  const signOutUser = () =>{
    signOut(auth).then(()=> console.log('sign out ')).catch(err => console.log(err.message))
  }




  return (
    <div className='w-screen h-screen flex  p-1'>
        <Menu/>
        <button onClick={()=>{
          signOutUser()
        }}>logout</button>

        <div className=""></div>

    </div>
  )
}

export default Dashboard