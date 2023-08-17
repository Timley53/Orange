import React, { useContext } from 'react'
import { useState } from 'react'
import { MdSavings, MdDelete } from 'react-icons/md'
import { EachSavingsList } from './SavingsArticle'
import { FaCaretRight } from 'react-icons/fa'
import { SavingsContext } from './Savings'

function MainSavings() {
    const {showSide} = useContext(SavingsContext)

  const [showList, setShowList] = useState(false)







  return (


  !showList &&  <div className={` ${showSide ? 'w-[75%] sm:hidden': 'w-[75%] sm:w-[100%]'} `}>

    <div className="flex overflow-y-scroll  flex-wrap h-auto w-[100%]">

<SavingsArticle showList={showList} setShowList={setShowList}  />
<SavingsArticle showList={showList} setShowList={setShowList}  />
<SavingsArticle showList={showList} setShowList={setShowList}  />
<SavingsArticle showList={showList} setShowList={setShowList}  />
    </div>


   
        
    </div> || showList && <EachSavingsList  showList={showList} setShowList={setShowList} showSide={showSide}/>



  )
}

export default MainSavings


function SavingsArticle({setShowList}){

    const {listObject, setlistObject} = useContext(SavingsContext)

    return(
        <article className="w-[30%] md:w-[40%] h-[70px]  sm:w-[100%] flex p-2 py-1 items-center border-2 m-1 rounded">
 
        <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
        <MdSavings/>
        </span>

        <div className="ml-6 flex w-full flex-col ">
    <span className='text-xs'> 
        title
    </span>
    <span  className='text-xs'>
        amount / remaining
    </span>

    <div className='h-[15px] my-1 bg-green-200 rounded-md w-[50%]'>
        <div className='h-full bg-green-600 rounded-l-md w-[40%]'>

        </div>

    </div>


        </div>


        <button className="hover:text-rose-300 transition-all text-lg p-1"
onClick={()=>{
    setlistObject({
        title: 'Rent',
        goals: 2000,
        position: 1234

    })
    setShowList(true)
}}
        >
            <FaCaretRight/>
        </button>
    </article>
    )
}