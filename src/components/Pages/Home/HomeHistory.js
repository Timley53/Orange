import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeHistory() {
  return (
    <div className='w-[35%] md:w-[50%] sm:w-[99%] mx-3 '>
        <header className='text-sm flex justify-between p-2 bg-gray-200'>

            <span>Last 5 Transaction</span>


            <NavLink className={`text-sm text-orange-600 hover:text-gray-500 transition-all`}>View all</NavLink >
        </header>

        <div className="transactions w-full flex flex-col ">

          

            <HomeHistoryArticle/>
            <HomeHistoryArticle/>
            <HomeHistoryArticle/>

        </div>

    </div>
  )
}

export default HomeHistory

export const HomeHistoryArticle = () =>{

    return(
        <article className='flex p-1 items-center  border-b-2'>
        <span className='m-2 p-3 w-[40px] h-[40px]  text-center bg-emerald-600 text-white rounded-full'>
            T
        </span>

        <div className="w-[50%] flex flex-col ml-4">
            <span className='text-base'>
Transport
            </span>

<small className='text-xs text-gray-500'>
12/12/2020
</small>
        </div>


        <span className=''>
           -$200
        </span>
    </article>
    )
}