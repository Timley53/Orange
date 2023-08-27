import React from 'react'
import { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import { ImCross } from 'react-icons/im'
import AddNewExpense from '../Expenses/AddNew/AddNewExpense'
import { useDispatch, useSelector } from 'react-redux'
import { addIncome } from '../../../store/user/userQueries'
import LoadingView from '../Expenses/LoadingView'


function AddNewForms({addNewForms, setAddNewForms}) {
    const [addExpense, setAddExpense] = useState(true)
    const loading = useSelector(state => state.userQueries.loading)    // const [addIncome, setAddIncome] = useState(false)

  return (
    <div className='w-[85%] md:w-[98%] sm:w-[100%] h-[100%] bg-orange-300 bg-opacity-50 backdrop-blur-md fixed top-0 z-50 p-1 flex  flex-col items-center '>

        <header className='w-[60%]  flex justify-between py-1 p-2 sm:w-[100%]   bg-orange-300 rounded-sm my-3 relative mt-12 sm:mt-16' >

<button className={`${addExpense ?'bg-orange-400 shadow-md' : ''} p-3 h-[95%]  rounded-sm w-[49%]`}
onClick={()=>setAddExpense(true)}
>Add expense</button>


<button className={` ${!addExpense ? 'bg-orange-400 shadow-md' : ''} p-3 h-[95%]  rounded-sm w-[49%]`}
onClick={()=> setAddExpense(false)}
>Add income</button>


<button className={`absolute -right-20 -top-6 text-xl sm:-top-9 sm:right-5 hover:text-red-400 text-red-500 `} 
onClick={()=>setAddNewForms(false)}
>
    <ImCross/>
    
    </button>

        </header>


        <main className='w-[60%] sm:w-[95%] bg-amber-100 rounded h-[80%] ' >

{addExpense && <AddNewExpense setAddNewForms={setAddNewForms}
/> || <AddNewIncomeHome addNewForms={addNewForms}  setAddNewForms = {setAddNewForms}/>
}
        </main>


    </div>
  )
}

export default AddNewForms


export function AddNewIncomeHome({setAddNewForms, addNewForms}){

    const dispatch = useDispatch()
    const userId = useSelector((state)=> state.userData?.DocumentId)

    const [incomeAmount, setIncomeAmount] = useState(0)
    const [incomeTitle, setIncomeTitle] = useState('')
    const [invalidCharater, setInvalidCharater] = useState('')


    const handleAddIncome = (e)=>{
        e.preventDefault()
        if(!incomeAmount && !incomeTitle){
            setInvalidCharater('Please input valid character')
            return
        }

        dispatch(addIncome({
            userId,
            amount:incomeAmount,
            title:incomeTitle
        }))
        setAddNewForms(false)

    }

    return(
        <div
        className={`flex w-[100%] flex-col items-center`}
        >

            <h2 className='my-6'>Add New Income</h2>

            <form action="" className='w-[80%] items-center  flex flex-col ' onSubmit={handleAddIncome}>


                <label htmlFor="incomeAmount" className='w-[50%] m-3 mb-4'>Amount</label>
    
            <input type="number" name='incomeAmount' value={incomeAmount} onChange={(e)=>setIncomeAmount(e.target.value)} className='border-2 border-emerald-400 rounded p-2 self-center' placeholder='Amount' required/>

                <label htmlFor="incomeAmount" className='w-[50%] m-3 mb-4'>Title</label>
    
            <input type="text" name='incomeAmount' value={incomeTitle} onChange={(e)=>setIncomeTitle(e.target.value)} className='border-2 border-emerald-400 rounded p-2 self-center' placeholder='Online gig' required/>

            <span className='text-sm text-red-400 mx-auto mt-4'>{invalidCharater}</span>
    
    <button className='p-3 bg-emerald-600 hover:bg-emerald-400 self-center px-6  my-3'> 
        Submit
    </button>
    
    
            </form>
    
            
            </div>
    )
}