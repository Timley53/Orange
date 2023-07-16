import React, { useState } from 'react'
import SignUp from './SignUp'
import {FaUserAlt} from 'react-icons/fa'
import Login from './login'
// Login

function SignIn() {


    const [sign, setSignIn] = useState(true)
    






    
  return ( 
    <section className='w-full flex items-center justify-center h-screen'>

        <div className="login w-[800px] h-[500px]  flex rounded-md  md:flex-col md:w-[95%] md:h-[90vh]  md:items-center ">


            <aside className='left-aside h-full w-[30%]  grid place-items-center md:w-full md:h-[15%] md:place-items-start md:text-left'>
                <span className='text-3xl font-bold text-black m-auto md:ml-4'>
                    <span className='text-orange-700 italic text-4xl'>
                        O
                    </span>
                    range
                </span>
            </aside>



            <aside className='w-[70%] flex flex-col md:w-[95%] md:mt-5'>


{/* 
<div className={`sign-in-tab w-[100%] flex h-10 p-1 border-2`}>

    <button 
        onClick={()=> setSignIn(true)}

    className={`w-[50%] rounded ${sign ? 'border-b-4 border-b-orange-600': '' }   font-bold`}>Sign in </button>


    <button  
    onClick={()=> setSignIn(false)}
    className={`w-[50%] rounded font-bold  ${!sign ? 'border-b-4 border-b-orange-600': ''}`}> Sign up</button>
</div> */}

{sign && <div className='w-[50%] self-center text-center my-2'>
    <p className='my-3'>Log in </p>
    </div>}

    {!sign && <div className='w-[50%] self-center text-center my-2'>
    <p className='my-3'>Sign up </p>
    </div> }


{ sign && <Login setSignIn={setSignIn}/> || !sign && <SignUp setSignIn={setSignIn}/>}





{sign && <div className='w-[40%] self-center my-4 md:w-[80%] text-center'>
    <small className=''>
        Not registered? <button className='inline underline' onClick={()=>setSignIn(false)} >
               <span className='text-orange-500 mr-2'>
               </span>
                Create account
                </button>   
                
    </small>
    </div>}

{!sign && <div className='w-[40%] self-center my-4 md:w-[80%] flex justify-center items-center'>
    <small className=''>
        Have an account? <button className='inline underline'
        onClick={()=>setSignIn(true)}
        >
               <span className='text-orange-500 mr-2'>
               </span>
                Sign in
                </button>   
                
    </small>
    </div>}

            
                
            </aside>
        </div>

    </section>
  )
}

export default SignIn