import React, {useState} from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'
import { FaCross, FaNairaSign } from 'react-icons/fa'
import { MdCancel, MdFilterAlt, MdListAlt, MdViewSidebar } from 'react-icons/md'
import {ImCross} from 'react-icons/im'
// import {PiSideBar} from 'react-icons/pi'
import IncomeForm from '../Income-savings/IncomeForm'
import { Outlet } from 'react-router-dom'

function Income() {

// const [showFilter,setShowFilter] = useState(false)
const [showSidebar, setShowSetbar] = useState(false)
const [addIncome, setaddIncome] = useState(false)



  return (
    <div className="w-[100%] h-[90%] border-2 flex  flex-col  md:mt-16">

      <div className="w-[100%] flex p-2 border-2 ">
<button>sdjkdsksdkk</button>
<button>sdjkdsksdkk</button>
<button
onClick={()=> setShowSetbar(!showSidebar)}
><MdViewSidebar/></button>
      </div>

      <section className='w-[100%] h-[100%]  flex'>

      <main className={` ${showSidebar ? 'w-[80%] md:w-[100%] ': 'w-[80%] md:w-[100%]'} md:w-[75%] h-[100%] border-2  border-red-600`}>
        <Outlet/>
        </main>

        <div className={` ${showSidebar ? 'w-[20%]  md:w-[60%] sm:w-[40%] md:fixed top-14   md:right-0': 'w-[20%] md:hidden'} bg-gray-400 border-yellow-600 border-2 h-[95%]`}>
          
          </div> 
      </section>
      
    </div> 
  )
}

export  default Income



 



function FIlterIncome({showFilter,setShowFilter}){

  return(
    <div className={`w-[40%] ${showFilter ? "flex flex-col":"flex flex-col sm:hidden"} sm:w-[100%]  p-2 text-sm items-center`}>

      <div className="From flex my-2 border-2 border-orange-300 rounded p-1">
        <span>
          From:
        </span>

        <input type="date" name="from" id="from" />
      </div>

      <div className="to flex my-2 border-2  border-orange-300 rounded p-1">
      <span>
          To:
        </span>

        <input type="date" name="to" id="to" />
      </div>

      <div className="flex items-center w-[80%] md:w-[90%] my-2">

        <button className='m-2  p-2 border-2 rounded'>
          Highest to Lowest 
        </button>

    <button className='m-2 p-2 border-2 rounded'>
      Lowest to Highest
    </button>

      </div>


      <button className='p-2 px-3  bg-emerald-700 hover:bg-emerald-500 text-white w-[80%] m-2 '>
        Filter
        </button>
    
    </div>
  )
}




function Sidebar(){


  return(
    <div className="flex flex-col p-1">
      <article className='flex flex-col bg-emerald-400 w-[80%] h-[130px] sm:h-[100px]  p-2 text-base rounded m-1'>

    <span className='my-1' >
    Total income this month
    </span>


    <span className='my-5'>
      $3,000
    </span>


      </article>

      
      <article className='flex flex-col bg-emerald-400 w-[80%] h-[130px] sm:h-[100px] p-2 text-base rounded m-1 my-3'>

    <span className='my-1' >
    Total income this month
    </span>


    <span className='my-5'>
      $3,000
    </span>


      </article>


    </div>
  )
}






//////

{/* <div className="w-[80%] sm:w-[100%] h-[85vh] md:h-[78vh] border-2 flex flex-col">

          <div className="Add-income flex w-[100%] justify-between px-2 text-sm p-2 bg-gray-200">
            <span className='sm:hidden '>
              Income
            </span>

                <div className="w-[10rem] sm:w-[100%]  flex justify-between items-center">


    <button className='bg-orange-400 hidden hover:bg-orange-200 p-2 rounded sm:flex' 
    onClick={()=>setShowFilter(!showFilter)}
    >

    <span className='hidden sm:block text-xl'>

{ showFilter && <MdListAlt/> || <MdFilterAlt/> }

     
    </span>

<span className='sm:hidden'>
    filter
</span>
    </button>

    <button className='bg-orange-400 hidden hover:bg-orange-200 p-2 rounded sm:flex' onClick={()=>setShowSetbar(!showSidebar)}>
      <span className='hidden sm:block text-xl'>
        <MdViewSidebar/>
      </span>

      <span className='sm:hidden'>
      sidebar

      </span>
    </button>


            <button className='p-2 bg-emerald-400 rounded hover:bg-emerald-300  text-white' onClick={()=>setaddIncome(!addIncome)}>
              Add Income
            </button>

            <button className='p-2 rounded bg-rose-500 text-white mx-2  hover:bg-rose-200'>
              Reset
            </button>


                </div>

          </div>

{

addIncome && 
  <IncomeForm addIncome={addIncome} setaddIncome={setaddIncome}/> 

  ||


<div className="w-[100%] h-[100%] flex overflow-clip">

        <IncomeHistory showFilter={showFilter} setShowFilter={setShowFilter}/>

        <FIlterIncome showFilter={showFilter} setShowFilter={setShowFilter}/>


</div>
}



      </div>




      <div className={`w-[20%] z-10 ${showSidebar ? "sm:absolute flex flex-col sm:top-0  ": "flex sm:hidden "} border-2 h-[85vh] md:h-[78vh] sm:w-[100%] bg-white`}>

        <button className='hidden sm:block self-end p-1 m-3 text-xl'
        onClick={()=>setShowSetbar(!showSidebar)}
        >
      <ImCross/>
        </button>

        <Sidebar/>

      </div>


*/}