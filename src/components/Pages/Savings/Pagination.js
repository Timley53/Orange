import { MdArrowBack, MdArrowForward, MdArrowLeft, MdFilter, MdFilter1, MdFilterCenterFocus, MdFilterList, MdOutlineArrowBack } from 'react-icons/md'
import React from 'react'



export default function Pagination({currentPage, numberOfPages, prev, next}){

    return (
      
      (  currentPage === 1 && numberOfPages === 1 &&  <div className="">
        </div> ) || currentPage === 1 && currentPage < numberOfPages &&  <>
  
        <small className='text-xs text-black'>
      {currentPage}/{numberOfPages}
    </small>
         <button className="p-1 rounded-3xl text-orange-800 px-3 bg-orange-300 mx-4 text-sm flex items-center" onClick={()=>next()}>
        {currentPage + 1}  <span className='ml-2'>
  
        <MdArrowForward/>
  
    </span> 
    
    </button>
    
   
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
  
  
   
