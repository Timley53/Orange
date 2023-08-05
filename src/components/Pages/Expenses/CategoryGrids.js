import React from 'react'
import { useState } from 'react'
import {CategoryList} from './ExpenseCat/CategoryList'
import CategoryVisual from './ExpenseCat/CategoryVisual'
import CreateCategory from './createCategory'




function CategoryGrids() {
  const [showChart, setShowChart] = useState(false)


  return (


    <div className='h-auto w-[100%] p-2  sm:p-0'>


      <CreateCategory showChart={showChart} setShowChart={setShowChart}/>


    <div className='flex relative w-[98%]  rounded-md sm:rounded-none sm:w-[100%] my-2'>
   
    
   

    {showChart &&  <CategoryVisual/> || <CategoryList/>  }







     
    </div>
        </div>
  )
}

export default CategoryGrids


