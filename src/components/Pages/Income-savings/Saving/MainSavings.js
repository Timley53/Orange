import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { MdSavings, MdDelete, MdViewSidebar, MdHome, MdAdd, MdOutlineAdd, MdOutlineCheck } from 'react-icons/md'
import { EachSavingsList } from './SavingsArticle'
import { FaCaretRight } from 'react-icons/fa'
import { SavingsContext } from './Savings'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseMenu } from '../../../../store/ui/uiStateSlice'
import { NavLink, Outlet } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { reduceGoalsCurr } from '../../../../resources/utils'

function MainSavings() {
    // const {showSide} = useContext(SavingsContext)
    const dispatch = useDispatch()
    const allSavings = useSelector((state)=> state.userData?.userData?.savings)

  const [showSide, setShowSide] = useState(false)

const openMenu = useSelector((state)=> state.uiState.openMenu)

useEffect(()=>{
  
  dispatch(openCloseMenu({close: false}))

},[])






  return (


     <div className={` flex w-[100%] h-[100%]  sm:w-[100%] relative`} >

    <div className="flex h-[100%]  flex-col w-[75%]  :w-[100%]">
    <div className='w-[100%] h-[6%]  md:mt-16  text-emerald-500  flex items-center'>

<NavLink to={''} className=" flex items-center p-1 mx-2 rounded-md hover:bg-emerald-400 hover:text-white border-2 border-emerald-400 transition-all">
 

    <span className='mx-1'>

<MdHome/>
    </span>

       <span className='mx-1 sm:hidden text-sm'>
        Home
    </span>

</NavLink>


<NavLink to={'addNew'} className=" flex items-center p-1 mx-2 rounded-md hover:bg-emerald-400 hover:text-white border-2 border-emerald-400 transition-all">
 

            <span className='mx-1'>
        <MdOutlineAdd/>
            </span>

       <span className='mx-1 sm:hidden text-sm'>
        Add new
    </span>
</NavLink>

    <button onClick={()=> setShowSide(!showSide)} className='hidden md:flex'>
<MdViewSidebar/>
    </button>

    </div>


    <main className="w-[100%] h-[90%] ">
        <Outlet/>
    </main>


    </div>

    {
      showSide && <div className="hidden md:flex w-full h-full fixed bg-gray-500 backdrop-filter bg-opacity-60"> 

      </div>
    }

    <div className={`w-[25%] md:fixed md:flex h-[100%] ${showSide ? 'flex right-0 bottom-0 md:w-[60%]' :'md:hidden '} bg-slate-50 shadow-md flex-col md:z-[100]`}>

<button className="hidden md:flex self-end text-lg hover:text-red-300 m-5 mt-7" onClick={()=> setShowSide(!showSide)}>
<ImCross/>
</button> 
<h2 className='my-4 w-full text-center'>Completed Savings plan</h2>
<SavingsSideView/>
    </div>
        
    </div> 


  )
}

export default MainSavings

// reduceGoalsCurr
function SavingsSideView(){

  const allSavings = useSelector(state => state.userData.userData?.savings.goals)

// console.log(allSavings)

  return(
    <div className="w-[99%] h-[80%] flex flex-col items-center overflow-y-scroll overflow-edit">

    {
      (allSavings && allSavings.filter(plan => reduceGoalsCurr(plan.current) >= plan.target).length < 1 && <div className="w-full h-full flex justify-center items-center">
       No Saving Target has been met yet
      </div>) || (allSavings && allSavings.filter(plan => reduceGoalsCurr(plan.current) >= plan.target).length > 0 && allSavings.filter(plan => reduceGoalsCurr(plan.current) >= plan.target).map((plan, i) => {  
        return (
          <article key={i + 1} className='w-[90%] p-2 rounded-md border-2 flex items-center justify-between'>

            <span className="w-[30px] h-[30px]   rounded-full border-2 bg-emerald-400 flex items-center justify-center">
              <MdOutlineCheck/>
            </span>

            <div className="text-xs  ">
              {reduceGoalsCurr(plan.current)} / {plan.target}
            </div>

            <div className="text-xs text-emerald-600">
              {plan.title}
            </div>

          </article>
        )
 
      }))
    }

    </div>
  )
}

