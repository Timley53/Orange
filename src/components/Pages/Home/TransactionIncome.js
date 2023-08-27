import React, { useState } from 'react'
import {MdSavings} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { calcPercentage, formatNumber, reduceGoalsCurr } from '../../../resources/utils'

function HomeIncomeAndSavings() {
  const [showSavings,setShowSavings ] = useState(true)
  const savings = useSelector((state)=> state.userData.userData?.savings?.goals)
  const income = useSelector((state)=> state.userData.userData?.income)
  // const exps = useSelector((state)=> state.userData.userData?.expenses?.categories)

  // console.log(income)


  return (
    <div className='w-[30%] md:w-[30%] sm:w-[99%] flex flex-col text-sm rounded-md my-4 bg-slate-100 shadow-md sm:mr-0'>
        <header className='relative w-[100%] rounded-t-md flex bg-slate-200' onClick={()=> setShowSavings(!showSavings)} >
            <button  className={`w-[50%]   p-3 ${showSavings ? 'text-orange-500': ''}`}>
                Savings 
                </button>

            <button className={`w-[50%]   p-3 ${!showSavings ? 'text-orange-500': ''}`}>Income</button >


           
        </header>


        

       {showSavings && <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit'>

         
            {

                savings && savings.length > 0 && savings.map(goal =>{

                    const {id} = goal
                    
                   return( <SavingsArtcile key={id} {...goal}/>)
                })  || savings && savings.length < 1 && <div className='w-full text-center my-auto'>
                No savings recorded
              </div>
            }

        </main> || !showSavings &&  <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit'>

{
  income && income.length > 0 && income.map(inc =>{
    return(
      <IncomeArticle key={inc.id}  {...inc}/>
    )
  })  || income && income.length < 1 && <div className='w-full text-center my-auto'>
    No income recorded
  </div>
}
</main> 
}
    </div>
  )
}

export default HomeIncomeAndSavings

const  SavingsArtcile = ({title,current, target}) =>{



  return(
      <article className="flex p-2 py-3 items-center justify-between w-[100%] border-b-2">

          <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
          <MdSavings/>
          </span>

          <div className="ml-3 flex flex-col w-[45%]">
      <span className='text-xs'> 
          {title[0].toUpperCase() + title.slice(1)}
      </span>
      <span  className='text-xs'>
          {formatNumber(reduceGoalsCurr(current))} / {formatNumber(target)}
      </span>

    

          </div>

          <div className='h-[15px] my-1 bg-green-200 rounded-md w-[40%]'>
          <div style={{
            width: `${calcPercentage(reduceGoalsCurr(current), target )}%`
          }} className='h-full bg-green-600 rounded-l-md'>

          </div>
      </div>

      </article>
  )
}

const  IncomeArticle = ({date, amount, title}) =>{

  return(
      <article title={title} className="w-full flex p-2 py-3 items-center justify-between border-b-2">

          <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
          <MdSavings/>
          </span>

          <div className="ml-6 flex text-sm">
{date}       
   </div>

      <div className=' my-1  rounded-m'>
       {formatNumber(amount)}
      </div>
      </article>
  )
}