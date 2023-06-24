import React, { useState, useRef } from 'react'

// function Inputfield({loginEmail, handleEmail}) {



//   return (
//     <>
//     <label htmlFor="email" className='my-3 m-auto w-[90%] md:w-full'>
//     <h3>Email:</h3>
// <input 
// defaultValue={loginEmail}
// onChange={(e)=>handleEmail(e)}
// type="text" 

// className='border-4 border-orange-200 p-1 w-[90%]  rounded md:w-full' required />
// </label>


// </>



//   )
// }
// export default Inputfield




import Form, { Field } from 'rc-field-form';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'

const Input = ({ value = "", ...props }) => <input value={value} {...props} />;

const Demo = ({loginUser, setShowSpinner, showSpinner,errorMessage}) => {
  // const [showSpinner, setShowSpinner] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  


  return (
    <Form
    className='w-[70%] mx-auto my-auto flex flex-col items-center  p-3   border-2 md:w-[90%] md:my-6'
      onFinish={(values) => {
        setShowSpinner(true)
        loginUser(values)
        console.log("Finish:", values);
      }}
    >
      <Field name="email" 
      className='my-3 mt-5 m-auto w-[90%] border-red-900 border-2 md:w-full'
      >
        <Input placeholder="Email" 
         className='border-4  border-orange-200 p-1 w-[90%] py-2 rounded md:w-full'
        type='email' required/>
      </Field>


        <article className='my-3 w-[90%] relative md:w-full'>
      <Field name="Password"  className='my-3 w-[90%] relative md:w-full'>



        <Input placeholder="Password" type={`${showPassword ? 'text': 'password'}`} 
           className={`border-4 border-orange-200 text-sm w-[100%] rounded md:w-full  md:py-1 p-1 py-2 mt-5`}
           required/>


      </Field>
      <span className='absolute right-3 md:right-3 text-2xl bottom-2 md:bottom-1 md:text-2xl cursor-pointer'
 onClick={()=> setShowPassword(!showPassword)}
 >
 {!showPassword && <MdVisibility/> || showPassword && <AiFillEyeInvisible/> }
 </span>

           </article>

      <button 
      className='block my-5 mx-auto bg-orange-400 p-3 px-10 rounded-md hover:bg-transparent hover:border-2 border-orange-500 transition-all'
      >Sign In 
        {
  showSpinner &&
 <div className='spinner w-[20px] h-[20px] border-dashed border-4 inline mx-2 border-black rounded-full'></div>
 }
      </button>



      <small>
 {errorMessage}

</small>
    </Form>
  );
};

export default Demo;