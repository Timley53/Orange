import React, { useState } from 'react'
import {auth} from '../../resources/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function TestLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) =>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,email, password).then((userCredentials)=>{
            console.log(userCredentials);
        }).catch(err => console.log(err.message))
        

    }

  return (
    <div>

        <form onSubmit={submitForm}>
            <h1>log in</h1>
            <input type="email" placeholder='enter ur email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='enter password'  />

            <button type="submit">submit</button>
        </form>
        
    </div>
  )
}

export default TestLogin