import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSavingsPlan, saveNewFund } from '../../../store/user/userQueries'






function SavingsAddNew(){


    const [newSaveAmount, setNewSaveAmount] = useState(0)
    const [newSavePan, setNewSavePlan] = useState('')
    const [addPlan, setAddPlan] = useState(false)
  
    const [planTitle, setPlanTitle] = useState('')
    const [planGoals, setPlanGoals] = useState(0)
  
  
    const [validCharacter, setvalidCharacter] = useState('')
  
  ///create states from amount and plan and setup the contolled input logic 
  
  
      const savingGoals = useSelector(state => state.userData.userData.savings.goals)
      const userId = useSelector(state => state.userData.DocumentId)
      const dispatch = useDispatch()

  
      const savings = useSelector((state)=> state.userData.userData?.savings.goals)
  
  
  
  // console.log(savings, newSavePan);
  
  
  const handleCreatePlanSubmit = (e)=>{
      e.preventDefault()
      
    if(!planTitle || !planGoals){
      setvalidCharacter('Please input the proper value') 
      return
     }
      
     dispatch(createSavingsPlan(
      {
        userId,
        planTitle,
        planGoals 
      }
     ))
     setvalidCharacter('') 
     return
  
  
  }
  
  
  const handleSaveNewFund = (e)=>{
    e.preventDefault()
  
  
  
    if(!newSaveAmount && !newSavePan){
      setvalidCharacter('Please input the proper value') 
      return
  
    }
    
    dispatch(saveNewFund({
      userId,
      amount:newSaveAmount,
      plan: newSavePan,
    }))
    setvalidCharacter('') 
    return
  
  }
  
  
    return(
      <section className='w[100%] flex flex-col items-center ' >
  
      
        <div className="w-[60%] sm:w-[90%] flex p-2">
            <button className={`w-[48%] m-2 p-2 ${addPlan ? 'bg-slate-300 rounded-md' : ''}`}
            onClick={()=> setAddPlan(true)}
            >Create saving plan</button>

            <button className={`w-[48%] m-2 p-2 ${!addPlan ? 'bg-slate-300 rounded-md' : ''}`}
            onClick={()=> setAddPlan(false)}
            >Save new funds</button>
        </div>
  {
    !addPlan && 
    <form action="" className='w-[50%] sm:w-[90%] sm:mt-10 flex flex-col items-center m-3 bg-emerald-100 p-2 rounded-md shadow-md relative' onSubmit={handleSaveNewFund}>
  
   
    
      <h2 className='my-3 mt-4 text-lg'>Add Funds To Plan</h2>
  
      <label htmlFor="amount" className='w-[50%] my-1'>
        <span>Title </span>
        <input type="number" name="amount" className='border-2 border-emerald-300 w-[100%] rounded' value={newSaveAmount} onChange={(e)=>setNewSaveAmount(e.target.value)} required/>
      </label>
  
  
      <label htmlFor="ChoosePlan" className='my-2 sm:my-4 text-sm'>
        <span>Choose plan:</span>
  
      <select name="plan" id="" className='m-3 ml-0    bg-transparent border-2 border-emerald-300 px-2 rounded text-sm'  value={newSavePan} onChange={(e)=>setNewSavePlan(e.target.value)} required>
        
  
  <option value="" className=''>Select saving plan</option>
      {
        savings && savings.map(goals => {
          const {title , id} = goals
  
          return( 
            <option key={id} value={id}>
              {title[0].toUpperCase() + title.slice(1)}
            </option>
          )
        })
      }
  
      </select>
        </label>
  
        {
  validCharacter &&
    <span className='mx-auto text-red-400 text-sm m-2' >{validCharacter}</span>
  
  }
  
  
        <button className='m-2 my-4 p-2 px-4 rounded bg-emerald-400 text-sm hover:bg-emerald-300 '> 
          Submit
        </button>
  
    </form>
  
  //DIsplays adding new Saving plan
  
  
    || addPlan && 
    <form action="" className='w-[50%] sm:w-[90%] sm:mt-10 flex flex-col items-center m-3 bg-emerald-100 p-2 rounded-md shadow-md relative' onSubmit={handleCreatePlanSubmit}>
  
  
      <h2 className='my-3 mt-4 text-base'>Create a New Saving Goal</h2>
  
      <label htmlFor="PlanName" className='w-[50%] my-1'>
        <span>Title </span>
        <input type="text" name="PlanName" className='border-2 border-emerald-300 w-[100%] rounded' value={planTitle} onChange={(e)=>setPlanTitle(e.target.value)} required/>
      </label>
  
  
     <label htmlFor="planTarget" className='my-1 w-[50%]'>
      <span>Target</span>
      <input type="number" name="planTarget" id="" className='border-2 border-emerald-300 w-[100%] rounded'  value={planGoals} onChange={(e)=> setPlanGoals(e.target.value)} required/>
     </label>
  {
  validCharacter &&
    <span className='mx-auto text-red-400 text-sm m-2'>{validCharacter}</span>
  
  }
        <button className='m-2 my-4 p-2 px-4 rounded bg-emerald-400 text-sm hover:bg-emerald-300 '> 
          Submit
        </button>
  
    </form>
  }
  
      
  
  
  
      </section>
  
  )
  }
  
  
  
  
  export default SavingsAddNew