import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'
import { auth } from '../../resources/firebase'
import { login } from '../../store/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Inputfield from './Inputfield'



function Login() {
    // const [loginEmail, setLogEmail] = useState('tim')
    // const [loginPassword, setLoginPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMessage, setShowErrorMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    ()

    // const [first, setfirst] = useState(second)

    const loginUser = async (userDetails)=>{
      const {email, password} = userDetails


      try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password )
        setShowSpinner(false)
        console.log(userCredentials);
        console.log(userCredentials);
       dispatch(login({loggedIn:true}))
       
      //  onAuthStateChanged(auth,(user)=>{
      //   if(user){
      //     navigate('/dashboard')

      //   }
      // })
      
      }catch(err){

      dispatch(login({loggedIn:false}))
        setShowErrorMessage(err.message.split(' ').slice(1).join(' '))

      }


      
    }


    const submitForm = (e)=>{
      e.preventDefault()
      setShowSpinner(true)
      loginUser()


    }



    // const handlePassword = (e) =>{
    //   setLoginPassword(e.target.value)
    // }

    // const handleEmail = (e) =>{
    //   setLogEmail(e.target.value)
    // }


  return (
//     <form className='w-[70%] mx-auto my-auto flex flex-col items-center  p-3  border-2 md:w-[90%] md:my-6' onSubmit={submitForm}>

//          {/* <label htmlFor="Name" className='my-3 m-auto w-[90%] md:w-full'>
//             <h3>Email:</h3>
//             <input type="email" 
//             value={loginEmail}
//             onChange={(e)=>handleEmail(e)}

//             className='border-4 border-orange-200 p-1 w-[90%]  rounded md:w-full' required />
//         </label> */}
//         <Inputfield loginEmail={loginEmail} handleEmail={handleEmail} />



// <label htmlFor="password" className='my-3 w-[90%] relative md:w-full'>

// <h3>Password:</h3>
// <input type={`${showPassword ? 'text': 'password'}`}
//  value={loginPassword} 
//  onChange={(e)=>handlePassword(e)}

 
//  className={`border-4 border-orange-200 text-sm w-[90%] rounded md:w-full  md:py-1  `} required/>
 

//  <span className='absolute right-0 md:right-3 text-xl bottom-0 md:bottom-1 md:text-2xl cursor-pointer'
//  onClick={()=> setShowPassword(!showPassword)}
//  >
//  {!showPassword && <MdVisibility/> || showPassword && <AiFillEyeInvisible/> }
//  </span>


// </label>



// <button className='block my-5 mx-auto bg-orange-400 p-3 px-10 rounded-md hover:bg-transparent hover:border-2 border-orange-500 transition-all' >
//     Sign In
//     {
//   showSpinner &&
//  <span className='spinner w-[20px] h-[20px] border-dashed border-4 mx-1 border-black rounded-full'></span>
//  }
// </button>



// <small>
//  {errorMessage}

// </small>
//     </form>
<>
<Inputfield  loginUser={loginUser} setShowSpinner={setShowSpinner} showSpinner={showSpinner} errorMessage={errorMessage}  setShowErrorMessage={ setShowErrorMessage}/>
  </>
  )
}

export default Login