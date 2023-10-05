import React from 'react'
import { useState } from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'
import { MdCancel, MdDelete, MdFilter } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { mergeAllExpense, changeDateSort, sortArrByDate, formatNumber } from '../../../resources/utils'
import { Pagination } from '../Expenses/HistoryLayouts/ExpHistory'
import { createContext } from 'react'
import { useContext } from 'react'
// import React, { useState,useEffect } from 'react'
import {ImCross} from 'react-icons/im'
import { BsFilter } from 'react-icons/bs'
import { GiBroom } from 'react-icons/gi'
import { deleteIncome } from '../../../store/user/userQueries'
import { ContextConfirm } from '../../../resources/AllContext'

export const IncomeHomeContext = createContext(null)


function IncomeHome() {

 
    const allIncome = useSelector( state => state.userData.userData?.income)

    const [postPerpage, setpostPerpage] = useState(8)
    const [currentPage, setcurrentPage] = useState(1)
  
    const numberOfPages = Math.ceil(allIncome.length / postPerpage)
  
  const start = (currentPage - 1) * postPerpage
  const end = currentPage * postPerpage 
  
    
    // console.log(numberOfPages);

    const [showFilter, setShowFilter] = useState(false)
const [showFiltered, setShowFiltered] = useState('')

const filteredNumberOfPages = Math.ceil(showFiltered.length / postPerpage)
  
  
    const next = ()=>{
      setcurrentPage(currentPage + 1)
  
    }
  
  
    const prev = ()=>{
      // console.log(currentPage)
      setcurrentPage(currentPage - 1)
    }
  

  return (
    <IncomeHomeContext.Provider value={{currentPage, setcurrentPage, numberOfPages,filteredNumberOfPages,showFiltered, setShowFiltered,showFilter, setShowFilter,start,end,next,prev}}>


    <div className='p-1 w-[100%] relative flex h-[100%] '>

        <IncomeHistory/>

        <button className='hidden sm:flex p-1 absolute text-4xl  text-emerald-500 -top-12 right-1' 
        onClick={(e)=>setShowFilter(true)}
        >
            <BsFilter/>
        </button>

        <IncomeFilter /> 

    </div>
    </IncomeHomeContext.Provider>
  )
}

export default IncomeHome


export function IncomeFilter({}) {
  const allIncome = useSelector( state => state.userData.userData?.income)

    const {showFiltered, setShowFiltered,showFilter, setShowFilter} = useContext(IncomeHomeContext)

    const [highOrLow, setHighOrLow] = useState('')
    // const [lowToHigh, setlowToHigh] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

// console.log(allExpense)


    const clearInputs = ()=>{
      setHighOrLow('')
      setStartDate('')
      setEndDate('')
    }

    function handleSubmitfilter(e){
        e.preventDefault()

        // console.log('1');
        
        if(startDate && !endDate && !highOrLow ){

          // console.log(new Date(startDate));
          // console.log(allIncome);
          const startDateFilter = allIncome.filter(inc => {
            return changeDateSort(inc.date) > (new Date(startDate))
          })

          setShowFiltered(sortArrByDate(startDateFilter));
          setShowFilter(false)
          clearInputs()

        }  

        if(!startDate && endDate && !highOrLow ){
          const endDateFilter = allIncome.filter(inc => {
            return changeDateSort(inc.date) < (new Date(endDate))
          })

          // console.log(sortArrByDate(endDateFilter));
          //setShowFiltered == setShowFilter
          setShowFiltered(sortArrByDate(endDateFilter));
          setShowFilter(false)
          clearInputs()
        }
 
          if(!startDate && !endDate && (highOrLow  === 'high')){
            const highEstToLow = allIncome.sort((a, b) => {
              return b.amount - a.amount
            })

            // console.log(highEstToLow);
            setShowFiltered(highEstToLow);
            // console.log(showFiltered);
            setShowFilter(false)
            clearInputs()
            
            

          }

          
 
          if(!startDate && !endDate && (highOrLow === 'low')){
            const lowToHigh = allIncome.sort((a, b) => {
              return b.amount - a.amount
            }).reverse()

            // console.log(highEstToLow);
            setShowFiltered(lowToHigh);
            setShowFilter(false)
            clearInputs()
            

          }

          if(startDate && endDate && !highOrLow){
            const filterByDate = allIncome.filter(inc => {
              return( changeDateSort(inc.date) > (new Date(startDate))) && (changeDateSort(inc.date) < (new Date(endDate)))
            })

            setShowFiltered(sortArrByDate(filterByDate));
            setShowFilter(false)
            clearInputs()
          

          }



    //   const  mergeAllExpense()

    }

    return(
        <form className={`w-[30%]  ${showFilter ? "flex flex-col sm:bg-white left-0 top-16    sm:bg-opacity-50 sm:backdrop-blur-md  sm:fixed sm:h-[100%] sm:w-[100%]":"flex flex-col sm:hidden"} sm:w-[100%]  p-2 text-sm items-center`} onSubmit={handleSubmitfilter}>

<span className='self-end hidden mt-14 mx-3  sm:flex p-1 absolute  text-xl  text-black -top-9 right-1 ' 
        onClick={(e)=>setShowFilter(false)}
        >
            <ImCross/>
        </span>


            <h2 className='my-7 sm:mb-14 text-lg'>Filter Income</h2>
    
          <div className="From flex my-2 border-2 border-orange-300 rounded p-1">
            <span>
              From:
            </span>
    
            <input type="date" name="from" id="from" value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
          </div>
    
          <div className="to flex my-2 border-2  border-orange-300 rounded p-1">
          <span>
              To:
            </span>
    
            <input type="date" name="to" id="to" value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
          </div>
    
          <div className="flex justify-between items-center w-[80%] md:w-[90%] my-2">
    
            <span className={`m-2 ${highOrLow === 'high' ? 'bg-emerald-700 text-white': '' }  p-2 border-2 rounded cursor-pointer w-[48%] text-center`} onClick={(e)=>setHighOrLow('high')}>
              Highest to Lowest 
            </span>
    
        <span className={`m-2 p-2  ${highOrLow === 'low' ? 'bg-amber-500 text-white': '' }  border-2 rounded cursor-pointer w-[48%] text-center`} onClick={(e)=>setHighOrLow('low')}>
          Lowest to Highest
        </span>
    
          </div>
    

    <div className="flex items-center justify-between w-[90%] p-1">

          <button className='p-2  bg-emerald-700 hover:bg-emerald-500 text-white w-[70%] m-2 '>
            Filter
            </button>

            <span className='text-xl bg-rose-600 hover:bg-rose-400 flex items-center w-[20%]  text-center p-2 rounded-sm  text-white' onClick={()=>{
              setShowFiltered('')
              clearInputs()
              setShowFilter(false)
            }}>
              <GiBroom className='mx-auto'/>
            </span>

    
    </div>
    
        
        </form>
      )
    }
    
    
    
    
    function Sidebar(){
    
    
      return(
        <div className="flex flex-col p-1">
          <article className='flex flex-col bg-emerald-400 w-[80%] h-[130px] sm:h-[100px]  p-2 text-base rounded m-1'>
    
        <span className='my-1' >
        Total income this month
        </span>
    
    
        <span className='my-5'>
          $3,000
        </span>
    
    
          </article>
    
          
          <article className='flex flex-col bg-emerald-400 w-[80%] h-[130px] sm:h-[100px] p-2 text-base rounded m-1 my-3'>
    
        <span className='my-1' >
        Total income this month
        </span>
    
    
        <span className='my-5'>
          $3,000
        </span>
    
    
          </article>
    
    
        </div>
      )
}

  

