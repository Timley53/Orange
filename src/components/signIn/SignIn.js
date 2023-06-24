import React, { useState } from 'react'
import SignUp from './SignUp'
import {FaUserAlt} from 'react-icons/fa'
import Login from './login'
// Login

function SignIn() {



    const [sign, setSignIn] = useState(true)
    



  return ( 
    <section className='w-full flex items-center justify-center h-screen'>

        <div className="login w-[800px] h-[500px]  flex rounded-md  md:flex-col md:w-[95%] md:h-[90vh]">


            <aside className='left-aside h-full w-[30%]  grid place-items-center md:w-full md:h-[20%]'>
                <span className='text-3xl font-bold text-black m-auto '>
                    <span className='text-orange-700 italic text-4xlxl'>
                        O
                    </span>
                    range
                </span>
            </aside>



            <aside className='w-[70%] flex flex-col md:w-[100%]'>
<div className={`sign-in-tab w-[100%] flex h-10 p-1 border-2`}>

    <button 
        onClick={()=> setSignIn(true)}

    className={`w-[50%] rounded ${sign ? 'border-b-4 border-b-orange-600': '' }   font-bold`}>Sign in</button>


    <button 
    onClick={()=> setSignIn(false)}
    className={`w-[50%] rounded font-bold  ${!sign ? 'border-b-4 border-b-orange-600': '' }`}>Sign up</button>
</div>



{ sign && <Login/> || !sign && <SignUp/>}



             <button className='my-3  text-center mx-auto flex hover:underline' >
               <span className='text-orange-500 mr-2'>
               <FaUserAlt/>
               </span>
                Log in with Demo
                </button>   
                
            </aside>
        </div>

    </section>
  )
}

export default SignIn