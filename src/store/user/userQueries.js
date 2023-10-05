import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { database } from "../../resources/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { createDate, generateCompareID } from "../../resources/utils"

// let database

const initialState = {
    loading: false,
    userId: '',
    successMessage: '',
    success: false,
    error: ''


}


export const addNewExpense = createAsyncThunk('userQuieries/addNewExpense', 
async (params, ThunkApi)=>{

    try{

        
    const {amount, categories, userId} = params

    const docRef = doc(database, 'users', userId)
    
    
    const getDocResponse = await getDoc(docRef)
    
    if(getDocResponse.exists()){
        const docData = getDocResponse.data()
        docData.expenses.categories = docData.expenses.categories.map(cat =>{
            if(cat.name === categories){
                return {
                    ...cat,
                    exp: [
                        ...cat.exp,
                        {
                            id: generateCompareID(categories, cat.exp),
                            value: -amount,
                            date: createDate(),
                        
                            title: categories
                        }
                    ]
                }
            }else{
                
                return cat
            }

        })
        // console.log(docData);

        await setDoc(docRef,docData) 
        
    }
    
}catch(err){
    throw new Error(err.message)
}

    // if(getDocResponse.exists()){

    

}
)


export const deleteExpense = createAsyncThunk('userQuieries/deleteExpense', async (params, ThunkApi)=>{
    try{

     
        const {id,  userId} = params

        const docRef = doc(database, 'users', userId)
        
        
        const getDocResponse = await getDoc(docRef)
        
        if(getDocResponse.exists()){

            const docData = getDocResponse.data()

            docData.expenses.categories = docData.expenses.categories.map(cat =>{
                const {name} = cat
                const categoryName = id.split('/')[0]

                if(name === categoryName){
                    return {
                        ...cat,
                        exp: cat.exp.filter(exp => exp.id !== id)
                    }
                }else{
                    return cat
                }
            })

            // console.log(docData);
        await setDoc(docRef,docData) 


        }
    }catch(err){
    throw new Error(err.message)

    }
})

export const createCategory = createAsyncThunk('userQuieries/createCategory', 
async (params, ThunkApi)=>{

    try{

        
    const {amount, categories, userId} = params

    const docRef = doc(database, 'users', userId)
    
    
    const getDocResponse = await getDoc(docRef)

    if(getDocResponse.exists()){
        // console.log(getDocResponse.data());
        const docData = getDocResponse.data()
        docData.expenses.categories =  [
            ...docData.expenses.categories,
            {
                id: `#${categories}` ,
        name:categories,
        budget: +amount,
          exp:[]         
        }
    ]
    const docUpdateRes = await setDoc(docRef,docData) 

    console.log(docUpdateRes)

    }    
}catch(err){
    throw new Error(err.message)
}

    // if(getDocResponse.exists()){

    

}
)

export const createSavingsPlan = createAsyncThunk('userQuieries/createSavingsPlan', async (params, THunkApi)=>{
    try{
        const {userId, planTitle, planGoals} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.savings.goals =[ 
                ...docData.savings.goals,
                {
                    title: planTitle,
                    target: +planGoals,
                    id: generateCompareID(planTitle,docData.savings.goals),
                    date:createDate(),
                    current: [],

                }
            ]
            // console.log(docData);
            
             await setDoc(docRef,docData) 

        }

    }catch(err){
        throw new Error(err.message)
    }
})

////////////////////
export const deleteSavingsPlan = createAsyncThunk('userQuieries/deleteSavingsPlan', async (params,ThunkApi)=>{
    try{
        const {userId, planId} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.savings.goals = docData.savings.goals.filter(goals => goals.id !== planId) 


            console.log(docData)
            await setDoc(docRef,docData) 

        }

    }catch(err){
        throw new Error(err.message)
    }
})


/////////////////


////////////////////
export const deleteSavingsCurrent = createAsyncThunk('userQuieries/deleteSavingsCurrent', async (params,ThunkApi)=>{
    try{
        
        const {userId, planId, currentId} = params

console.log(userId, planId, currentId)
        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)


        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.savings.goals = docData.savings.goals.map(goal => {
                if(goal.id === planId){
                    return {
                        ...goal,
                        current: goal.current.filter(curr => curr.id !== currentId)
                    }
                } else{
                     return goal
                }
            }) 
            console.log(docData)
            await setDoc(docRef,docData) 
        }

    }catch(err){
        throw new Error(err.message)
    }
})


