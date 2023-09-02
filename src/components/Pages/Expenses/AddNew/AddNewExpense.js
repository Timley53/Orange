import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewExpense } from '../../../../store/user/userQueries'
import LoadingView from '../LoadingView'

function AddNewExpense({setAddNewForms}) {

   




    const dispatch = useDispatch()

const [amount, setAmount] = useState(0)
const [chooseCategories, setChooseCategories] = useState('')
const [errorInput, setErrorInput] = useState('')
    
// console.log(chooseCategories)

const categories = useSelector(state => state.userData.userData.expenses.categories)
const userId = useSelector(state => state.userData.DocumentId)


    const handleSubmit= (e)=>{
        e.preventDefault()

        if(!amount || !chooseCategories){
            setErrorInput('Please input valid characters')
            return
        }
      
        dispatch(addNewExpense({
            amount,
            categories: chooseCategories,
            userId
        }))

        // if(setAddNewForms){
        //     setAddNewForms(false)
        // } 


    }



  return (
    <div className='w-[80%] flex items-center flex-col sm:pb-16 '>


        <h1 className='text-base'>Add New Expense</h1>

        <form action="" className='w-[50%] md:w-[60%]  sm:w-[100%] flex  flex-col items-start justify-center  py-2 ' 
        onSubmit={handleSubmit}
        >

            <label htmlFor='amount' className='text-sm mb-0 ml-14' >
        Amount
            <br />
            </label>


            <input type='number' name='amount' className='border-2 border-orange-400 rounded my-2 w-[70%] mt-0 p-1 self-center'
            value={amount}

            onChange={(e)=>setAmount(e.target.value)} required/>

    <span className={`mx-auto text-red-500 text-sm `}>{errorInput}</span>

    <label htmlFor="newExpenseCategories" className=" mb-0 text-sm ml-14">
        Select Categories
    </label>
    

            <select name="newExpenseCategories" id="" className='border-2 border-orange-400 rounded ml-14 mt-1' 
            value={chooseCategories} 
            onChange={(e)=>{ setChooseCategories(e.target.value)
                setErrorInput('')
            }}
             required>

                <option value="">
                    Default
                </option>

        {categories.map((cate, i) => {
            return(
                <option key={ i + 1} value={cate.name}>
                {cate.name}
            </option>
            )
        })} 

{/* 
                
                <option value="food">
                    food
                </option>
                <option value="drink">
                    drink
                </option>
                <option value="Entertainment">
                    Entertainment
                </option>

                 */}
            </select>

            <label htmlFor="newExpenseNotes" className='my-2 mb-0 text-sm ml-14' >
                Notes
            </label>

    <textarea name="newExpenseNotes" id=""  className='rounded p-1 border-2 border-orange-400 self-center my-2 mt-1 w-[70%] h-[200px]'>

    </textarea>

    <button className="w-[70%] bg-orange-400 hover:bg-orange-200 self-center p-2 m-4 my-5 rounded">
        Submit
    </button>




        </form>

    </div>
  )
}

export default AddNewExpense