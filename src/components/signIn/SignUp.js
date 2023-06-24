import React, { useEffect, useState } from 'react'
import { login } from '../../store/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import userStore from '../../store/userStore'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {MdVisibility} from 'react-icons/md'
import {BsCheck2Square} from 'react-icons/bs'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../resources/firebase'
import { useNavigate } from 'react-router-dom'




function SignUp() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [failedCharacterPassword, setfailedCharacterPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [signedUp, setSignedUp] = useState(false)

 const [showSpinner, setShowSPinner] = useState(false)
  const loggedIn = useSelector((state)=> state.user.loggedIn)
  const [logIn, setLogIn] = useState(loggedIn)
 
 

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const signUpAsyncFxn = async function(){
    try{

      const userCredentials = await createUserWithEmailAndPassword(auth,email, password)

      setShowSPinner(false)
      console.log(userCredentials);
     dispatch(login({loggedIn:true}))
      setLogIn(loggedIn);

      onAuthStateChanged(auth,(user)=>{
        if(user){
          navigate('/dashboard')

        }
      })
      
      
    }catch(err){
 console.log(err.message)
      setfailedCharacterPassword(err.message.split(' ').slice(1).join(' '))
      setShowSPinner(false)
    }

  }
  
  console.log(loggedIn)


  const submitForm = (e) =>{
    e.preventDefault()

    setShowSPinner(!showSpinner)
    signUpAsyncFxn()


  
  }


  return (

<>

{
  signedUp && <div className="w-[60] text-center m-auto  my-20">

  <button className='text-orange-600 text-2xl my-5'>
    <BsCheck2Square/>
  </button>

  <h3>Account Successfully Created</h3>
  <p>You can now sign in</p>

  </div> ||
  
  !signedUp && ( <form action="" method="post" className='p-3 w-[60%] mx-auto justify-center text-lg flex flex-col  my-3 rounded md:w-[90%] border-2'
  onSubmit={submitForm}
  >

    


<label htmlFor="email" className='my-4 '>
<h3>Email:</h3>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder='@mail.com'
className='border-4 border-orange-200 w-[90%] text-sm rounded md:w-full'
type="email" name="email" id="mail" required />
</label>


      <label htmlFor="password" className='my-3 relative '>
          <h3>Password:</h3>

          <input type={`${showPassword ? 'text': 'password'}`}
           value={password} 
           onChange={(e)=>setPassword(e.target.value)}

           onFocus={()=> setfailedCharacterPassword('')}
           className={`border-4 ${failedCharacterPassword ? 'border-red-600': ''} border-orange-200 text-sm w-[90%]  rounded md:w-full md:py-1`} required/>
           

           <span className='absolute right-0 md:right-3 text-xl bottom-0 md:bottom-1 md:text-2xl cursor-pointer'
           onClick={()=> setShowPassword(!showPassword)}
           >
           {!showPassword && <MdVisibility/> || showPassword && <AiFillEyeInvisible/> }
           </span>
     
        { <small>  <br /> {failedCharacterPassword}
           </small>}
      </label>





<button className=' my-5 mx-auto bg-orange-400 p-3  flex items-center px-10 rounded-md hover:bg-transparent hover:border-2 border-orange-500 transition-all'
onSubmit={submitForm}
>
  Sign Up
{
  showSpinner &&
 <span className='spinner w-[20px] h-[20px] border-dashed border-4 mx-1 border-black   rounded-full' id='spinner'></span>
 }
 </button>



  </form>)

}


</>

 
  )
}

export default SignUp