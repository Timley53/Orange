import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { MdSavings, MdDelete, MdViewSidebar, MdHome, MdAdd, MdOutlineAdd } from 'react-icons/md'
import { EachSavingsList } from './SavingsArticle'
import { FaCaretRight } from 'react-icons/fa'
import { SavingsContext } from './Savings'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseMenu } from '../../../../store/ui/uiStateSlice'
import { NavLink, Outlet } from 'react-router-dom'

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


     <div className={` flex w-[100%] h-[100%] border-2 sm:w-[100%] relative`} >

    <div className="flex h-[100%]  flex-col w-[75%]  border-2 md:w-[100%]">
    <div className='w-[100%] h-[8%] md:mt-16 border-2 text-emerald-500  flex items-center'>

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


    </div>


    <main className="w-[100%] h-[90%]">
        <Outlet/>
    </main>


    </div>

    <aside className={`w-[25%] h-[100%] ${showSide ? 'md:fixed md:flex right-0 top-0 md:w-[60%]':'md:hidden'}`}>

    </aside>


   
        
    </div> 


  )
}

export default MainSavings


