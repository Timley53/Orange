import React, { useState, useRef } from 'react'

// function Inputfield({loginEmail, handleEmail}) {





import Form, { Field } from 'rc-field-form';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Input = ({ value = "", ...props }) => <input value={value} {...props} />;

const Demo = ({loginUser, setShowSpinner, showSpinner,errorMessage}) => {
  // const [showSpinner, setShowSpinner] = useState(false)
    const isLoading = useSelector((state)=> state.user.loading)
    const error = useSelector((state)=> state.user.error)
  const [showPassword, setShowPassword] = useState(false)

  


  return (
    <Form
    className='w-[350px] sm:w-[90%] mx-auto my-3 flex flex-col items-center  p-3  '
      onFinish={(values) => {
        
        loginUser(values)
        console.log("Finish:", values);
      }}
    >
         <div className='w-[50%] p-1 self-center text-center my-2'>
    <p className='my-3'>Log in</p>
    </div>

      <Field name="email" 
      className='my-3 mt-5 m-auto w-[90%] border-red-900 border-2 md:w-full'
      >
        <Input placeholder="Email" 
         className='text-sm  p-1 w-[90%] py-2 rounded md:w-full border-orange-200 border-2'
        type='email'  required/>
      </Field>


        <article className='my-3 w-[90%] relative md:w-full'>
      <Field name="password"  className='my-3 w-[90%] relative md:w-full'>



        <Input placeholder="Password" type={`${showPassword ? 'text': 'password'}`} 
           className={` text-sm w-[100%] rounded md:w-full  md:py-1 p-1 py-2 mt-5 border-orange-200 border-2`}
           required/>


      </Field>
      <span className='absolute right-3 md:right-3 text-2xl bottom-2 md:bottom-1 md:text-2xl cursor-pointer'
 onClick={()=> setShowPassword(!showPassword)}
 >
 {!showPassword && <MdVisibility/> || showPassword && <AiFillEyeInvisible/> }
 </span>

           </article>

      <button 
      className='flex my-5 mx-auto bg-orange-400 p-3 px-6 rounded-md hover:bg-transparent hover:border-2 border-orange-500 transition-all'
      >Sign In 
        {
  isLoading &&
 <div className='spinner  w-[20px] h-[20px] border-dashed border-4 inline mx-2 border-black rounded-full'></div>
 }
      </button>



      <small>
 {error}

</small>



<div className='w-[80%] self-center my-6 md:w-[80%] text-center'>
    <small className=''>
        Not registered? <NavLink to={'signup'} className='inline underline'>
               <span className='text-orange-500 mr-2'>
               </span>
                Create account
                </NavLink>   
                
    </small>
    </div>
    </Form>
  );
};

export default Demo;