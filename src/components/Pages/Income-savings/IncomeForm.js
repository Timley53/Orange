import React from 'react'
import { ImCross } from 'react-icons/im'

function IncomeForm({addIncome,setaddIncome}) {
  return (
    <div
    className={`flex w-[100%] flex-col items-center`}
    >
        
        <button className='self-end m-3'
        
        onClick={()=>setaddIncome(!addIncome)}>
            <ImCross/>
        </button>


        
        <form action="" className='w-[80%] flex flex-col '>

        <input type="number"  className='border-2 border-emerald-400 rounded p-2 self-center' placeholder='Amount'/>

<button className='p-3 bg-emerald-600 hover:bg-emerald-400 self-center px-6  my-3'> 
    Submit
</button>


        </form>

        
        </div>
  )
}

export default IncomeForm