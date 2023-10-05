import React, {useEffect, useState} from 'react'
import { AiFillMoneyCollect, AiOutlineHome } from 'react-icons/ai'
import { FaCross, FaNairaSign } from 'react-icons/fa'
import { MdCancel, MdFilterAlt, MdListAlt, MdViewSidebar } from 'react-icons/md'
import {ImCross} from 'react-icons/im'
// import {PiSideBar} from 'react-icons/pi'
// import IncomeForm from '../Income-savings/IncomeForm'
import { Outlet, NavLink } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseMenu } from '../../../store/ui/uiStateSlice'
import { formatNumber, highestIncomeThisMonth, totalIncomeThisMonth } from '../../../resources/utils'
function Income() {
  const dispatch = useDispatch()
// const [showFilter,setShowFilter] = useState(false)
const [showSidebar, setShowSetbar] = useState(false)
const [addIncome, setaddIncome] = useState(false)



const openMenu = useSelector((state)=> state.uiState.openMenu)

useEffect(()=>{
  
  dispatch(openCloseMenu({close: false}))

},[])


  return (
    <div className="w-[100%] h-[97%] md:h-[90%] flex  md:mt-16">

      <main className='flex flex-col w-[80%] md:w-[100%]'>

      <div className="w-[100%] flex p-2  border-b-2">
      <NavLink to={'/dashboard/income'}  className={"mx-1 mr-3 flex items-center border-2 border-emerald-400 p-1 px-1 rounded-md text-emerald-500 hover:bg-emerald-400 hover:text-white transition-all"}>
          <button className=' text-xl  hover:text-white '>
            <AiOutlineHome/>
            </button>
            <span className=' sm:hidden mx-1 sm:mx-0  text-xs '>
              Home
            </span>
      </NavLink>


 <NavLink to={'addnew'}  className={"mx-2 flex items-center border-2 border-emerald-400 p-1 px-1 rounded-md text-emerald-500 hover:bg-emerald-400 hover:text-white transition-all"}>
          <button className=' text-xl  hover:text-white '>
            <BsPlusLg/>
            </button>

            <span className=' sm:hidden mx-1 sm:mx-0  text-xs'>
              Add new
            </span>
      </NavLink>


<button className='text-emerald-600 hidden sm:flex text-xl mx-4' 
onClick={()=> setShowSetbar(!showSidebar)}
><MdViewSidebar/></button>
      </div>

      <main className={` ${showSidebar ? 'w-[100%] md:w-[100%] ': 'w-[100%] md:w-[100%]'} h-[100%] `}>
        <Outlet/>
        </main>


      </main>
 
     

     

        <div className={` ${showSidebar ? ' w-[20%]   md:w-[60%] sm:w-[60%] md:fixed top-14   md:right-0': 'w-[20%] md:hidden'}   md:bg-opacity-80 md:backdrop-blur-sm h-[100%] bg-slate-100  md:h-[95%]`}>

        

        <Sidebar setShowSetbar={setShowSetbar} showSidebar={showSidebar} />
          
          </div> 
      
    </div> 
  )
}

export  default Income

function Sidebar({showSidebar,setShowSetbar}){

  const allIncome = useSelector((state)=> state.userData?.userData?.income)

  
  

  return(
    <div className="flex flex-col p-1 h-[100%]">
      <button className='text-emerald-600 hidden sm:flex text-lg m-4 self-end' 
onClick={()=> setShowSetbar(!showSidebar)}
><ImCross/></button>


      <article className='flex flex-col  w-[80%] h-[130px] sm:h-[100px] text-center p-2 text-base rounded m-1'>

    <span className='my-1' >
    Total income this month
    </span>


    <span className='my-5'>
      {formatNumber(totalIncomeThisMonth(allIncome))}
    </span>


      </article>

      
      <article className='flex flex-col  w-[80%] h-[130px] sm:h-[100px] text-center my-6 p-2 text-base rounded m-1 '>

    <span className='my-1' >
    Highest income this month
    </span>


    <span className='my-5'>
    {formatNumber(highestIncomeThisMonth(allIncome))}
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