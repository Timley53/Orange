import React, { useState } from 'react'
import {MdSavings} from 'react-icons/md'

function HomeIncomeAndSavings() {
  const [showSavings,setShowSavings ] = useState(true)



  return (
    <div className='w-[30%] md:w-[40%] sm:w-[99%] flex flex-col text-sm rounded-md   sm:mr-0'>
        <header className='relative w-[100%] rounded-t-md flex bg-slate-100' onClick={()=> setShowSavings(!showSavings)} >
            <button  className={`w-[50%]   p-3 ${showSavings ? 'text-orange-500': ''}`}>
                Savings 
                </button>

            <button className={`w-[50%]   p-3 ${!showSavings ? 'text-orange-500': ''}`}>Income</button>


           
        </header>

        <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit'>

            {/* <CategoryArticle/>  
              map over and prop down details into each component
            <CategoryArticle/>
            <CategoryArticle/>
            <CategoryArticle/>
        <CategoryArticle/> */}

        <IncomeArticle/>
            <SavingsArtcile/>

        </main>

    </div>
  )
}

export default HomeIncomeAndSavings

const  SavingsArtcile = () =>{



  return(
      <article className="w-full flex p-2 py-3 items-center border-b-2">

          <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
          <MdSavings/>
          </span>
          <div className="ml-6 flex flex-col">
      <span className='text-xs'> 
          title
      </span>
      <span  className='text-xs'>
          amount / remaining
      </span>

      <div className='h-[15px] my-1 bg-green-200 rounded-md'>
          <div className='h-full bg-green-600 rounded-l-md w-[40%]'>

          </div>
      </div>


          </div>
      </article>
  )
}

const  IncomeArticle = () =>{



  return(
      <article className="w-full flex p-2 py-3 items-center border-b-2">

          <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
          <MdSavings/>
          </span>
          <div className="ml-6 flex flex-col">
      <span className='text-xs'> 
          title
      </span>
      <span  className='text-xs'>
          amount / remaining
      </span>

      <div className='h-[15px] my-1 bg-green-200 rounded-md'>
          <div className='h-full bg-green-600 rounded-l-md w-[40%]'>

          </div>
      </div>


          </div>
      </article>
  )
}