import React from 'react'

function AddNewExpense() {
  return (
    <div className='w-[90%] flex items-center flex-col sm:pb-16 '>

        <h1 className='text-base'>Add New Expense</h1>

        <form action="" className='w-[50%] md:w-[60%]  sm:w-[100%] flex  flex-col items-start justify-center  py-4 '>

            <label htmlFor='amount' className='text-sm mb-0 ml-14' >
        Amount
            <br />
            </label>


            <input type='number' name='amount' className='border-2 border-orange-400 rounded my-2 w-[70%] mt-0 p-1 self-center'/>


    <label htmlFor="newExpenseCategories" className=" mb-0 text-sm ml-14">
        Select Categories
    </label>

            <select name="newExpenseCategories" id="" className='border-2 border-orange-400 rounded ml-14 mt-1'>
                <option value="food">
                    food
                </option>
                <option value="drink">
                    drink
                </option>
                <option value="Entertainment">
                    Entertainment
                </option>
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