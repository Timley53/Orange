import React from 'react'

import BalanceReportSection from './BalanceReportSection'
import HomeHistory from './HomeHistory'
import HomeIncomeAndSavings from './TransactionIncome'
import HomeCategories from './HomeCategories'

function Home() {

  


  
  return (
    <div className='w-full '>

    <article className='md:order-2 mt-4 md:mt-20 px-5  p-2'>
        <h2 className='text-lg leading-3'>Hi, Muhammed</h2>
        <h4 className='text-sm'>welcome</h4>
      </article>

<BalanceReportSection/>


    <section className='w-[99%] p-2 flex flex-wrap '>

      <HomeCategories/>

      <HomeHistory/>
      <HomeIncomeAndSavings/>




    </section>

    </div>
  )
}

export default Home