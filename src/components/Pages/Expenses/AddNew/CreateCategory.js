import React from 'react'
import { useState } from 'react'
// import {useDispatch } from ''
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../../../store/user/userQueries'

function CreateCategory() {

  const dipatch = useDispatch()

  const userId = useSelector(state => state.userData.DocumentId)

  const [budgetCategory, setBudgetCategory] = useState('')
  const [budgetCategoryAmount, setbudgetCategoryAmount] = useState(0)

  const [errorInput, setErrorInput] = useState('')


  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!budgetCategory || !budgetCategoryAmount ){
      setErrorInput('Please input valid values')

      return 
    }
    dipatch(createCategory({
      amount: budgetCategoryAmount,
      categories: budgetCategory,
      userId
    }))
    // userId
  
  }
  

  return (
    <form className=" flex flex-col items-center w-[80%]  sm:w-[85%]" onSubmit={handleSubmit}>

      <h2>Create Budget Category</h2>


      <label htmlFor="" className="text-sm mt-3 w-[40%] md:w-[70%] sm:w-[90%]">
        New Budget's Title
        <br />
    <input type="text" className='w-full border-orange-500 border-2 p-1 rounded-md '  
    required
    value={budgetCategory} onChange={(e)=> setBudgetCategory(e.target.value)}
    />
      </label>

    <label htmlFor="" className="text-sm mt-3 w-[40%] md:w-[70%] sm:w-[90%]">
      Budget Amount
      <br />
    <input type="number" className='w-full border-2  border-orange-500 p-1 rounded-md ' 
    value={budgetCategoryAmount} onChange={(e)=> setbudgetCategoryAmount(e.target.value)}
    required
    />
    </label>

<span className='mx-auto text-sm text-red-500'>
  {errorInput}
</span>

  <button className='p-2 text-sm  bg-orange-500 hover:bg-orange-300 my-5 w-[40%]  md:w-[70%] rounded-md sm:w-[90%]'>Submit</button>
   
    </form>
  )
}

export default CreateCategory