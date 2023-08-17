import React, { createContext } from 'react'
import MainSavings from './MainSavings'
import SavingsSide from './SavingsSide'
import { useState } from 'react'
import { MdViewSidebar } from 'react-icons/md'
import { ImCross } from 'react-icons/im'

export const SavingsContext = createContext(null)


function Savings() {
  const [listObject, setlistObject] = useState('')

  const [showSide, setShowSide] = useState(false)

  const [addNew, setAddNew] = useState(false)
  const [saveNew, setSaveNew] = useState(true)
  const [addPlan, setAddPlan] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)


const formProps ={
  addNew,setAddNew,saveNew,setSaveNew,addPlan,setAddPlan
}

  return (


    <SavingsContext.Provider value={{listObject, setlistObject, showSide, setShowSide}}>


    <div className="w-[100%] border-2 h-[85vh] md:h-[75vh] flex flex-col overflow-clip">

      <header className='flex bg-gray-300 w-[100%] justify-end items-center p-2'>
    <button className='bg-emerald-500 hover:bg-emerald-200 p-2 mx-2 relative' onClick={()=>
      setShowDropDown(!showDropDown)}>
      Add New

{showDropDown &&
      <div className='absolute h-[90px] bg-emerald-600 text-white w-[180px] rounded -left-[100px] top-10 z-10 flex flex-col items-start  text-sm'>

        <button className='p-2 py-3 hover:bg-emerald-300 hover:text-black transition-all border-b-2 w-[100%] text-left' onClick={()=>{
          setAddNew(true)
          setSaveNew(true)
          setAddPlan(false)
          
          
          }}>Save</button>

        <button className='p-2  py-3 hover:bg-emerald-300 hover:text-black transition-all  w-[100%] text-left' 
        onClick={()=>{
          setAddNew(true)
          setAddPlan(true)
          setSaveNew(false)
          
        }}
        >Create Saving Plan</button>

      </div>
}
    </button>

    {/* <button>
      history
    </button> */}

    <button className='hidden sm:flex text-xl  sm:mx-2 sm:p-1' onClick={()=> setShowSide(!showSide)}>
      
      <MdViewSidebar/>
    </button>
      </header>





{
addNew && <SavingsForm {...formProps} /> ||  <main className='w-[100%] h-[100%] flex'>

  <MainSavings/>
  <SavingsSide/>


</main>

}

     
        
    </div>
    </SavingsContext.Provider>
  )
}

export default Savings





function SavingsForm({addNew,setAddNew,saveNew,setSaveNew,addPlan,setAddPlan}){


  const [newSaveAmount, setNewSaveAmount] = useState('')
  const [newSavePan, setNewSavePlan] = useState('')

  const [planTitle, setPlanTitle] = useState('')
  const [planGoals, setPlanGoals] = useState('')

///create states from amount and plan and setup the contolled input logic 

console.log(newSaveAmount,newSavePan );


  const goals = [
    {
        title:'phone',
        target: 200,
        current: [30, 40,10]
    },
    {
        title:'Laptop',
        target: 2100,
        current: [310, 140,10]
    },
    {
        title:'Rent',
        target: 2000,
        current: [300, 120,310]
    }
]


  return(
    <section className='w[100%] flex flex-col items-center '>
{
  saveNew && 
  <form action="" className='w-[50%] sm:w-[90%] sm:mt-10 flex flex-col items-center m-3 bg-emerald-100 p-2 rounded-md shadow-md relative'>

  <button className='absolute right-5 hover:text-rose-300 text-sm' onClick={(e)=>{
    e.preventDefault()


    setSaveNew(false)
    setAddNew(false)

  }}>
    <ImCross/>
  </button>

    <h2 className='my-3 mt-4 text-lg'>Add Funds To Plan</h2>

    <label htmlFor="amount" className='w-[50%] my-1'>
      <span>Amount </span>
      <input type="number" name="amount" className='border-2 border-emerald-300 w-[100%] rounded' value={newSaveAmount} onChange={(e)=>setNewSaveAmount(e.target.value)} required/>
    </label>


    <label htmlFor="ChoosePlan" className='my-2 sm:my-4'>
      <span>Choose plan:</span>

    <select name="plan" id="" className='m-3 ml-0    bg-transparent border-2 border-emerald-300 px-2 rounded'  value={newSavePan} onChange={(e)=>setNewSavePlan(e.target.value)}>
      

     {goals.map(goal =>{

      const {title} = goal

      return(
          <option value={title}>
            {title[0].toUpperCase() + title.slice(1)}
          </option>
        )
        
      })}


    </select>
      </label>


      <button className='m-2 my-4 p-2 px-4 rounded bg-emerald-400 text-sm hover:bg-emerald-300 '> 
        Submit
      </button>

  </form>

//DIsplays adding new Saving plan


  || addPlan && 
  <form action="" className='w-[50%] sm:w-[90%] sm:mt-10 flex flex-col items-center m-3 bg-emerald-100 p-2 rounded-md shadow-md relative'>

  <button className='absolute right-5 hover:text-rose-300 text-sm' onClick={(e)=>{
    e.preventDefault()


    setSaveNew(false)
    setAddNew(false)
    setAddPlan(false)

  }}>
    <ImCross/>
  </button>

    <h2 className='my-3 mt-4 text-base'>Create a New Saving Goal</h2>

    <label htmlFor="PlanName" className='w-[50%] my-1'>
      <span>Amount </span>
      <input type="text" name="PlanName" className='border-2 border-emerald-300 w-[100%] rounded' value={planTitle} onChange={(e)=>setPlanTitle(e.target.value)} required/>
    </label>


   <label htmlFor="planTarget" className='my-1 w-[50%]'>
    <span>Target</span>
    <input type="number" name="planTarget" id="" className='border-2 border-emerald-300 w-[100%] rounded'  value={planGoals} onChange={(e)=> setPlanGoals(e.target.value)} required/>
   </label>


      <button className='m-2 my-4 p-2 px-4 rounded bg-emerald-400 text-sm hover:bg-emerald-300 '> 
        Submit
      </button>

  </form>
}

    



    </section>

  )
}

