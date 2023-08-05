import React from 'react'
import ChartTest from '../../Home/ChartTest'
import { useSelector } from 'react-redux'
import { totalBudget, producePieValues, reduceExpense, calcPercentage } from '../../../../resources/utils'


function CategoryVisual() {
  const categoriesData = useSelector(state => state.userData.userData?.categories)

  const sumTotal = totalBudget(categoriesData)
  // console.log(sumTotal);
  const pieValue = producePieValues(categoriesData,sumTotal)
  // console.log(pieValue);
  
  
  return (
    <div className='border-2 w-full h-[auto] flex '>

     <ChartTest sumTotal={sumTotal} ChartData={pieValue} /> 




{/* 
style this later */}
      <div className="text-sm">
  {categoriesData?.map((cat, i)=>{
    return (
      <article className=''>
        {i+1}.  {Math.abs(Number(calcPercentage(reduceExpense(cat.value), sumTotal).toFixed(1))) }
      </article>
 
  )
  })}
      </div>
    </div>
  )
}

export default CategoryVisual