import React from 'react'
import {chooseIcon, formatNumber} from '../../../../resources/utils'
import { MdDelete, MdNotes } from 'react-icons/md'


function ExpenseArticle({date,id, title, value}) {
  return (
    <article className='flex p-1 items-center  border-b-2'>

    <span className='m-2 p-3 w-[40px] h-[40px]  text-center bg-emerald-600 text-white rounded-full'>
    {chooseIcon(title + '')}
    </span>

    <div  className="w-[50%] flex flex-col ml-4">
        <span className='text-[14px]'>
{title[0].toUpperCase() + title.slice(1)
}        </span>

<small className='text-[11px] text-gray-500 my-1'>
{date}</small>
    </div>


    <span className='text-sm'>
       {formatNumber(value)}
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