import React from 'react'

import BalanceReportSection from './BalanceReportSection'
import HomeHistory from './HomeHistory'
import HomeIncomeAndSavings from './TransactionIncome'
import HomeCategories from './HomeCategories'
import { useDispatch, useSelector } from 'react-redux'
import { addNewExpense, updateData } from '../../../store/user/userDataSlice'
import {MdAdd, MdSave, MdSavings} from 'react-icons/md'
import AddNewForms from './AddNewForms'
import { useState } from 'react'
import LoadingView from '../Expenses/LoadingView'
import { NavLink } from 'react-router-dom'
import { FaPiggyBank } from 'react-icons/fa'
import { AiFillBank, AiOutlineTransaction } from 'react-icons/ai'
import { openCloseMenu } from '../../../store/ui/uiStateSlice'
import { useEffect } from 'react'

function Home() {

  const userData= useSelector((state)=> state.userData.userData) 
  const userId = useSelector(state => state.user.uId)

  // const error = useSelector(state => state.userData.error)

  const docId = useSelector(state => state.userData.DocumentId)
  const loading = useSelector(state => state.userData.loading)
  
  const dispatch = useDispatch()

  const [addNew, setAddNew] = useState(false)



  const openMenu = useSelector((state)=> state.uiState.openMenu)

  useEffect(()=>{
    
    dispatch(openCloseMenu({close: false}))
  
  },[])
  



const userNameSplit = (name)=>{
  return name?.split(' ')[0]
}

  
  return (
    <div className='w-full overflow-clip h-[100%]  overflow-y-scroll relative'>

    <article className='md:order-2 mt-4 md:mt-20 px-5  p-2'>
        <h2 className='text-lg leading-3'>Hi,  
         {userNameSplit(userData?.UserDetails?.name)}
        </h2>
        <h4 className='text-sm my-2'>Welcome </h4>



      </article>



   
   {
    loading &&
    <LoadingView/>
}

      <BalanceReportSection/>



          <div className={`fixed ${addNew ? 'h-auto w-auto transition-all':'h-[55px] w-[55px] items-end'} overflow-hidden right-12 flex flex-col bottom-10 sm:bottom-16 rounded-md bg-slate-100 backdrop-blur-md z-10`} >

      
          <button className=' bg-emerald-500 text-white p-3 m-1 z-10   rounded-full text-2xl transition duration-150 self-end' 
          onClick={()=>setAddNew(!addNew)}
          >
          <MdAdd/>
          </button>
          
          <NavLink to={'income/addnew'} className=' w-[90%] flex text-black items-center  my-1 mx-2 text-sm  justify-between' 
          
          >
            <span className='mr-1'>
              Add Income
            </span>

            <span className="p-2   bg-emerald-500  text-lg rounded-full text-white"> 
          <MdSavings/>

            </span>
          </NavLink>


          <NavLink to={'expenses/addnew'} className='flex justify-between w-[90%]  text-black items-center my-1 mx-2  text-sm' 
          
          >

            <span className='mr-1'>
              Add Expense
            </span>

<span className="p-2 text-white   bg-emerald-500  text-lg rounded-full"> 
          <AiOutlineTransaction/>

            </span>
          </NavLink>


       



          </div>


     



    <section className='w-[99%] p-2 flex flex-wrap '>

      <HomeCategories/>

      <HomeHistory/>
      
      <HomeIncomeAndSavings/>




    </section>

    </div>
  )
}

export default Home