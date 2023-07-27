import React from 'react'

import BalanceReportSection from './BalanceReportSection'
import HomeHistory from './HomeHistory'
import HomeIncomeAndSavings from './TransactionIncome'
import HomeCategories from './HomeCategories'
import { useDispatch, useSelector } from 'react-redux'
import { addNewExpense, updateData } from '../../../store/user/userDataSlice'


function Home() {

  const userData= useSelector((state)=> state.userData.userData) 
  const userId = useSelector(state => state.user.uId)

  // const error = useSelector(state => state.userData.error)

  const docId = useSelector(state => state.userData.DocumentId)
  const loading = useSelector(state => state.userData.loading)
  
  const dispatch = useDispatch()



  // const {newData, userId, docId} = params 



// console.log(loading)
// console.log(userData?.income)
// console.log(userData?.UserDetails?.name)

const userNameSplit = (name)=>{
  return name?.split(' ')[0]
}


  
  return (
    <div className='w-full '>

    <article className='md:order-2 mt-4 md:mt-20 px-5  p-2'>
        <h2 className='text-lg leading-3'>Hi,  
         {userNameSplit(userData?.UserDetails?.name)}
        </h2>
        <h4 className='text-sm my-2'>Welcome </h4>
{/* 
        <button className='p-3 bg-orange-500' 
        
        onClick={()=>{
          dispatch(addNewExpense({
            newData: 'Aly Machalka',
            userId,
            docId
          }))

        // console.log('dispatched')
        }}>editNew</button> */}


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