/////////////////


export const editSavingsPlan = createAsyncThunk('userQuieries/editSavingsPlan', async (params,ThunkApi)=>{
    try{
        const {userId, planId, newTarget} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.savings.goals = docData.savings.goals.map(goals => {
                if(goals.id === planId){
                    return {
                        ...goals,
                        target: +newTarget,
                    }
            }
            return goals
            }) 


            // console.log(docData)
            await setDoc(docRef,docData) 

        }

    }catch(err){
        throw new Error(err.message)
    }
})





////////////
export const saveNewFund = createAsyncThunk('userQuieries/saveNewFund', async (params, ThunkApi)=>{
    try{
        const {userId, amount, plan} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()

            docData.savings.goals = docData.savings.goals.map( goal =>{
                const {id, current,title} = goal
                if(id === plan){
                    return{
                        ...goal,
                        current:[
                            ...current,
                            {
                                id: generateCompareID(title,current),
                                amount: +amount,
                                date: createDate()
                            }
                        ] 
                    }
                }else{
                    return goal
                }
            }) 

            // console.log(docData);
             await setDoc(docRef,docData) 



        }

    }catch(err){
        throw new Error(err.message)
    }

})


//////////////
export const addIncome = createAsyncThunk('userQuieries/addIncome', async (params, ThunkApi)=>{

        try{
            const {userId, amount, title} = params

            const docRef = doc(database, 'users', userId)
            
            const getDocResponse = await getDoc(docRef)
    
            if(getDocResponse.exists()){
                const docData = getDocResponse.data()
docData.income = [
    ...docData.income,
    {
        amount: +amount,
        date: createDate(),
        id: generateCompareID('income',docData.income ),
        title


    }
]
            console.log(docData);
         await setDoc(docRef,docData) 
            }


        }catch(err){
 throw new Error(err.message)
        }
})

export const deleteIncome = createAsyncThunk('userQuieries/deleteIncome', async (params, ThunkApi)=>{
    try{

        const {userId, id} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.income = docData.income.filter(inc => inc.id !== id)

            // console.log(docData);
            await setDoc(docRef,docData) 
        }
        
    }catch(err){
        
        throw new Error(err.message)
    }
})


//////////////////////////
export const editCategories = createAsyncThunk('userQuieries/editCategories',  async (params, ThunkApi)=>{

    try{
        const {  userId, BudgetId, editbudget} = params

        // console.log(userId)

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)
        console.log(getDocResponse)


        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
        // console.log(docData);

            docData.expenses.categories = docData.expenses.categories.map(cat => {
                if(cat.id === BudgetId){
                    return {
                        ...cat,
                        budget: +editbudget,
                    }
                } else{
                    return cat
                }
            })

        // console.log(docData);
     await setDoc(docRef,docData) 
        }


    }catch(err){
throw new Error(err.message)
    }
})



export const deleteCategories = createAsyncThunk('userQuieries/deleteCategories', async (params, ThunkApi)=>{
    try{
        const {userId, id} = params

        
        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)
        console.log(getDocResponse)


        if(getDocResponse.exists()){
            const docData = getDocResponse.data()
            docData.expenses.categories = docData.expenses.categories.filter(cat => cat.id !== id)
            await setDoc(docRef,docData) 
        }

    }catch(err){
        throw new Error(err.message)
    }
})



////////////////

