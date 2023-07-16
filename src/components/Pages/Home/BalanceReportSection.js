import React, { useState } from 'react'
import BalanceGrid from './BalanceGrid'
import ReportPie from './ReportPie'
import ChartTest from './ChartTest'
import { FaExpand, FaExpandAlt } from 'react-icons/fa'
import { MdExpand, MdExpandMore } from 'react-icons/md'
import { BsArrowsExpand } from 'react-icons/bs'


function BalanceReportSection() {

    const [showReport, setShowReport] = useState(true)


  return (
<section className='w-full flex items-start  md:items-center gap-2 flex-wrap  p-2'>


  

<BalanceGrid/>


 <div className="reports  w-[300px] h-auto md:h-auto flex flex-col items-center  bg-[#f3f2ef49] rounded-md p-1  ">
 <span className=' w-full flex justify-between'>
  
  <span className='ml-3'>Monthly Report</span>

  <button className='text-orange-500 text-lg' onClick={()=> setShowReport(!showReport)}>
   {showReport && <MdExpand/> || !showReport &&  <BsArrowsExpand/> } 
  </button>
  
  </span>

{  /* <ReportPie/>*/ <ChartTest/>}


{showReport && <div className='text-sm w-[100%]'>
<small>

  1.food. 2.transport
  1.food. 2.transport
  1.food. 2.transport
  1.food. 2.transport
</small>
        </div>
         }





{/* <div className=" ">

<small >
<span className='font-bold'>Total Overall Expense:</span> $1,800.00

</small>


<button className='text-sm m-3 bg-orange-400 p-1 hover:bg-transparent hover:text-orange-500 rounded'
    onClick={()=> setShowReport(!showReport)}
>{showReport ? 'Hide report': 'Show report'}</button>

</div> */}


 </div>
</section>  )
}

export default BalanceReportSection