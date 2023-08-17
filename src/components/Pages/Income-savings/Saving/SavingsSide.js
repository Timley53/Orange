import React from 'react'
import { useContext } from 'react'
import { SavingsContext } from './Savings'
import { MdSavings } from 'react-icons/md'

function SavingsSide() {
    const {showSide} = useContext(SavingsContext)

  return (
    <div
      className={`w-[25%] overflow-clip p-1 flex flex-col items-center ${showSide ?'sm:w-[100%]':'sm:hidden' }`}
    >

<h2 className='text-base'>Achievements</h2>

    <div className="w-[100%] h-[80%] items-center  flex flex-col overflow-y-scroll overflow-edit   rounded-md">

<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>
<SavingSideArticle/>


    </div>

    </div>
  )
}




export default SavingsSide


function SavingSideArticle(){

  return(
    <article className='w-[95%] p-2 flex bg-emerald-200 backdrop-blur-md bg-opacity-60 rounded-md my-1 '>
    

      <span className='w-[33px] h-[33px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
        <MdSavings/>
        </span>

        <div className="ml-6 flex w-full flex-col ">
    <span className='text-xs'> 
        title
    </span>
    <span  className='text-xs'>
        amount / remaining
    </span>

    


        </div>


    </article>
  )
}