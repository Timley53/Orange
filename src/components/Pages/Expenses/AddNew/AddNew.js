import React, { useState } from 'react'
import AddNewExpense from './AddNewExpense'
import CreateCategory from './CreateCategory'

function AddNew() {
    const [showAddNew, setShowAddNew] = useState(true)

  return (
    <div className='w-[90%] flex h-[60%] flex-col items-center'>

    <article className='tab w-[90%] bg-gray-200 p-2 flex m-2 '>

        <button className={`w-[50%] ${ showAddNew ? ' bg-white shadow-md': ''} p-2 rounded-sm`} onClick={()=>setShowAddNew(true)}>Add expense </button>

        <button className={`w-[50%] ${ !showAddNew ? ' bg-white shadow-md': ''}`} onClick={()=>setShowAddNew(false)}>Create category </button>

    </article>

{showAddNew && <AddNewExpense/> || <CreateCategory/>
}

    </div>
  )
}

export default AddNew