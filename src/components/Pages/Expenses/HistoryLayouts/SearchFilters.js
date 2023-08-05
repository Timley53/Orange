import React, { useState,useEffect } from 'react'

function SearchFilters({showFilter}) {
    // const [categoryArr, setCategoryArr] = useState([])
    const [CatChoice, setCatChoice] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


  console.log(startDate);

// const [resetFilter, setResetFilter] = useState(true)

    const myarr = ['food', 'ent', 'utility']

  return (
    <section className={`w-[40%] ${showFilter ?  'flex sm:flex sm:w-[99%]': 'flex sm:hidden'} flex-col  p-1 items-center   justify-center`}> 
        <header className='w-full text-center text-sm'>
            Filter By Categories
        </header>




<select name="FilterByCategories" id="FilterByCategories" onChange={(e)=> setCatChoice(e.target.value)} className='p-2 m-3 w-[80%] border-2 border-orange-400 text-orange-600 bg-orange-100 rounded-md' >

    <option value="default" defaultValue={'default'} >
        Default
    </option>

{myarr.map((cat,i)=>{

  return(
    <option value={cat} key={i+1}>
        {cat}
    </option>
  )

})}
</select>
 
    <h2 className="text-sm">Select a date</h2>

<div className="date flex flex-wrap text-sm items-center my-1 justify-center">




<label htmlFor="startDate">
    From: 
    <input type="date" name="startDate" id="startDate" className='border-2 border-orange-200 mx-2' 
    value={startDate} onChange={(e)=>setStartDate(e.target.value)}
    />
</label>


<label htmlFor="endDate" className='my-3'>
    To: 
    <input type="date" name="endDate" id="endDate" className='border-2 border-orange-200 ml-4' value={endDate} onChange={(e)=>setEndDate(e.target.value)}  />
</label>


</div>




    <button className='bg-orange-600 hover:bg-orange-300 p-2 px-5 text-white  w-[80%] hover:text-black  transition-all self-center mx-auto'>
        Filter 
    </button>


    </section>
  )
}

export default SearchFilters


function CategoriesButton({categories, setCategoryArr, categoryArr, resetFilter, setResetFilter}){
    // const [clicked, setClicked] = useState(false)

    // useEffect(()=>{
    //     setClicked(false)
    // },[resetFilter])


    // return(
    //     <button className={`m-2  p-1 px-3 text-sm rounded-md ${ clicked ? 'bg-green-400': "bg-slate-300"}`} 

    //     onClick={(e)=>{
    //         setCategoryArr([...categoryArr,e.target.textContent ])
            
    //         setClicked(!clicked)
    //         setResetFilter(false)

    //     }}>
    //             {categories}
    //     </button>
    // )

    return(
        <article>


        <label htmlFor={categories}>

            <input type="checkbox" name={categories} id="" className='mx-1' onChange={(e)=>{
                setCategoryArr([...categoryArr,e.target.name])
                
            }}  disabled={false}/> 
            {categories}
            </label>
        </article>
    )
}