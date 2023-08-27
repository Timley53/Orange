import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { formatNumber, mergeAllExpense, sortArrByDate } from '../../../resources/utils'

function HomeHistory() {

    const categories = useSelector(state => state.userData?.userData?.expenses?.categories)

    // console.log(categories);

    // const 

  return (
    <div className='w-[35%] md:w-[30%] sm:w-[100%]  mx-3 sm:mx-0 sm:mt-5 bg-gray-100'>
        <header className='text-sm flex justify-between p-2 bg-gray-300'>

            <span>Last 5 Transaction</span>


            <NavLink className={`text-sm text-orange-600 hover:text-gray-500 transition-all`}>View all</NavLink >
        </header>

        <div className="transactions w-full flex flex-col overflow-y-scroll overflow-edit h-[400px]">

          {
            categories && mergeAllExpense(categories).length < 1 && <div className="w-full text-base text-center my-3">
                No expenses has been recorded 
            </div>
          
          
         || categories &&
               sortArrByDate( mergeAllExpense(categories)).slice(-5).map((exp, i) =>{ 
                    return <HomeHistoryArticle {...exp} key={i}/>
          })
          }

            {/* <HomeHistoryArticle/>
            <HomeHistoryArticle/>
            <HomeHistoryArticle/> */}

        </div>

    </div>
  )
}

export default HomeHistory


export const HomeHistoryArticle = ({date,value}) =>{

    return(
        <article className='flex p-1 items-center   border-b-2 w-[100%]'>
        <span className='m-2 p-3 w-[40px] h-[40px]  text-center bg-emerald-600 text-white rounded-full'>
            T
        </span>

        <div className="w-[80%] flex flex-col ml-6 ">
            <span className='text-[14px]'>
Transport
            </span>

<small className='text-[11px] text-gray-500 my-1'>
{date}
</small>
        </div>


        <span className='text-sm  '>
           {formatNumber(value)}
        </span>
    </article>
    )
}