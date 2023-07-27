import React from 'react'
import CategoryArticle from '../Expenses/ExpenseCatArticle'

function HomeCategories() {
  return (
    <div className='w-[30%] md:w-[35%] sm:w-[99%] flex flex-col text-sm rounded-md   sm:mr-0'>
    <header className=' w-[100%] rounded-t-md flex bg-slate-100 p-2'  >
            Categories
    </header>

    <main className='h-[300px] overflow-y-scroll flex flex-col overflow-edit border-2 '>

    

    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>
    <CategoryArticle/>

    </main>

</div>
)  
}

export default HomeCategories


