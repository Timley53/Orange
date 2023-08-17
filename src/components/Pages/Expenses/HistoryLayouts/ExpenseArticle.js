import React from 'react'
import {chooseIcon} from '../../../../resources/utils'
import { MdDelete, MdNotes } from 'react-icons/md'



function ExpenseArticle() {
  return (
    <article className='flex p-1 items-center  border-b-2'>

    <span className='m-2 p-3 w-[40px] h-[40px]  text-center bg-emerald-600 text-white rounded-full'>
    {chooseIcon('utility')}
    </span>

    <div  className="w-[50%] flex flex-col ml-4">
        <span className='text-[14px]'>
Transport
        </span>

<small className='text-[11px] text-gray-500 my-1'>
12/12/2020
</small>
    </div>


    <span className='text-sm'>
       -$200
    </span>

    <button className='mx-8 text-red-800 p-2 hover:text-gray-600 transition-all'>
      <MdDelete/>
    </button>

    <span title='This is a little note for later' className=' mx-3 hover:text-orange-600 cursor-pointer transition-all relative  note-parent '>
      <MdNotes/>

<span className='absolute notes z-20'>
This is a little note for later
This is a little note for later
</span>
    </span>
    
</article>  )
}

export default ExpenseArticle