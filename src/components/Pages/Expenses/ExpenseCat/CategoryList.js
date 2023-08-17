import React from 'react'
import CategoryArticle from '../ExpenseCatArticle'

import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings, MdDelete} from 'react-icons/md'

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

export function CategoryList() {
  return (
    <div className='w-[100%] h-[90vh] md:h-[80vh] sm:h-[73vh] flex flex-wrap items-start p-1 rounded-md  overflow-y-scroll'>

    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
    <ExcategoryArticle/>
   
    

    </div>
  )
}

function ExcategoryArticle(){

  return(


  

      <article className='w-[48%] sm:w-[100%] flex p-2 justify-center items-center py-3 border-2 m-1 rounded-md'>

      <span className='text-3xl p-3 bg-rose-500 text-white w-[42px] h-[42px] rounded-full flex items-center justify-center'>
      {chooseIcon('food')}
      </span>

      <div className="title-amount ml-4 w-[45%] ">
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


      <button className='mx-3 p-2 hover:text-gray-500 text-lg'>
        <MdDelete/>
      </button>
     </article>
  )
}
