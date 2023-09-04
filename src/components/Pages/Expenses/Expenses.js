import React, { useState } from 'react'
import CreateCategory from './createCategory'
import CategoryGrids from './CategoryGrids'
import ExpenseFileter from './ExpenseFileter'
import { MdAdd, MdHistory, MdAddTask, MdAddToQueue, MdOutlineCategory, MdViewSidebar, MdSlideshow, MdArchive, MdSwipeRight } from 'react-icons/md'
import ExpHistory from './HistoryLayouts/ExpHistory'
import AddNew from './AddNew/AddNew'
import ExpenseSideBar from './ExpenseSideBar'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { BsPlus, BsPlusLg } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

function Expenses() {
    // console.log(window.location);

    const [showHistory, setShowHistory] = useState(true)
    const [showAdd, setShowAdd] = useState(false)
    const [showCategory, setShowCategory] = useState(false)

   


    // console.log(queriesLoading);




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



    <main className={`w-[75%] h-[90%] sm:w-[99%] md:w-[99%] md:mx-auto flex flex-col items-center justify-center overflow-edit `} >

      <div className=" my-2  w-[100%] hidden  p-2 md:flex" >




 <NavLink to={'/dashboard/expenses'}  className={"mx-1 mr-3 flex items-center border-2 border-orange-400 p-1 px-1 rounded-md text-orange-500 hover:bg-orange-400 hover:text-white transition-all"}>
          <button className=' text-xl  hover:text-white '>
            <AiOutlineHome/>
            </button>
            <span className=' sm:hidden mx-1 sm:mx-0  text-xs '>
              Home
            </span>
      </NavLink>


 <NavLink to={'addnew'}  className={"mx-2 flex items-center border-2 border-orange-400 p-1 px-1 rounded-md text-orange-500 hover:bg-orange-400 hover:text-white transition-all"}>
          <button className=' text-xl  hover:text-white '>
            <BsPlusLg/>
            </button>

            <span className=' sm:hidden mx-1 sm:mx-0  text-xs'>
              Add new
            </span>
      </NavLink>


 <NavLink to={'categories'}  className={"mx-2 flex items-center border-2 border-orange-400 p-1 px-1 rounded-md text-orange-500 hover:bg-orange-400 hover:text-white transition-all"}>
          <button className=' text-xl  hover:text-white '>
            <MdOutlineCategory/>
            </button>

            <span className='sm:hidden mx-1 sm:mx-0  text-xs'>
              Categories
            </span>
      </NavLink>


      <button className=' text-orange-600 text-2xl px-1' onClick={()=>setShowSide(!showSide)} >
<MdViewSidebar/>
 </button>


      </div>
    <section className='w-[100%] h-[100%]  '>
      
       {
  // border-red-500 border-2
}

    <Outlet/>

    </section>

   

    

  

    </main>
  






  <aside className={`${showSide ? 'w-[20%] md:block md:w-[25%] sm:w-[80%]  ':'w-[20%] md:hidden md:w-[25%] ' }  bg-gray-300 text-black    border-2  h-[100%]   sm:h-[90%] fixed right-0` } >

  {/* <button onClick={()=>setShowSide(!showSide)}>
    close it
  </button> */}

  <ExpenseSideBar setShowSide={setShowSide} showSide={showSide}/>
  </aside>








    

    </div>
  )
}
//block w-[30%] md:w-[80%] sm:z-10 sm:block block sm:hidden
export default Expenses



/*


///// to show different tabs
//  {showHistory && <ExpHistory/>}
    {showCategory && <CategoryGrids/>}
    {showAdd && <AddNew/>}
    {/* {showCategory && <CategoryGrids/>}


//////=====to switch tabs between history and categories
 <div className="fixed right-4  bottom-4 flex flex-col sm:flex-row sm:w-[100%] sm:right-0 sm:bottom-0 sm:p-1  sm:bg-gray-300 sm:bg-opacity-70 backdrop-blur-md  sm:justify-evenly">


    <article className='flex items-center flex-row-reverse' >


      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full  sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md'
       onClick={()=> displayAdd()}>
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

   

    <article className='flex items-center flex-row-reverse'>
      <button className='p-2 m-1 bg-emerald-500 text-white text-xl rounded-full  sm:text-xl sm:bg-transparent sm:border-2 border-orange-700 sm:text-orange-700 sm:rounded-md' 
      onClick={()=> displayCategory()}>
        <MdOutlineCategory/>
      </button>

      <span className='text-xs sm:hidden'>
      Category
      </span>
      </article>


  

    </div> 
*/