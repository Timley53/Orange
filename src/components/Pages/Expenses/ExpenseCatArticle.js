import React from 'react'
import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings} from 'react-icons/md'

import {GiClothes} from 'react-icons/gi'
import { calcPercentage, formatNumber } from '../../../resources/utils'

const chooseIcon = (type)=>{

    if(type === 'transport'){
        return <MdOutlineEmojiTransportation/>
    } else if(type === 'food'){
        return <MdOutlineFastfood/>
    }else if(type === 'utility'){
        return <MdOutlineCable/>
    } else if(type === 'entertainment'){
        return <MdOutlineLiveTv/>
    } else if(type === 'clothing'){
        return <GiClothes/>
    } else{
        return 
    }


}


export default function CategoryArticle({name, budget, exp}){


// console.log(exp);
        const calcTotalExp = (expArr)=>{

            return expArr.reduce((acc, cur)=>{
                return acc + Math.abs(cur.value)
            },0)
        }

        const returnWidthPercent = () => {
          const percentageValue =  Math.trunc(calcPercentage(calcTotalExp(exp), budget))

        //   if(percentageValue > 0 && percentageValue < 5 ){
        //     return 5
        // } else
          
         if(percentageValue > 0 && percentageValue < 10){
            return 10
        }else if(percentageValue > 10 && percentageValue < 20){
            return 15
        }else if(percentageValue > 20 && percentageValue < 30){
            return 25
        }else if(percentageValue > 30 && percentageValue < 40){
            return 35
        }else if(percentageValue > 40 && percentageValue < 50){
            return 45
        }else if(percentageValue > 50 && percentageValue < 60){
            return 55
        }else if(percentageValue > 60 && percentageValue < 70){
            return 65
        
        }else if(percentageValue > 70 && percentageValue < 80){
            return 75
        
        }else if(percentageValue > 80 && percentageValue < 90){
            return 85
        
        }else if(percentageValue > 90 && percentageValue < 100){
            return 95
        }else if(percentageValue >= 100){
            return 100
        }

    }
        // console.log(Math.trunc(calcPercentage(calcTotalExp(exp), budget)));
        // calcPercentage(calcTotalExp(exp), budget)
    return(


        

        <article className='w-[100%] flex p-2 justify-center items-center py-3'>

        <span className='text-3xl p-3 bg-rose-500 text-white w-[42px] h-[42px] rounded-full flex items-center justify-center'>
        {chooseIcon(name)}
        </span>

        <div className="title-amount ml-10 w-[45%] ">
            <div className="text-sm">
                {name[0].toUpperCase() + name.slice(1)}
            </div>

            <small className='text-xs text-rose-500'>
            {`${formatNumber(calcTotalExp(exp))} /  ${(formatNumber(budget))} `}
            </small>
      


        </div>

        <div className="progress bg-rose-300 h-[15px] rounded-md w-[40%]">
            <div className={`h-full bg-rose-500 rounded-l-md`} 
            style={{
                width:`${Math.trunc(calcPercentage(calcTotalExp(exp), budget))
                }%`, 
            }}
            >

            </div>
        </div>
       </article>
    )
}
