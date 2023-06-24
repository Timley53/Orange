import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className=''>
        
        <main className='w-[100%]'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AppLayout