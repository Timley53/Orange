import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { MdSavings, MdDelete } from 'react-icons/md'
import { EachSavingsList } from './SavingsArticle'
import { FaCaretRight } from 'react-icons/fa'
import { SavingsContext } from './Savings'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseMenu } from '../../../../store/ui/uiStateSlice'

function MainSavings() {
    // const {showSide} = useContext(SavingsContext)
    const dispatch = useDispatch()
    const allSavings = useSelector((state)=> state.userData?.userData?.savings)

//   const [showList, setShowList] = useState(false)

const openMenu = useSelector((state)=> state.uiState.openMenu)

useEffect(()=>{
  
  dispatch(openCloseMenu({close: false}))

},[])






  return (


     <div className={` flex w-[100%] h-[100%] border-2 sm:w-[100%]`} >

    <div className="flex h-[100%]  flex-col w-[75%]  border-2">
    <div className='w-[100%] h-[10%] md:mt-16 border-2 bg-red-400'>

    </div>


    <div className="w-[100%] h-[90%]"></div>


    </div>

    <div className='w-[25%] h-[100%]'>

    </div>


   
        
    </div> 


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