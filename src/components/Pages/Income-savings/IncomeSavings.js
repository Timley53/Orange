import React, {useState} from 'react'
import Income from './Income'
import Savings from './Saving/Savings'
import {GrTransaction} from 'react-icons/gr'
import { MdOutlineSavings } from 'react-icons/md'
import  LoadingView from '../Expenses/LoadingView'
import { useSelector } from 'react-redux'

function IncomeSavings() {
  const [showSavings,setShowSavings] = useState(false)
  const loading = useSelector(state => state.userQueries.loading)


  return (
    <div className='w-[100%] md:mt-16 pt-2 sm:pt-0 border-2 p-1 sm:px-0 flex flex-col items-center sm:relative'>

{
  loading &&
  <LoadingView/>
}
      
       <header className=' flex w-[60%] sm:w-[100%] rounded-sm  items-center justify-center p-1 bg-gray-200 sm:fixed sm:bottom-1 sm:z-10'>


        <button className={` w-[50%] p-2 ${!showSavings ? 'bg-slate-300 shadow-md sm:text-emerald-500': 'bg-transparent'} text-center sm:text-lg flex items-center justify-center`} onClick={()=>setShowSavings(false)}>
      <span className='hidden sm:flex text-center'>

    <GrTransaction/>
      </span>

     

      <span className='sm:hidden'>

          Income
      </span>
        </button>

        <button className={`w-[50%] p-2 ${showSavings ? 'bg-slate-300 shadow-md sm:text-emerald-500': 'bg-transparent'} text-center sm:text-lg flex items-center justify-center `} onClick={()=>setShowSavings(true)} >
        <span className='hidden sm:flex text-center'>
<MdOutlineSavings/>
      </span>

      <span className='sm:hidden'>

          Savings

      </span>


        </button>




       </header>

<main className="w-[100%] p-1 sm:px-0">

  {
!showSavings && <Income/> ||  <Savings/> 

  }

 

</main>

       
    </div>
  )
}

export default IncomeSavings