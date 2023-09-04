import React from 'react'
import {chooseIcon, formatNumber} from '../../../../resources/utils'
import { MdDelete, MdNotes } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../../../../store/user/userQueries'


function ExpenseArticle({date,id, title, value}) {
    const dispatch = useDispatch() 
    const userId = useSelector((state)=>state.userData?.DocumentId) 

  const deleteExpenseFxn = ()=>{
    
    dispatch(deleteExpense({
      userId,
      id
    }))

  }
  return (
    <article className='flex p-1 items-center  border-b-2 justify-between'>

    <span className='m-2 p-3 w-[40px] h-[40px]  text-center bg-emerald-600 text-white rounded-full'>
    {chooseIcon(title + '')}
    </span>

    <div  className="w-[60%] flex flex-col ml-4">
        <span className='text-[14px]'>
{title[0].toUpperCase() + title.slice(1)
}        </span>

<small className='text-[11px] text-gray-500 my-1'>
{date}</small>
    </div>


    <span className='text-sm w-[20%]'>
       {formatNumber(value)}
    </span>

    <button className='mx-8 text-red-800 p-2 hover:text-gray-600 transition-all'
      onClick={()=>deleteExpenseFxn()}
    >
      <MdDelete/>
    </button>
{/* 
    <span title='This is a little note for later' className=' mx-3 hover:text-orange-600 cursor-pointer transition-all relative  note-parent '>
      <MdNotes/> */}

{/* <span className='absolute notes z-20'>
This is a little note for later
This is a little note for later
</span> */}
    {/* </span> */}
    
</article>  )
}

export default ExpenseArticle