import React from 'react'
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


export default function CategoryArticle(){

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