function IncomeHistory(){

    const allIncome = useSelector( state => state.userData.userData?.income)

    const {showFiltered,currentPage,numberOfPages,prev,next,filteredNumberOfPages,  end, start, showFilter, setShowFilter} = useContext(IncomeHomeContext)


    return(
      <div className={`h-[100%]  w-[70%]  flex flex-col sm:w-[100%]`}>

        {
          (!showFiltered && allIncome?.length > 0 && <div className="w-[100%] h-[90%] flex flex-col ">

                {allIncome.slice(start, end).map((inc, i) =>{
                    return(
                        <IncomeArticle key={i + 1}  {...inc}/>
                    )
                })} 


            </div>)  ||( !showFiltered && allIncome?.length < 1 && <div className="w-[100%] flex items-center justify-center  h-[90%]">
                <h3 className="m-auto">No income added</h3>
            </div>)

        }

        {
          (  showFiltered && showFiltered?.length > 0 && <div className="w-[100%] h-[90%] flex flex-col ">

          {showFiltered.slice(start, end).map((inc, i) =>{
              return(
                  <IncomeArticle key={i + 1} {...inc}/>
              )
          })} 


      </div>)  ||( showFiltered && showFiltered.length < 1 && <div className="w-[100%] flex items-center justify-center  h-[90%]">
          <h3 className="m-auto">No income found</h3>
      </div>)   
        }
  
     
  
  
      <div className="pagination h-[10%]  w-[100%] flex bottom-0  items-center p-2 justify-center ">
      

      {  !showFiltered && <Pagination currentPage={currentPage} numberOfPages={numberOfPages} prev={prev} next={next} /> || showFiltered && <Pagination currentPage={currentPage} numberOfPages={filteredNumberOfPages} prev={prev} next={next} /> }

         </div>
     
      </div>
    )
  }


 
  
  function IncomeArticle({amount, title, id, date}){

    const userId = useSelector((state)=> state.userData?.DocumentId)
    const {payload, setPayload, confirm, setConfirm} = useContext(ContextConfirm)

    const dispatch = useDispatch()

    const deleteItem = ()=>{
  setPayload({
    type: 'deleteIncome',
    data: {
     userId,
        id
    }
  })
  setConfirm(true)

      // dispatch(deleteIncome({
      //   userId,
      //   id
      // }))
    }


    return(
      <article className="w-[100%] flex p-2 py-1 items-center justify-between border-b-2">
  
      <span className='w-[35px] h-[35px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
      <AiFillMoneyCollect/>
      </span>
      <div className="w-[45%] ml-3  flex flex-col">

        <span className='my-1 text-sm'>
        {title}
        </span>
  
  <span  className='text-xs'>
      { date}
  </span>
  
  
  </div>
  
  
  <div className='text-sm w-[30%] '>
    {formatNumber(amount)}
  </div>
  
  <button className='text-lg p-2  hover:text-rose-400 mx-5' onClick={(e)=>deleteItem()}>
    <MdDelete/>
  </button>
  
  </article>
  
    )
  }