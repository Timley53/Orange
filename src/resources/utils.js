import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings} from 'react-icons/md'

import {GiClothes} from 'react-icons/gi'


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
     

  export const  categories = [
    {
      name:'food',
      budget: 3000,

      exp: [
        {
         value: -100
        },
        
        {
         value: -300
        },
        
        {
         value: -123
        },
        
        {
         value: -145
        },
        
        {
         value: -24
        },
      ], 
  },
  
  {
    name:'entertaiment',
      budget: 3000,
      value: [
        {
          value: -10
         },
        {
          value: -30
         },
        {
          value: -23
         },
        {
          value: -14
         },
        {
          value: -24
         },
      ],     
    },

    
  {
    name:'utility',
    budget: 3000,
    value: [
      {
        value: -14
       },
      {
        value: -21
       },
      {
        value: -28
       },
      {
        value: -15
       },
      {
        value: -17
       },
    ],              
  },
  {
    name:'transport',
    budget: 3000,
    value:[
      {
        value: -101
       },
      {
        value: -32
       },
      {
        value: -213
       },
      {
        value: -140
       },
      {
        value: -247
       },
    ],              
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

  //  export const totalBudget = (categories)=>{
  //   return categories?.reduce((acc,cat)=>{
  //     return acc + cat.budget
  //   },0)
  //  }

   //choose icons
 
///calculate totalBudget

export const totalBudget = (categories)=>{
  return categories?.reduce((acc,cat)=>{
    return acc + cat.budget
  },0)
 }

 //format Number

 const formatNumber = (number) =>{

  const locale = navigator.language
  console.log(locale);

  return new Intl.NumberFormat(locale,{
    style: 'currency',
    currency: locale === 'en-NG' ? 'NGN': "USD"
    // currencyDisplay: 'symbol'

    
  } ).format(number)
}
// console.log(formatNumber(totalBudget(categories)));



/////Generate Random IDs with and not generate same one

export const generateIdNumbers = (type)=>{
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const lengthArr = Array(8).fill('')
const generateNumber = () => Math.floor(Math.random() * characters.length )

const newArr = lengthArr.map(ch => ch +characters[ generateNumber()]).join('')

return `${type}/${newArr}`
}




//////
export function generateCompareID(type, existingArr){

const id = generateIdNumbers(type)

const checkIfIDExists = (id, existingArr)=>{
  const checkId = existingArr.every(exp => exp.id !== id )

  return checkId
}


  if(checkIfIDExists(id,existingArr )){

    return id

  }else{
    return generateIdNumbers(type)
  }

}


