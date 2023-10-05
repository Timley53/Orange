import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { calcOverallBudget, calcOverallHigestExp, formatNumber, overallTotalExp } from '../../../resources/utils'



function ExpenseSideBar({setShowSide,showSide}) {



  const allExpense = useSelector((state)=> state.userData?.userData.expenses.categories)

  // console.log(allExpense)

  


  return (
    <div className='w-[100%] relative h-[100%]'>

    <div className="w-full my-1 flex items-end justify-end ">

    <button  onClick={()=>setShowSide(!showSide)}  className='text-xl p-1 py-4 hidden sm:flex'>    
        <RxCross2/> 
      </button>

    </div>

      <div className=" p-1 text-sm flex flex-col">


<div className='my-1 w-[100%] flex flex-col items-center'>
<h2>Overall Budget</h2> 

<h1>{formatNumber(calcOverallBudget(allExpense))}</h1>

</div>


<div className='my-1 w-[100%] flex flex-col items-center'>
<h2>Total Expenditure</h2> 

<h1>{formatNumber(Math.abs(overallTotalExp(allExpense)))}</h1>

</div>



<span className='my-1'>
  


</span>

<span className='my-1'>
   


  
<div className='my-1 w-[100%] flex flex-col items-center'>
<h2>Overall Highest Expense</h2> 

<h1>{formatNumber(calcOverallHigestExp(allExpense))}</h1>

</div>
</span>


      </div>


<article className='flex flex-col items-end justify-end absolute left-2 bottom-8 p-1 w-[100%] pr-8'>


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