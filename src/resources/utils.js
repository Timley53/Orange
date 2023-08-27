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
        date: '18/1/2023',
         value: -100
        },
        
        { 
        date: '18/8/2023',
         value: -300
        },
        
        { 
        date: '18/9/2023',
         value: -123
        },
        
        { 
        date: '18/11/2023',
         value: -145
        },
        
        { 
        date: '18/3/2023',
         value: -24
        },
      ], 
  },
  
  {
    name:'entertaiment',
      budget: 3000,
      exp: [
        { 
        date: '18/7/2023',
          value: -10
         },
        { 
        date: '18/3/2023',
          value: -30
         },
        { 
        date: '18/3/2023',
          value: -23
         },
        { 
        date: '18/8/2023',
          value: -14
         },
        { 
        date: '18/8/2023',
          value: -24
         },
      ],     
    },

    
  {
    name:'utility',
    budget: 3000,
    exp: [
      {
        date: '18/8/2023',

        value: -14
       },
      {
        date: '18/8/2023',

        value: -21
       },
      {
        date: '18/3/2023',

        value: -28
       },
      {
        date: '18/4/2023',

        value: -15
       },
      {
        date: '18/5/2023',

        value: -17
       },
    ],              
  },
  {
    name:'transport',
    budget: 3000,
    exp:[
      { 
        date: '18/3/2023',
        value: -101
       },
      { 
        date: '18/8/2023',
        value: -32
       },
      { 
        date: '18/7/2023',
        value: -213
       },
      { 
        date: '18/1/2023',
        value: -140
       },
      { 
        date: '18/8/2023',
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

export const formatNumber = (number) =>{

  const locale = navigator.language
  // console.log(locale);

  return new Intl.NumberFormat(locale,{
    style: 'currency',
    currency: locale === 'en-NG' ? '#': "USD",
    currencyDisplay: 'symbol'

    
  } ).format(number).slice(0, -3)
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
  const checkId = existingArr?.every(exp => exp?.id !== id )

  return checkId
}


  if(checkIfIDExists(id,existingArr )){

    return id

  }else{
    return generateIdNumbers(type)
  }

}


export function calcTotalExpPerCat(expArr){

return expArr.map(exp =>{
  return exp.value
}) 

}


export function overallTotalExp (categoriesArr){

  const allExpArr = categoriesArr.map( cat =>{
    const {exp } = cat

    return calcTotalExpPerCat(exp)
  }).flat()

  console.log(allExpArr);

  return allExpArr.reduce((acc,curr)=> acc + curr,0)
}


//  export const compareDates   


export const createDate = function(){
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  // console.log(year);

  return `${day}/${month + 1}/${year}`
}

// console.log(createDate())


const filterDataByDateToThisMonth = (date)=>{

  const firstDateMonth = date.split('/')[1]
  const firstDateYear = date.split('/')[2]

  const todaysDate = (new Date().getMonth() + 1) + '/' + (new Date().getFullYear())

  const firstDate = firstDateMonth + '/' + firstDateYear

  return todaysDate == firstDate ? true:false;
}

// console.log(filterDataByDateToThisMonth('18/7/2023'));



/// it takes all expenses out of their each catgeories and flats them all into one big array, then calculate them all together(total expense this month) 
const getTotalExpThisMonth = (categoryArr)=>{


 const allExpArr = categoryArr.map( cat =>{
    const {exp } = cat

    return exp
  }).flat().filter(exp => filterDataByDateToThisMonth(exp.date) )

  // console.log(allExpArr);

  // filterDataByDateToThisMonth
  const allSameDateArr = calcTotalExpPerCat(allExpArr)
  
  return reduceExpense(allSameDateArr)

}

// console.log(getTotalExpThisMonth(categories));



///to calculate the highest expense spent
export const calcOverallHigestExp = (allCategory)=>{

    const allExpFlat = allCategory.map(cat => {
      const {exp} = cat 
      return exp.map(expense => Math.abs(expense.value))
    }).flat()

    return(Math.max(...allExpFlat));


}

// console.log(calcOverallHigestExp(categories))

export const compareDate = ()=>{
  const date1 = new Date('2023-08-19')
  const date2 = new Date('2023-08-20')

  // console.log(date1)

  if(date1 > date2){
      return true
  }else{
    return false
  }

}
// console.log(new Date('19/08/2023'.split('/').reverse().join('-')))

export function changeDateSort(date){
  return new Date(date.split('/').reverse().join('-'))
}

export function retunrNewDateStringSorted(date){
  return date.split('/').reverse().join('-')
}

// console.log(compareDate());

export function mergeAllExpense(categoriesArr){


return categoriesArr.map(expCat => expCat.exp).flat()
}

// console.log(mergeAllExpense(categories));

//sorting expense Array by dates

export function sortArrByDate(categoriesArr){
   return categoriesArr.sort((a,b)=>{
    return (changeDateSort(a.date) > changeDateSort(b.date)) ? 1 : (changeDateSort(a.date) < changeDateSort(b.date)) ? -1 : 0
   }).reverse()
}


// console.log(sortArrByDate(mergeAllExpense(categories)));

export const reduceGoalsCurr = (curr)=>{

  return curr.reduce((acc, current)=>{
    return acc + current.amount

  }, 0)
}
