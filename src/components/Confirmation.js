import { useContext } from "react"
import { ContextConfirm } from "../resources/AllContext"
import { useDispatch } from "react-redux"
import { deleteCategories, deleteExpense, deleteIncome, deleteSavingsCurrent, deleteSavingsPlan, editCategories, editSavingsPlan } from "../store/user/userQueries"
// import { data } from "autoprefixer"

export function Confirmation(){
    const {payload, setPayload, confirm, setConfirm} = useContext(ContextConfirm)
    const dispatch = useDispatch()
console.log(payload, payload.data)


    function ExecuteAction(){
        if(payload.type === 'deleteExpense'){
            dispatch(deleteExpense(payload.data))
            cancelConfirm()

            return
        } else if(payload.type === 'deleteExpCategory'){
            dispatch(deleteCategories(payload.data))
            cancelConfirm()
    }else if(payload.type === 'editCategories'){
        dispatch(editCategories(payload.data))
        cancelConfirm()
    }
    
    if(payload.type === 'deleteIncome'){
        dispatch(deleteIncome(payload.data))
        cancelConfirm()
    }

    if(payload.type === 'deleteSavingsPlan'){
        dispatch(deleteSavingsPlan(payload.data))
        cancelConfirm()
    } 
    if(payload.type === 'deleteSavingsCurrent'){
        dispatch(deleteSavingsCurrent(payload.data))
        cancelConfirm()
    }

    if(payload.type === 'editSavingsPlan'){
        dispatch(editSavingsPlan(payload.data))
        cancelConfirm()
    }
    } 

    function cancelConfirm(){
        setPayload(null)
        setConfirm(false)
    }

    return(
            <div className={`fixed w-[100%] h-[100%] top-0 left-0 bg-orange-800 backdrop-blur-md bg-opacity-60 flex justify-center items-center z-[100]`}>

                <div className="flex w-[40%] sm:w-[60%] h-[30%] flex-col bg-white rounded-md items-center justify-center">
                 <h2>Are you sure?</h2>

<div className=" flex justify-between items-center my-4 w-[80%]">

                    <button className="p-2 my-6 px-7 bg-rose-500 rounded-md" 
                    onClick={()=>cancelConfirm()}
                    >No</button>

                    <button onClick={()=>ExecuteAction()} className="p-2 px-7 bg-emerald-500 rounded-md">Yes</button>
</div>
                </div>
                

            </div>
    )
}