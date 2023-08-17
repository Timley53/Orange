import React from 'react'
import { RxCross2 } from 'react-icons/rx'

function ExpenseSideBar({setShowSide,showSide}) {
  return (
    <div className='w-[100%]'>

    <div className="w-full my-1 flex items-end justify-end ">

    <button onClick={()=>setShowSide(!showSide)} className='text-xl p-1 hidden sm:flex'>    
        <RxCross2/> 
      </button>

    </div>

      <div className=" p-1 text-sm flex flex-col">
<span className='my-1'>
Overall Budget: 
</span>

<span className='my-1'>
  Total Expenditure:
</span>

<span className='my-1'>
  Overall Highest Expense: 
</span>


      </div>


      {/* <div className="w-[80%] sm:text-sm mx-auto border-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, cum. Officia facere quae nobis rem, suscipit doloribus eveniet deserunt non explicabo cumque sunt, quibusdam quod perspiciatis 
      </div> */}


        
    </div>
  )
}

export default ExpenseSideBar