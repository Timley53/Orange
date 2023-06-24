import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router-dom'
import { auth } from '../../resources/firebase'

function PrivateRoute({children}) {

    const navigate = useNavigate() 

    // const isAuthenticated = useSelector((state)=> state.user.loggedIn)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(!user){
                navigate('/')
            } 
        })

    },[])

    
    return children
    


 
}

export default PrivateRoute