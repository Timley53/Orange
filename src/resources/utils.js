import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings} from 'react-icons/md'

import {GiClothes} from 'react-icons/gi'




export const characterTest = (username) =>{
    const characterRule = /^[A-Za-z0-9]+$/
  
    if(characterRule.test(username)){
      return true
    } else{
      return false
    }
    }

    export const callTimer = (variable, setState) => {
      variable = setTimeout(()=>{
        setState(true)
     },2000)
   }
     

   const  categories = [
    {
        name:'food',
        budget: 3000,
        value: [-100,-300,-123,-145, -24], 
    },
    {
        name:'entertaiment',
        budget: 3000,
        value: [-10,-30,-23,-14, -24],     
       },
    {
        name:'utility',
        budget: 3000,
        value: [-12,-5,-12,-15, -94],            
    },
    {
        name:'transport',
        budget: 3000,
        value: [-199,-1300,-2123,-3145, -424],            
    },
]

export const reduceExpense = (arr)=>{
  const data = arr.reduce((acc,curr)=>{
    return acc + curr
  },0)

  // console.log(data);
  return data
}

export const calcPercentage = (part, total)=>{

  return (part/total) * 100

}


   export const producePieValues = (categories, sumTotal)=>{

        return categories?.map((cat, i)=>{
          return {
            x: i + 1,
            y: Math.abs(Number(calcPercentage(reduceExpense(cat.value), sumTotal).toFixed(1)))
          }

        })

   }

   export const totalBudget = (categories)=>{
    return categories?.reduce((acc,cat)=>{
      return acc + cat.budget
    },0)
   }

   //choose icons
 
export const chooseIcon = (type)=>{

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