import React from 'react'
import { MdAdd } from "react-icons/md"
import {AiOutlineAppstoreAdd } from 'react-icons/ai'


function CreateCategory() {
  return (
    <div className='flex w-[98%]  justify-between items-center my-1'>

    <div className='text-sm'>
      Categories
    </div>

    <button className='flex items-center bg-orange-500 p-1 rounded-md text-xs text-white hover:bg-transparent hover:text-black transition-all'>

  <AiOutlineAppstoreAdd className='text-2xl'/>
   </button>

  </div>
)
}

export default CreateCategory