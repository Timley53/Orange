import React from 'react'

function BalanceGrid() {
  return (
    <div className='w-[70%] md:w-[65%] sm:w-[100%]  p-2 balance-grid grid'>

    <article className='bg-balance-monthly  h-36  text-white shadow-md rounded-md p-3 flex flex-col'>

      <article className='flex flex-col'>

      <small className='text-xs'>Monthly Budget</small>

      <span className=' text-base'>$10,399.00</span>

      </article>


<article className='flex flex-col mt-5'>

    <small>Available</small>
    <span className='text-base'>$4,000</span>

</article>





    </article>

    <article className='bg-highest-expense  h-36  rounded-md p-3 flex flex-col text-white'>

      <small className=''>Total Expense</small>
      <small className='text-xs'>This month</small>

<article className='flex flex-col mt-12'>
  
<span className=' text-base'>$10,399.00</span>


</article>
    </article>



    <article className='overall-per-category  h-36  rounded-md p-3  text-white flex flex-col'>
      <h2 className='text-sm mb-6'>Overall Highest Expense per Category</h2>

      <span className=' text-[1.2rem]'>$10,399.00</span>

    </article>

    <article className='last text-white  h-36  rounded-md p-3'>
      <h2 className='text-sm mb-5'>Monthly Balance</h2>

      <span className=' text-[1.2rem]'>$10,399.00</span>
    </article>

  </div>
  )
}

export default BalanceGrid