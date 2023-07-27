import React from 'react'
import { useState } from 'react'
import { MdExpand } from 'react-icons/md'
import {CategoryList} from './ExpenseCat/CategoryList'
import CategoryVisual from './ExpenseCat/CategoryVisual'




function CategoryGrids() {
    const [showMore, setShowMore] = useState(true)

  return (
    <div className='flex relative w-[98%] border-2 rounded-md my-2'>
   
    <CategoryList/>
    <CategoryVisual/>







      <button className='absolute bottom-1  right-2 text-2xl text-orange-500 hover:text-black transition-all'
      
      onClick={()=>setShowMore(!showMore)}
      >
         <MdExpand/>
        </button> 
    </div>
  )
}

export default CategoryGrids


