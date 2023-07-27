import React from 'react'
import CreateCategory from './createCategory'
import CategoryGrids from './CategoryGrids'
import ExpenseFileter from './ExpenseFileter'

function Expenses() {
    // console.log(window.location);
  return (
    <div className='p-1 md:mt-[4rem] flex'>

    <main className='w-[75%] md:w-[74%] border-2 flex flex-col items-center justify-center overflow-edit'>
      <p className='text-start m-1 w-full '>Expense</p>
      <CreateCategory/>
      <CategoryGrids/>

<ExpenseFileter/>

    </main>
  






  <aside className='w-[20%] md:w-[23%] border-2  border-red-500 h-[99%] fixed right-0'>
  asi
  </aside>



    </div>
  )
}

export default Expenses