import React from 'react'

function CreateCategory() {
  return (
    <div className=" flex flex-col items-center w-[80%]  sm:w-[85%]">

      <label htmlFor="" className="text-sm mt-3 w-[40%] md:w-[70%] sm:w-[90%]">
        New Budget's Title
        <br />
    <input type="text" className='w-full border-orange-500 border-2 p-1 rounded-md ' />
      </label>

    <label htmlFor="" className="text-sm mt-3 w-[40%] md:w-[70%] sm:w-[90%]">
      Budget Amount
      <br />
    <input type="number" className='w-full border-2  border-orange-500 p-1 rounded-md ' />
    </label>


  <button className='p-2 text-sm  bg-orange-500 hover:bg-orange-300 my-5 w-[40%]  md:w-[70%] rounded-md sm:w-[90%]'>Submit</button>
   
    </div>
  )
}

export default CreateCategory