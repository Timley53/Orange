import React, { useState } from 'react'
import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings} from 'react-icons/md'

import {GiClothes} from 'react-icons/gi'



const chooseIcon = (type)=>{

    if(type === 'transport'){
        return <MdOutlineEmojiTransportation/>
    }

    if(type === 'food'){
        return <MdOutlineFastfood/>
    }

    if(type === 'utility'){
        return <MdOutlineCable/>
    }

    if(type === 'entertainment'){
        return <MdOutlineLiveTv/>
    }

    if(type === 'clothing'){
        return <GiClothes/>
    }


}

function CategorySavings() {
    const [showCategories,setShowCategories ] = useState(true)




  return (
    <div className='w-[30%] md:w-[40%] sm:w-[99%] flex flex-col text-sm rounded-md   sm:mr-0'>
        <header className='relative w-[100%] rounded-t-md flex bg-slate-100' onClick={()=> setShowCategories(!showCategories)} >
            <button  className={`w-[50%]   p-3 ${showCategories ? 'text-orange-500': ''}`}>
                Categories
                </button>

            <button className={`w-[50%]   p-3 ${!showCategories ? 'text-orange-500': ''}`}>Savings & Goals</button>


           
        </header>

        <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit'>

            {/* <CategoryArticle/>  
              map over and prop down details into each component
            <CategoryArticle/>
            <CategoryArticle/>
            <CategoryArticle/>
        <CategoryArticle/> */}

        <CategoryArticle/>
            <SavingsArtcile/>

        </main>

    </div>
  )
}




export default CategorySavings

const CategoryArticle = ()=>{

    return(
        <article className='w-[100%] flex p-2 justify-center items-center py-3'>

        <span className='text-3xl p-3 bg-rose-500 text-white w-[42px] h-[42px] rounded-full flex items-center justify-center'>
        {chooseIcon('food')}
        </span>

        <div className="title-amount ml-10 w-[45%] ">
            <div className="text-sm">
                Food
            </div>
            <small className='text-xs text-rose-500'>
                2,000 / 5,000
            </small>
      


        </div>

        <div className="progress bg-rose-300 h-[15px] rounded-md w-[40%]">
            <div className={`h-full bg-rose-500 w-[40%] rounded-l-md`}>

            </div>
        </div>
       </article>
    )
}


const  SavingsArtcile = () =>{



    return(
        <article className="w-full flex p-2 py-3 items-center border-b-2">
 
            <span className='w-[45px] h-[45px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
            <MdSavings/>
            </span>
            <div className="ml-6 flex flex-col">
        <span className='text-xs'> 
            title
        </span>
        <span  className='text-xs'>
            amount / remaining
        </span>

        <div className='h-[15px] my-1 bg-green-200 rounded-md'>
            <div className='h-full bg-green-600 rounded-l-md w-[40%]'>

            </div>
        </div>


            </div>
        </article>
    )
}