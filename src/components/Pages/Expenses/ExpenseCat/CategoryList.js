import React, { useContext, useState } from 'react'
import CategoryArticle from '../ExpenseCatArticle'

import {MdOutlineEmojiTransportation, MdOutlineFastfood, MdOutlineCable, MdLiveTv, MdOutlineLiveTv, MdSavings, MdDelete, MdEditNote} from 'react-icons/md'

import {GiClothes} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { calcExp, calcPercentage, formatNumber } from '../../../../resources/utils'
import { ImCross } from 'react-icons/im'
import { deleteCategories, editCategories } from '../../../../store/user/userQueries'
import { ContextConfirm } from '../../../../resources/AllContext'

const chooseIcon = (type)=>{

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

export function CategoryList() {
    const allExpense = useSelector((state)=> state.userData.userData?.expenses.categories)



const [categoryObj, setCategoryObj] = useState('')

  return (
    <div className='w-[100%]  flex items-start p-1 rounded-md   h-[80vh] md:h-[70vh]'>

<div className="w-[60%] sm:w-[100%] sm:p-1  p-2 overflow-y-scroll flex flex-col sm:h-[73vh] overflow-edit sm:overflow-y-scroll " >

         {allExpense && allExpense.map((expense, i) => {
            return(
                <ExcategoryArticle setCategoryObj={setCategoryObj}  key={ i + 1} {...expense}/>
            )
        })|| allExpense && allExpense.length > 0 && <div className="w-[100%] text-center">
<h1 className='m-auto'> No expense-budget catgeories recorded</h1>

        </div> }
</div>


{categoryObj &&
   <CategoryEditSection categoryObj={categoryObj}  setCategoryObj={setCategoryObj}/>}

    </div>
  )
}



function CategoryEditSection({categoryObj, setCategoryObj}){
const {budget,exp, id, name} = categoryObj
console.log(id);
const userId = useSelector((state)=> state.userData.DocumentId)
const {payload, setPayload, confirm, setConfirm} = useContext(ContextConfirm)




const dispatch = useDispatch()

const [editbudget, setEditBudget] = useState(0)

const handleEditSubmit = ()=>{

    if(!editbudget){
      return
    } 

    if(editbudget){
        
        setPayload({
            type: 'editCategories',
            data: {
                userId,
                BudgetId: id,
                editbudget
            }
        })
        setConfirm(true)

        // dispatch(editCategories({
        //     userId,
        //     BudgetId: id,
        //     editbudget
        // }))

    }
}


    return(

<div className="w-[40%] sm:w-[100%] sm:fixed sm:h-[95%] sm:bg-emerald-800 sm:bg-opacity-20 sm:backdrop-blur-md top-14 left-0  flex flex-col bg-emerald-200 bg-opacity-30 rounded-md h-[100%] p-2 sm:py-6">
        <button className='self-end p-2 hover:text-rose-400' onClick={()=>setCategoryObj('')}>
            <ImCross/>
        </button>

        <h1 className='text-2xl'>{name[0].toUpperCase() + name.slice(1)}</h1>

        <div className='flex items-center'>
        <h1 className='text-2xl mx-1'> {formatNumber(Math.abs(calcExp(exp)))} / {formatNumber(budget)}</h1> --
        <span className='mx-3 text-emerald-700'>{Math.abs(Math.trunc(calcPercentage(calcExp(exp),budget)))} %</span>

        </div>

<div className="w-[80%] my-2 flex items-center  sm:text-lg">
    <span className='mx-2' >Budget: </span>
 
 <span className='bg-gray-300 w-[70%] justify-evenly flex items-center px-1 rounded-md'>

 <span className=' w-[30%] text-base flex items-center'>
 {budget}

 <span className='mx-1 text-lg'>
 <MdEditNote />
 </span>
 </span>
        <input type="number" className='border-2  mx-1 p-1 w-[45%] ' value={editbudget} onChange={(e)=> setEditBudget(e.target.value)} />
        <span className='text-lg'>

 <span className='w-[25%] text-center '>$</span>
 
 </span>

        </span>
</div>


<button className='p-2 bg-emerald-400 hover:bg-emerald-200 w-[70%] self-center my-6 text-sm' onClick={()=>handleEditSubmit()}>
    Submit Edit
</button>


</div>

 )
}

function ExcategoryArticle({budget,exp, id, name, setCategoryObj}){

    console.log(Math.abs(Math.trunc(calcPercentage(calcExp(exp),budget))))

    const userId = useSelector((state)=> state.userData.DocumentId)

    const {payload, setPayload, confirm, setConfirm} = useContext(ContextConfirm)

       const dispatch = useDispatch()

        function deleteCategoriesFxn(){
            setPayload({
                type: 'deleteExpCategory',
                data: {
                    userId,
                    id
                }
            })
            setConfirm(true)
             
            // dispatch(deleteCategories({
            //     userId,
            //     id
            // }))

        }

  return(

  

      <article className='w-[100%] sm:w-[100%] flex p-2 justify-center items-center py-3 border-2 my-1 rounded-md'>

      <span className='text-3xl p-3 bg-rose-500 text-white w-[42px] h-[42px] rounded-full flex items-center justify-center'>
      {chooseIcon(name)} 
      </span>

      <div className="title-amount ml-4 w-[45%] cursor-pointer" 
      onClick={()=>setCategoryObj({
        budget,exp, id, name
      })}
      >
          <div className="text-sm">
              {name[0].toUpperCase() + name.slice(1)}
          </div>
          <span className="flex text-sm">
          <small className='text-xs text-rose-500'>
          {formatNumber(Math.abs(calcExp(exp)))} / {formatNumber(budget)}
          </small>

          <span className='mx-2 text-base'>
            <MdEditNote/>
          </span>

          </span>
    


      </div>

      <div className="progress bg-rose-300 h-[15px] rounded-md w-[40%] sm:w-[30%]" 
      
      >
          <div style={{
            width:`${Math.abs(Math.trunc(calcPercentage(calcExp(exp),budget)))}%`
          }} className={`h-full bg-rose-500 rounded-l-md`}>

          </div>


      </div>


      <button className='mx-2 p-2 hover:text-gray-500 text-lg'  
      onClick={()=>deleteCategoriesFxn()}
      >
        <MdDelete/>
      </button>
     </article>
  )
}
