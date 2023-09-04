import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { addIncome } from '../../../store/user/userQueries'

function IncomeForm({}) {
  const userId = useSelector((state)=> state.userData?.DocumentId)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [inputError, setInputError] = useState(false)

  const handleSubmitAddIncome = (e)=>{
  e.preventDefault()

  if(!title || !amount){
    setInputError(true)
    return
  }

  dispatch(addIncome({
    userId, amount, title
  }))

  setTitle('')
  setAmount('')
  setInputError(false)
  }


  return (
    <div
    className={`flex w-[100%] h-[100%] flex-col items-center`}
    >
        
        

        
        <form action="" className='w-[100%] h-[100%] flex flex-col items-center justify-center' onSubmit={handleSubmitAddIncome}>

        <input type="text"  className='border-2 border-emerald-400 rounded  m-2 p-2 self-center' placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} onFocus={()=> setInputError(false)}/>


        <input type="number"  className='border-2 border-emerald-400  m-2 rounded p-2 self-center' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} onFocus={()=> setInputError(false)}/>



{
  inputError && <div className="text-rose-500 text-center">
    Input valid character
  </div>
}


<button className='p-3 bg-emerald-600 hover:bg-emerald-400 self-center px-6  my-3'> 
    Submit
</button>


        </form>

        
        </div>
  )
}

export default IncomeForm