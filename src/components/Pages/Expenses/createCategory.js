import React from 'react'
import { MdAdd, MdExpand, MdListAlt, MdPieChartOutline } from "react-icons/md"
import {AiOutlineAppstoreAdd } from 'react-icons/ai'



function CreateCategory({showChart, setShowChart}) {



  return (
    <div className='flex w-[98%]  justify-between items-center my-1 px-2'>

    <div className='text-sm ml-3'>
      Categories
    </div>

    {/* <button className='flex items-center bg-orange-500 p-1 rounded-md text-xs text-white hover:bg-transparent hover:text-black transition-all'>

   <AiOutlineAppstoreAdd className='text-2xl'/> 

  </button> */}

  <button className='bottom-4  right-4 text-2xl text-orange-500 hover:text-black transition-all'
      
      onClick={()=>setShowChart(!showChart)}
      >
        
       {showChart &&  <MdListAlt/>  || !showChart &&  <MdPieChartOutline/>}
        </button> 

  </div>
)
}

export default CreateCategory