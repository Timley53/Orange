import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { MdChevronRight, MdSavings, MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { calcAllSavings, calcPercentage, formatNumber, reduceGoalsCurr } from '../../../resources/utils'
import { GiPiggyBank } from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import { deleteSavingsCurrent, deleteSavingsPlan, editSavingsPlan } from '../../../store/user/userQueries'

const SavingsContext = createContext(null)


 function Savings() {
  const [showPlanDetails, setShowPlanDetails] = useState(false)
  const [planDetails, setPlanDetails] = useState(null)
  



  return (
    <SavingsContext.Provider value={{showPlanDetails, setShowPlanDetails, planDetails, setPlanDetails}}>


    <div className='w-[100%] flex h-[100%]'>
      
      <SavingsPlan />


      {planDetails && <PlanDetails/> }
      
      </div>
    </SavingsContext.Provider>
  )
}

export default Savings


export function SavingsPlan({}){
  const {showPlanDetails, setShowPlanDetails, } = useContext(SavingsContext)

  const allSavings = useSelector((state)=> state.userData.userData?.savings?.goals)
  const [planList, setPlanList] = useState([...allSavings])

  const [postPerpage, setpostPerpage] = useState(6)
  const [currentPage, setcurrentPage] = useState(1)

  const numberOfPages = Math.ceil(allSavings.filter(plan => reduceGoalsCurr(plan.current) < plan.target).length / postPerpage)

const start = (currentPage - 1) * postPerpage
const end = currentPage * postPerpage 


const next = ()=>{
  setcurrentPage(currentPage + 1)

}


const prev = ()=>{
  // console.log(currentPage)
  setcurrentPage(currentPage - 1)
}



  // console.log(allSavings);


  return(
    <div className={`w-[60%] flex flex-col  ${showPlanDetails ? 'sm:hidden ': 'flex'} sm:w-[100%]`} >


<div className="w-[100%] h-[90%] flex flex-col items-center">
  {
     allSavings.length > 0 && allSavings.filter(plan => reduceGoalsCurr(plan.current) < plan.target).slice(start, end).map((goals, i) =>{
      return (
        <SavingsArticle  key={i + 1} {...goals} />
      )
    })
  }

  {
   allSavings.length < 1 && <div className="w-[100%] h-[100%] text-lg border-2 flex justify-center  items-center">
    No Savings Plan 
   </div>
  }

</div>


  <div className="pagination h-[10%] rounded-sm flex items-center justify-center">

<Pagination currentPage={currentPage} numberOfPages={numberOfPages} prev={prev} next={next} />
  </div>
    </div>
  )
}




function SavingsArticle({title, id, current, target,  }){

  const {showPlanDetails, setShowPlanDetails, planDetails, setPlanDetails} = useContext(SavingsContext)

  // console.log(calcPercentage(calcAllSavings(current) ,target))

  const handleSavingsArticleClick =()=>{
    const newPlanDetails = {
      title: title, 
      planId:id,
       current:current,
        target : target,
    }

    setShowPlanDetails(true)
    setPlanDetails(newPlanDetails)
  }
 

  return(
      <article className="w-[97%] md:w-[97%]  sm:w-[100%] flex p-1 py-1 my-1 items-center border-2 m rounded cursor-pointer" 
      onClick={()=>{
        handleSavingsArticleClick()    
}
    }    >

      <span className='w-[35px] h-[35px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
      <MdSavings/>
      </span>

      <div className="ml-5 flex flex-col w-[75%]">
  <span className='text-xs'> 
      {(title[0].toUpperCase() + title.slice(1))}
  </span>
  <span  className='text-xs'>
       {formatNumber(calcAllSavings(current))} , {formatNumber(target)}
  </span>

  <div className='h-[15px] my-1 bg-green-200 rounded-md w-[50%]'>
      <div className='h-full bg-green-600 rounded-l-md' style={{
        width: `${calcPercentage(calcAllSavings(current),target)}% `
      }}>

      </div>

  </div>


      </div>


      <button className="hover:text-rose-300 transition-all text-lg p-1"
>
          <MdChevronRight/>
      </button>
  </article>
  )
}



export function PlanDetails({ }){

  const {showPlanDetails, setShowPlanDetails, planDetails, setPlanDetails} = useContext(SavingsContext)
  const dispatch = useDispatch()
  const userId = useSelector((state)=> state.userData.DocumentId)


  const {title,planId,target,current} = planDetails

    // console.log(planDetails)



  const [postPerpage, setpostPerpage] = useState(5)
  const [currentPage, setcurrentPage] = useState(1)

  const numberOfPages = Math.ceil(planDetails?.current?.length / postPerpage)

const start = (currentPage - 1) * postPerpage
const end = currentPage * postPerpage 


const next = ()=>{
  setcurrentPage(currentPage + 1)
}


const prev = ()=>{
  // console.log(currentPage)
  setcurrentPage(currentPage - 1)
}

/////////delete fxn
function deleteFxn(){

  dispatch(deleteSavingsPlan({
    userId,
    planId
  }))

  setShowPlanDetails(false)
  setPlanDetails(null)
}



const [editPlan, setEditPlan] = useState(false)

// console.log(!editPlan && current.length < 1)

const handleCurrentDeleteFxn = (planId,id, userId)=>{
  dispatch(deleteSavingsCurrent({
   planId, 
   currentId: id,
   userId
  }))
  setShowPlanDetails(false)
  setPlanDetails(null)
 }


  return(
    <div className={` w-[40%] h-[100%] ${showPlanDetails ? 'flex flex-col sm:flex sm:w-[100%] ':' sm:hidden'} p-2 `}>
{  showPlanDetails && (  


  <>
    <div className="w-[100%] flex items-end justify-end text-sm">

      <button className='mx-4 hover:text-orange-400 transition-all text-lg' onClick={()=>deleteFxn()}>
        <MdDelete/>
      </button>

      <button className='mx-4 hover:text-orange-400 transition-all' onClick={()=>setEditPlan(!editPlan)}>
        edit
      </button>

<button className='mx-4 hover:text-rose-400 ' onClick={()=>{
  setShowPlanDetails(false)
  setPlanDetails(null)
}}> 
  <ImCross/>
</button>

    </div>

    <div className="details my-2">
    Title: {title[0]?.toUpperCase() + title.slice(1)}
    <br />

    Target: {target}
    <br />
    Current Balance: {calcAllSavings(current)}
  
    </div>

    <div className="savinng-current flex flex-col items-center w-[100% h-[70%] rounded ">

    { !editPlan && current.length < 1 &&  <div className="w-[100%] h-[100%] flex items-center justify-center">
      No current savings
     </div> 
      }


      {
     !editPlan && current?.slice(start, end)?.map(cur => <SavingDetailsArticle key={cur.id} {...cur} planId={planId} handleCurrentDeleteFxn={handleCurrentDeleteFxn}/> )}
     
     
      {
        editPlan && <EditPlanForm {...planDetails} />
      }

    </div>


<div className="pagination w-[100%] justify-center h-[10%] flex items-center">

<Pagination currentPage={currentPage} numberOfPages={numberOfPages} prev={prev} next={next} />

  </div>
  </>

)}  

{
  !showPlanDetails && <div className="w-[100%] h-[100%] flex justify-center items-center">
    No plans selected
  </div> 
}
    </div>
  )
}




function SavingDetailsArticle({amount, date, id, planId, handleCurrentDeleteFxn}){
 
  const dispatch = useDispatch()
  const userId = useSelector((state)=> state.userData.DocumentId)

 


  return(
    <article className="flex p-2 m-1 w-[95%] border-2 items-center justify-between text-sm rounded-md bg-emerald-100 bg-opacity-0.5">

      <span className='w-[35px] h-[35px] bg-emerald-500 rounded-full flex items-center text-white justify-center text-2xl'>
        <GiPiggyBank className='mx-auto'/>
      </span>

      <div>
        {formatNumber(amount)}
      </div>

      <div className='text-sm'>
        {date}
      </div>

      <button className="hover:text-rose-600 mx-4" 
      onClick={()=>handleCurrentDeleteFxn(planId,id, userId)}>
        <MdDelete/> 
      </button> 
    </article> 
  )
}


////////////////////////
function EditPlanForm({title,planId,target,current}){

  const [newTarget, setNewTarget] = useState(0)
  const [inputError, setInputError] = useState(false)

  const userId = useSelector((state)=> state.userData.DocumentId)

  const dispatch = useDispatch()

  function editPlanFxn(e){
    e.preventDefault()

    if(!newTarget){
      setInputError(true)
      return
    }
    dispatch(editSavingsPlan({
      userId,
      planId,
      newTarget
    }))
  }


  return (
    <form action="" className='flex flex-col items-center w-full text-center' onSubmit={editPlanFxn}>

      <label htmlFor="" className='w-full text-center m-2'>
    <h1 className='text-lg text-emerald-400'>Title</h1>
    <span>{title[0]?.toUpperCase() + title.slice(1)}</span>
      </label>

      <label htmlFor=" className='w-full text-center m-2">
        <h1 className='text-lg text-emerald-400'>Current Balance</h1>
        <span>{calcAllSavings(current)}</span>
        </label>

<label htmlFor="" className='w-full text-center m-2'>
  <h1 className='text-lg text-emerald-400'>Target</h1>
  <span>{target}</span>
</label>

<div>
  <input type="number" value={newTarget} onChange={(e)=>{
    setNewTarget(e.target.value)
    setInputError(true)
  }} className='p-1 border-2 rounded'/>
</div>
{
inputError && <span className='text-red-400 text-xs'>
Input valid character
</span>
}
<button className='m-2 w-[40%] p-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-200 transition-all'>Submit</button>

    </form>
  )
}