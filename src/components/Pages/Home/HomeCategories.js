import React from 'react'
import CategoryArticle from '../Expenses/ExpenseCatArticle'
import { useSelector } from 'react-redux'

function HomeCategories() {
  const categories = useSelector( state => state.userData.userData?.expenses?.categories)

// console.log(categories)

  return (
    <div className='w-[30%] md:w-[35%] sm:w-[100%] flex flex-col text-sm rounded-md   sm:mr-0 sm:mb-5'>
    <header className=' w-[100%] rounded-t-md flex bg-slate-100 p-2'  >
            Categories
    </header>

    <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit border-2  border-t-0 rounded'>


{
categories &&
    (categories.length > 0 ? 

  categories.map((exp, i) => (
    <CategoryArticle key={i + 1} {...exp} />
  )) : <div className="w-full text-center text-lg">
    No Budget Categories created, Please create one.
  </div>)
}    

  

    </main>

</div>
)  
}

export default HomeCategories


