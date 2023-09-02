import React from 'react'
import { useState } from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'
import { MdCancel, MdDelete, MdFilter } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { mergeAllExpense, changeDateSort, sortArrByDate, formatNumber } from '../../../resources/utils'
import { Pagination } from '../Expenses/HistoryLayouts/ExpHistory'
import { createContext } from 'react'
import { useContext } from 'react'
// import React, { useState,useEffect } from 'react'
import {ImCross} from 'react-icons/im'
import { BsFilter } from 'react-icons/bs'

export const IncomeHomeContext = createContext(null)


function IncomeHome() {

    const testIncomeArr = [
        {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/09/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/11/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/12/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/01/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 200,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 211,
            date: '11/04/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 211,
            date: '11/10/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 211,
            date: '11/09/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 211,
            date: '11/01/2022'
        },
            {
            title: 'Fiver Gig',
            amount: 211,
            date: '11/06/2022'
        },
    

]

    const allIncome = useSelector( state => state.userData.userData?.income)

    const [postPerpage, setpostPerpage] = useState(8)
    const [currentPage, setcurrentPage] = useState(1)
  
    const numberOfPages = Math.ceil(testIncomeArr.length / postPerpage)
  
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
    <IncomeHomeContext.Provider value={{currentPage, setcurrentPage, numberOfPages,filteredNumberOfPages,showFiltered, setShowFiltered,showFilter, setShowFilter,start,end,next,prev, testIncomeArr}}>


    <div className='p-1 w-[100%] relative flex h-[100%] '>

        <IncomeHistory/>

        <button className='hidden sm:flex p-1 absolute text-4xl  text-black -top-9 right-1 ' 
        onClick={(e)=>setShowFilter(true)}
        >
            <BsFilter/>
        </button>

        <IncomeFilter testIncomeArr={testIncomeArr}/>

        

    </div>
    </IncomeHomeContext.Provider>
  )
}

export default IncomeHome



export function IncomeFilter({testIncomeArr}) {
    const allExpense = useSelector( state => state.userData.userData?.expenses?.categories)

    const {showFiltered, setShowFiltered,showFilter, setShowFilter} = useContext(IncomeHomeContext)

    const [highOrLow, setHighOrLow] = useState('')
    // const [lowToHigh, setlowToHigh] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

// console.log(allExpense)

    // const filterExpense = 

    function handleSubmitfilter(e){
        e.preventDefault()

        // console.log('1');
        
        if(startDate && !endDate && !highOrLow ){

          console.log(new Date(startDate));
          console.log(testIncomeArr);
          const startDateFilter = testIncomeArr.filter(inc => {
            return changeDateSort(inc.date) > (new Date(startDate))
          })

          console.log(sortArrByDate(startDateFilter));
          //setShowFiltered == setShowFilter

        }  

        if(!startDate && endDate && !highOrLow ){
          const endDateFilter = testIncomeArr.filter(inc => {
            return changeDateSort(inc.date) < (new Date(endDate))
          })

          console.log(sortArrByDate(endDateFilter));
          //setShowFiltered == setShowFilter
        }
 
          if(!startDate && !endDate && (highOrLow === 'high')){
            const highEstToLow = testIncomeArr.sort((a, b) => {
              return b.amount - a.amount
            })

            console.log(highEstToLow);

          }

          
 
          if(!startDate && !endDate && (highOrLow === 'low')){
            const highEstToLow = testIncomeArr.sort((a, b) => {
              return b.amount - a.amount
            }).reverse()

            console.log(highEstToLow);

          }

          if(startDate && endDate && !highOrLow){
            const filterByDate = testIncomeArr.filter(inc => {
              return( changeDateSort(inc.date) > (new Date(startDate))) && (changeDateSort(inc.date) < (new Date(endDate)))
            })

            console.log(sortArrByDate(filterByDate));

          }



    //   const  mergeAllExpense()

    }

    return(
        <form className={`w-[40%] ${showFilter ? "flex flex-col sm:bg-white left-0 top-16    sm:bg-opacity-50 sm:backdrop-blur-md  sm:fixed sm:h-[100%] sm:w-[100%]":"flex flex-col sm:hidden"} sm:w-[100%]  p-2 text-sm items-center`} onSubmit={handleSubmitfilter}>

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
    
          <div className="flex items-center w-[80%] md:w-[90%] my-2">
    
            <span className='m-2  p-2 border-2 rounded cursor-pointer' onClick={(e)=>setHighOrLow('high')}>
              Highest to Lowest 
            </span>
    
        <span className='m-2 p-2 border-2 rounded cursor-pointer' onClick={(e)=>setHighOrLow('low')}>
          Lowest to Highest
        </span>
    
          </div>
    
    
          <button className='p-2 px-3  bg-emerald-700 hover:bg-emerald-500 text-white w-[80%] m-2 '>
            Filter
            </button>
        
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

    const {showFiltered,currentPage,numberOfPages,prev,next,filteredNumberOfPages, testIncomeArr, end, start, showFilter, setShowFilter} = useContext(IncomeHomeContext)


    return(
      <div className={`h-[100%] border-2 w-[60%]  flex flex-col sm:w-[100%]`}>

        {
          (  !showFiltered && testIncomeArr.length > 0 && <div className="w-[100%] h-[90%] flex flex-col border-2">

                {testIncomeArr.slice(start, end).map((inc, i) =>{
                    return(
                        <IncomeArticle key={i + 1}  {...inc}/>
                    )
                })} 


            </div>)  ||( !showFiltered && testIncomeArr.length < 1 && <div className="w-[100%] flex items-center justify-center  h-[90%]">
                <h3 className="m-auto">No income added</h3>
            </div>)

        }

        {
          (  showFiltered && testIncomeArr.length > 0 && <div className="w-[100%] h-[90%] flex flex-col border-2">

          {testIncomeArr.slice(start, end).map((inc, i) =>{
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
  
  <button className='text-lg p-2  hover:text-rose-400 mx-5'>
    <MdDelete/>
  </button>
  
  </article>
  
    )
  }