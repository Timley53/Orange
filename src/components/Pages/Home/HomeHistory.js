import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeHistory() {
  return (
    <div className='w-[35%] md:w-[30%] sm:w-[100%]  mx-3 sm:mx-0 sm:mt-5 bg-gray-100'>
        <header className='text-sm flex justify-between p-2 bg-gray-300'>

            <span>Last 5 Transaction</span>


            <NavLink className={`text-sm text-orange-600 hover:text-gray-500 transition-all`}>View all</NavLink >
        </header>

        <div className="transactions w-full flex flex-col overflow-y-scroll overflow-edit h-[400px]">

          

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
            <span className='text-[14px]'>
Transport
            </span>

<small className='text-[11px] text-gray-500 my-1'>
12/12/2020
</small>
        </div>


        <span className='text-sm'>
           -$200
        </span>
    </article>
    )
}