import React, { useEffect, useState } from 'react'
import { addUserId, login, setUserCreated } from '../../store/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import userStore from '../../store/userStore'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {MdVisibility} from 'react-icons/md'
import {BsCheck2Square} from 'react-icons/bs'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../resources/firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import {userSignUp} from '../../store/user/userSlice'

import {createUserDatabase} from '../../store/user/userSlice'


function SignUp() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')

  const [showPassword, setShowPassword] = useState(false)


 const loggedIn = useSelector((state)=> state.user.loggedIn)
 const isLoading = useSelector((state)=> state.user.loading)
 const signedIn = useSelector((state)=>state.user.signedIn)
 const error = useSelector((state)=>state.user.error)
 const id = useSelector((state)=> state.user.uId)
 const userEmail = useSelector((state)=> state.user.email)
 const userFullname = useSelector((state)=> state.user.fullname)
 const userCreated = useSelector((state)=> state.user.userCreated)

 
 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  /*

  const signUpAsyncFxn = async function(){
    try{

      const userCredentials = await createUserWithEmailAndPassword(auth,email, password)


      setShowSPinner(false)
      console.log(userCredentials);
      console.log(email, password);
     dispatch(login({loggedIn:true}))
     
      setLogIn(loggedIn);

     
      
    }catch(err){
 console.log(err.message)
      setfailedCharacterPassword(err.message.split(' ').slice(1).join(' '))
      setShowSPinner(false)
    }

  }
  
  */
  // console.log(loggedIn)

  ///if signed in reroute
  // useEffect(()=>{
  
  
  //   if(signedIn && userFileCreated){
  //     onAuthStateChanged(auth,(user)=>{
  //       if(user){
  //         dispatch(addUserId(user.uid))
  //         navigate('/dashboard')
  
  //       }
  //     })
  //   }

  // }, [signedIn, userFileCreated])

  /////////================

 
        // onAuthStateChanged(auth,(user)=>{
        //   if(user){
        //       console.log(user)
        //   }
        // })
      

        onAuthStateChanged(auth,(user)=>{
          if(user){
            console.log(user)
  
          }
        })
        
  const submitForm = (e) =>{
    e.preventDefault()

    // setShowSPinner(!showSpinner)
    // signUpAsyncFxn()
    dispatch(userSignUp({email, password, fullname}))


  
  }

  return (

<>

{
  (userCreated && <div className="w-[60] text-center m-auto flex flex-col  items-center my-20">

  <button className='text-orange-600 text-2xl my-5'>
    <BsCheck2Square/>
  </button>

  <h3>Account Successfully Created</h3>
    <p className='text-sm my-2'>Goto login page</p>

    

<div className='w-[60%] self-center my-4 md:w-[80%] flex justify-center items-center'>
    <small className='text-sm'>
        Have an account? <NavLink to={'/signin'} className='inline underline'
        onClick={()=>{
            dispatch(setUserCreated())
          }}>
               <span className='text-orange-500  text-sm mr-2'>
               </span>
                Sign in 
                </NavLink>   
    </small>
    </div>

  </div> ) || 
  
 (!userCreated && <form action="" method="post" className='p-3 w-[350px] mx-auto justify-center text-lg flex flex-col  my-3 rounded sm:w-[90%] '
  onSubmit={submitForm}
  >
      <div className='w-[50%] p-1 self-center text-center my-2'>
    <p className='my-3'>Sign Up</p>
    </div>
    
<label htmlFor="fullname">
            <h3 className='text-sm mt-4'>
              Name
            </h3>
            <input type="text" placeholder='Fullname'  className='border-2 border-orange-200 p-1 w-[90%] text-sm rounded md:w-full'
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            />
           </label>



<label htmlFor="email" className='my-4 '>
<h4 className='text-sm'>Email</h4>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder='@mail.com'
className='border-2 border-orange-200 p-1 w-[90%] text-sm rounded md:w-full'
type="email" name="email" id="mail" required />
</label>


      <label htmlFor="password" className='relative '>
          <h3 className='text-sm'>Password</h3>


          <div className="flex w-[100%] border-2  border-orange-200 items-center p-1 rounded-md ">


          <input type={`${showPassword ? 'text': 'password'}`}
           value={password} 
           onChange={(e)=>setPassword(e.target.value)}

          //  onFocus={()=> setfailedCharacterPassword('')}
           className={`focus-within:outline-none border-none text-sm w-[90%] bg-transparent px-1 rounded  md:p-1`} required/>
           

           <span className=' text-center w-[10%] flex items-center text-xl bottom-0  md:text-2xl cursor-pointer'
           onClick={()=> setShowPassword(!showPassword)}
           >
           {!showPassword && <MdVisibility/> || showPassword && <AiFillEyeInvisible/> }
           </span>

          </div>

     
      </label>
      <small className='text-xs'> 
           Password must be longer than 6 character
           </small>

         





<button className=' my-5 mx-auto bg-orange-400 p-2  flex items-center px-8 rounded-md hover:bg-transparent hover:border-2 border-orange-500 text-base transition-all'
onSubmit={submitForm}
>
  Sign Up
{
  isLoading &&
 <span className='spinner w-[20px] h-[20px] border-dashed border-4 mx-1 border-black   rounded-full' id='spinner'></span>
 }
 </button>


<small>
{error}
</small>



<div className='w-[60%] self-center my-4 md:w-[80%] flex justify-center items-center'>
    <small className='text-sm'>
        Have an account? <NavLink to={'/signin'} className='inline underline'
        onClick={()=>{
            dispatch(setUserCreated())
          }}>
               <span className='text-orange-500  text-sm mr-2'>
               </span>
                Sign in 
                </NavLink>   
    </small>
    </div>
  </form>)

}


</>

 
  )
}

export default SignUp