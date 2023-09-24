import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="w-full h-[100%]  border-2 flex items-center justify-center text-red-500 pt-16 ">

<div className="w-[60%] text-center flex flex-col ">
       <h1 className='m-auto'> Oops! Something went wrong</h1> 

        <NavLink to={''} className={`m-auto my-3 flex p-3 bg-orange-400 text-white  items-center flex rounded-md hover:bg-orange-300`}>
        <MdArrowBack className='mx-1'/>  Go back
        </NavLink>

</div>

    </div>
  )
}

export default ErrorPage