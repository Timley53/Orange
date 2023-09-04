import React from 'react'
import SearchFilters from './SearchFilters'
import { MdArrowBack, MdArrowForward, MdArrowLeft, MdFilter, MdFilter1, MdFilterCenterFocus, MdFilterList, MdOutlineArrowBack } from 'react-icons/md'
import { useState } from 'react'
import ExpenseArticle from './ExpenseArticle'
import { useSelector } from 'react-redux'
import { mergeAllExpense, sortArrByDate } from '../../../../resources/utils'
import {BsArrowLeft} from 'react-icons/bs'

function ExpHistory() {
  const allExpense = useSelector( state => state.userData.userData?.expenses?.categories)

  const [postPerpage, setpostPerpage] = useState(7)
  const [currentPage, setcurrentPage] = useState(1)

  const numberOfPages = Math.ceil(mergeAllExpense(allExpense).length / postPerpage)

const start = (currentPage - 1) * postPerpage
const end = currentPage * postPerpage 

  
  // console.log(numberOfPages, mergeAllExpense(allExpense));


  const next = ()=>{
    setcurrentPage(currentPage + 1)

  }


  const prev = ()=>{
    // console.log(currentPage)
    setcurrentPage(currentPage - 1)
  }




const [showFilter, setShowFilter] = useState(false)
const [showFiltered, setShowFiltered] = useState('')

const filteredNumberOfPages = Math.ceil(showFiltered.length / postPerpage)


  return ( 
    <section className='flex w-[99%] h-[99vh] md:h-[80vh] sm:h-[80vh] sm:justify-center relative'>


     
       <div className={`history ${' flex flex-col h-[100%] w-[80%] sm:w-[99%] '}   relative` }
      >

    { ( !showFiltered && sortArrByDate(mergeAllExpense(allExpense)).length > 0 &&  <div className="w-[100%] flex flex-col  sm:overflow-y-scroll h-[90%] ">

        {sortArrByDate(mergeAllExpense(allExpense)).slice(start, end).map(exp =>{
          const {id} = exp 

          return(

            <ExpenseArticle key={id} {...exp}/>
          )
        })}

        </div>)  || ( !showFiltered && sortArrByDate(mergeAllExpense(allExpense)).length < 1 && 
          <div className="w-[100%] flex items-center justify-center  h-[90%]">
          <h3 className="m-auto">No Expense recorded</h3>
      </div>)
        
}
 {       
  (     showFiltered && showFiltered.length > 0 &&  <div className="w-[100%] flex flex-col  sm:overflow-y-scroll h-[90%]  filtered">
          {showFiltered.slice(start, end).map(exp => {
             const {id} = exp 
             return(
               <ExpenseArticle key={id} {...exp}/>
             )
          })}

</div> ) || (showFiltered && showFiltered.length < 1 && <div className="w-[100%] flex items-center justify-center  h-[90%]">
          <h3 className="m-auto">No Expense recorded</h3>
      </div>)

} 



    <div className="pagination h-[10%]  w-[100%] flex bottom-0  items-center p-2 justify-center ">
      

 {  !showFiltered && <Pagination currentPage={currentPage} numberOfPages={numberOfPages} prev={prev} next={next} /> || showFiltered && <Pagination currentPage={currentPage} numberOfPages={filteredNumberOfPages} prev={prev} next={next} /> }
    </div>

      </div>
      

      <button className='absolute right-1 -top-9  text-3xl hidden sm:block' onClick={(e)=>{ 
  setShowFiltered('')
  setShowFilter(!showFilter)}}>

  <MdFilterList/>
</button> 



      <SearchFilters showFilter={showFilter} setShowFilter={setShowFilter} setShowFiltered={setShowFiltered} showFiltered={showFiltered}/>
    </section>
    )
}



export default ExpHistory





 export function Pagination({currentPage, numberOfPages, prev, next}){

  return (
    
    (  currentPage === 1 && numberOfPages === 1 &&  <div className="">
      </div> ) || currentPage === 1 && currentPage < numberOfPages &&  <>

      <small className='text-xs text-black'>
    {currentPage}/{numberOfPages}
  </small>
       <button className="p-1 rounded-3xl text-orange-800 px-3 bg-orange-300 mx-4 text-sm flex items-center" onClick={()=>next()}>
      {currentPage + 1}  <span className='ml-2'>

<MdArrowForward/>

  </span> </button>
  
 
        </> || currentPage > 1 && currentPage < numberOfPages && <>
 
  <button  className="p-1 rounded-3xl text-orange-800 px-3 bg-orange-300 mx-4 text-sm flex items-center"  onClick={()=>prev()}>
    <span className='mr-1'>
    <MdArrowBack/> 

    </span>
    {currentPage - 1}
  </button>

  <small className='text-xs text-black'>
    {currentPage}/{numberOfPages}
  </small>

  <button className="p-1 rounded-3xl text-orange-800 px-3 bg-orange-300 mx-4 flex items-center text-sm" onClick={()=>next()}>
    {currentPage + 1}

    <span className='ml-2'>

  <MdArrowForward/>
    </span>
  </button>
       </> || currentPage === numberOfPages && numberOfPages > 1 && <> 
       
         <small className='text-xs text-black'>
         {currentPage}/{numberOfPages}
       </small>
       <button className='p-1 rounded-3xl text-orange-800 px-3 bg-orange-300 mx-4 text-sm flex items-center justify-center' onClick={()=>prev()}>
        {currentPage - 1}
        <span className='ml-1'>
    <MdArrowBack/> 
    </span>        
        </button> 
       </>
  )
 
 
   }  


   /*
   <button className='absolute right-1 -top-9  text-3xl hidden sm:block' onClick={(e)=>{ 
  setShowFiltered('')
  setShowFilter(!showFilter)}}>

  <MdFilterList/>
</button> 
  
   */