const userQueriesSlice = createSlice({
    name: 'userQuieries',
    initialState,
    reducers: {
            updateId: (state, actions)=>{
                state.userId = actions.payload
            },
            closeLoading: (state, actions)=>{
                state.loading = false
                state.successMessage = ''
                state.error = ''
            }
    },
    extraReducers: (builder) =>{
        builder.addCase(addNewExpense.pending, (state, actions)=>{
            state.loading = true

        });

        builder.addCase(addNewExpense.fulfilled, (state, actions)=>{
            // state.loading = false
            state.successMessage = 'New expense Successfully created'
            state.success = true
        })
        builder.addCase(addNewExpense.rejected, (state, actions)=>{
            // state.loading = false
            state.error = actions.error.message

        })

        
        //create category
        builder.addCase(createCategory.pending, (state, actions)=>{
            state.loading = true

        });

        builder.addCase(createCategory.fulfilled, (state, actions)=>{
            // state.loading = false
            state.successMessage = 'New budget category Successfully created'
            // state.success = true
        })

        builder.addCase(createCategory.rejected, (state, actions)=>{
                state.error = actions.error.message
        })
    

        //====> edit Categories budget  
        //create category
builder.addCase(editCategories.pending, (state, actions)=>{
    state.loading = true

});

builder.addCase(editCategories.fulfilled, (state, actions)=>{
    // state.loading = false
    state.successMessage = 'Budget category Edited '
    // state.success = true
})

builder.addCase(editCategories.rejected, (state, actions)=>{
        state.error = actions.error.message
})


        
        //====> delete Categories budget  
        //delete Categories
builder.addCase(deleteCategories.pending, (state, actions)=>{
    state.loading = true

});

builder.addCase(deleteCategories.fulfilled, (state, actions)=>{
    // state.loading = false
    state.successMessage = 'Budget category deleted '
    // state.success = true
})

builder.addCase(deleteCategories.rejected, (state, actions)=>{
        state.error = actions.error.message
})


        
        //========>>>>>>>>
        //========>>>>>>>>
        // edit Savings Plan 
        builder.addCase(editSavingsPlan.pending, (state, actions)=>{
            state.loading = true
        })
  
        builder.addCase(editSavingsPlan.fulfilled, (state, actions)=>{
                    state.successMessage = ' Saving goal successfully edited'
                })

        builder.addCase(editSavingsPlan.rejected, (state, actions)=>{
            state.error = actions.error.message
    })





        
        //========>>>>>>>>
        //========>>>>>>>>
        // delete Savings Plan 
        builder.addCase(deleteSavingsPlan.pending, (state, actions)=>{
            state.loading = true
        })
  
        builder.addCase(deleteSavingsPlan.fulfilled, (state, actions)=>{
                    state.successMessage = 'Saving input successfully deleted'
                })

        builder.addCase(deleteSavingsPlan.rejected, (state, actions)=>{
            state.error = actions.error.message
    })






        //========>>>>>>>>
        //========>>>>>>>>
        //create new saving plan 
        builder.addCase(createSavingsPlan.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(createSavingsPlan.fulfilled, (state, actions)=>{
            state.successMessage = 'New saving goal successfully created'
        })

        builder.addCase(createSavingsPlan.rejected, (state, actions)=>{
            state.error = actions.error.message
    })

    //========>>>>>>>>

    //========>>>>>>>>
        //===========>>create saveNewFund 
        builder.addCase(saveNewFund.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(saveNewFund.fulfilled, (state, actions)=>{
            state.successMessage = 'Savings successfully added'
        })

        builder.addCase(saveNewFund.rejected, (state, actions)=>{
            state.error = actions.error.message
    })

    
    //========>>>>>>>>

    //========>>>>>>>>
        //===========>>delete Savings Current 
        builder.addCase(deleteSavingsCurrent.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(deleteSavingsCurrent.fulfilled, (state, actions)=>{
            state.successMessage = 'Savings successfully added'
        })

        builder.addCase(deleteSavingsCurrent.rejected, (state, actions)=>{
            state.error = actions.error.message
    })

    
    //========>>>>>>>>

        //========>>>>>>>>
        //===========>>addIncome 
        builder.addCase(addIncome.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(addIncome.fulfilled, (state, actions)=>{
            state.successMessage = 'Income successfully added'
        })

        builder.addCase(addIncome.rejected, (state, actions)=>{
            state.error = actions.error.message
    })


    

        //========>>>>>>>>
        //===========>>deleteIncome 
        builder.addCase(deleteIncome.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(deleteIncome.fulfilled, (state, actions)=>{
            state.successMessage = 'Income successfully deleted'
        })

        builder.addCase(deleteIncome.rejected, (state, actions)=>{
            state.error = actions.error.message
    })


        //========>>>>>>>>
        //===========>>deleteExpense 
        builder.addCase(deleteExpense.pending, (state, actions)=>{
            state.loading = true
        })

        
        builder.addCase(deleteExpense.fulfilled, (state, actions)=>{
            state.successMessage = 'Expense successfully deleted'
        })

        builder.addCase(deleteExpense.rejected, (state, actions)=>{
            state.error = actions.error.message
    })


    

    }
})






export default userQueriesSlice.reducer
export const {  updateId, closeLoading} = userQueriesSlice.actions
