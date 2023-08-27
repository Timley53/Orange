import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { mergeAllExpense } from '../../../../resources/utils'
import {ImCross} from 'react-icons/im'

function SearchFilters({showFilter, setShowFiltered, setShowFilter}) {
    const allExpense = useSelector( state => state.userData.userData?.expenses?.categories)

    const [CatChoice, setCatChoice] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    //onSubmit={handleSubmitfilter}

    const myarr = ['food', 'ent', 'utility' ]

    const filterExpense = 

    function handleSubmitfilter(e){
        e.preventDefault()
    console.log(startDate,endDate);
    //   const  mergeAllExpense()

    }
  return (
    <section className={`w-[40%] ${showFilter ?  'flex sm:flex sm:w-[100%] sm:fixed sm:z-30 sm:bg-slate-300 sm:bg-opacity-70 sm:top-0 sm:backdrop-blur-sm h-[100%]': 'flex sm:hidden'} flex-col  p-1 items-center   justify-center` } > 

<div className=" hidden  w-[90%] sm:flex items-end justify-end"  >
    <button className='self-end p-2 text-lg my-6 text-red-500' 
onClick={(e)=> {
    e.preventDefault()
    setShowFilter(false)}
    }
>
    <ImCross/>
    </button>
</div>

<form className='flex w-[100%] flex-col  p-1 items-center   justify-center'>



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

    </form>

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