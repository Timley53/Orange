import React, { useState } from 'react'
import CreateCategory from './createCategory'
import CategoryGrids from './CategoryGrids'
import ExpenseFileter from './ExpenseFileter'
import { MdAdd, MdHistory, MdAddTask, MdAddToQueue, MdOutlineCategory, MdViewSidebar, MdSlideshow, MdArchive, MdSwipeRight } from 'react-icons/md'
import ExpHistory from './HistoryLayouts/ExpHistory'
import AddNew from './AddNew/AddNew'
import { GiSideswipe } from 'react-icons/gi'
import { AiOutlineSliders } from 'react-icons/ai'

function Expenses() {
    // console.log(window.location);

    const [showHistory, setShowHistory] = useState(false)
    const [showAdd, setShowAdd] = useState(true)
    const [showCategory, setShowCategory] = useState(false)

    const displayHisory = ()=>{
      setShowHistory(true)
      setShowAdd(false)
      setShowCategory(false)
    }

    const displayAdd = ()=>{
      setShowAdd(true)
      setShowHistory(false)
      setShowCategory(false)
      console.log('here');
    }

    function displayCategory (){
      setShowCategory(true)
      setShowHistory(false)
      setShowAdd(false)
    }


    const [showSide, setShowSide] = useState(false)
  return (
    <div className=' sm:p-0 md:mt-[4rem] sm:mt-[3.3rem] flex'>

    <main className={`w-[75%] sm:w-[100%] md:w-[72%] flex flex-col items-center justify-center overflow-edit`}>

      <div className=" my-2 justify-between w-[100%] p-2 hidden sm:flex">

      {/* <p className='text-start m-1 w-[20%] '>Expense</p>  */}

<button className=' text-orange-600 text-xl' onClick={()=>setShowSide(!showSide)} >
<MdViewSidebar/>
 </button>



   
      </div>

    

    {showHistory && <ExpHistory/>}
    {showCategory && <CategoryGrids/>}
    {showAdd && <AddNew/>}
    {/* {showCategory && <CategoryGrids/>} */}

    </main>
  






  <aside className={`${showSide ? 'w-[20%] sm:block md:w-[25%] sm:w-[80%]  ':'w-[20%] sm:hidden md:w-[25%] ' }    border-2  border-red-500 h-[99%]      sm:h-[90%] fixed right-0` }>

  <button onClick={()=>setShowSide(!showSide)}>
    close it
  </button>
  </aside>








    <div className="fixed right-4  bottom-4 flex flex-col sm:flex-row sm:w-[100%] sm:right-0 sm:bottom-0 sm:p-1  sm:bg-gray-300 sm:bg-opacity-70 backdrop-blur-md  sm:justify-evenly">


    <article className='flex items-center flex-row-reverse' >


      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full  sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md' onClick={()=> displayAdd()}>
        <MdAdd/>
      </button>

      <span className='text-xs sm:hidden'>
      Add New
      </span>
      </article>

      
    <article className='flex items-center flex-row-reverse' >
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md' 
      onClick={()=> displayHisory()}
      >
        <MdHistory/>
      </button>

      <span className='text-xs sm:hidden'>
      History
      </span>
      </article>

    {/* <article className='flex items-center flex-row-reverse'>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full   sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md'>
        <MdAdd/>
      </button>

      <span className='text-xs sm:hidden'>
      change
      </span>
      </article> */}

    <article className='flex items-center flex-row-reverse'>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full  sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md' onClick={()=> displayCategory()}>
        <MdOutlineCategory/>
      </button>

      <span className='text-xs sm:hidden'>
      Category
      </span>
      </article>


    {/* <article className='flex items-center'>
      <span className='text-sm'>
      Categories
      </span>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full'>
        <MdAdd/>
      </button>
      </article>
    <article className='flex items-center'>
      <span className='text-sm'>
      Categories
      </span>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full'>
        <MdAdd/>
      </button>
      </article>
    <article className='flex items-center'>
      <span className='text-sm'>
      Categories
      </span>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full'>
        <MdAdd/>
      </button>
      </article> */}

    </div>

    </div>
  )
}
//block w-[30%] md:w-[80%] sm:z-10 sm:block block sm:hidden
export default Expenses