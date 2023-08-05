import React from 'react'
import SearchFilters from './SearchFilters'
import { MdFilter, MdFilter1, MdFilterCenterFocus, MdFilterList } from 'react-icons/md'
import { useState } from 'react'
import ExpenseArticle from './ExpenseArticle'

function ExpHistory() {

const [showFilter, setShowFilter] = useState(false)


  return ( 
    <section className='flex w-[99%] h-[90vh] md:h-[80vh] sm:h-[77vh] sm:justify-center relative'>


      <div className={`history ${!showFilter ? 'flex flex-col w-[80%] sm:w-[99%]':'sm:w-[99%] w-[80%] sm:hidden'} overflow-y-scroll`}
      >
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
    <ExpenseArticle/>
      </div>

<button className='absolute right-1 -top-9  text-3xl hidden sm:block' onClick={(e)=> setShowFilter(!showFilter)}>

  <MdFilterList/>
</button>

      <SearchFilters showFilter={showFilter}/>
    </section>
    )
}



export default ExpHistory


