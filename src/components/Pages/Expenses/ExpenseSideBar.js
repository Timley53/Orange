import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

function ExpenseSideBar({setShowSide,showSide}) {
  return (
    <div className='w-[100%] relative h-[100%]'>

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


<article className='flex flex-col items-end justify-end absolute left-2 bottom-8 p-1'>


      <NavLink to={'/dashboard/expenses'}  className={" p-2 flex items-center  text-sm hover:text-orange-600 md:hidden "}>
        Home
          <button className=' text-2xl bg-orange-500 mx-2 rounded-full p-1  text-white'>
          <AiOutlineHome/>
            </button>
      </NavLink>

      
      <NavLink to={'addnew'}  className={" p-2 flex items-center  text-sm hover:text-orange-600 md:hidden "}>
        Add new
          <button className=' text-2xl bg-orange-500 mx-2 rounded-full p-1 text-white'>
            <BsPlusLg/>
            </button>
      </NavLink>
</article>



      {/* <div className="w-[80%] sm:text-sm mx-auto border-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, cum. Officia facere quae nobis rem, suscipit doloribus eveniet deserunt non explicabo cumque sunt, quibusdam quod perspiciatis 
      </div> */}


        
    </div>
  )
}

export default ExpenseSideBar