import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { database } from "../../resources/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { createDate, generateCompareID } from "../../resources/utils"

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
        console.log(docData);

        await setDoc(docRef,docData) 
        
    }
    
}catch(err){
    throw new Error(err.message)
}

    // if(getDocResponse.exists()){

    

}
)

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
            console.log(docData);
            
             await setDoc(docRef,docData) 

        }

    }catch(err){
        throw new Error(err.message)
    }
})


export const saveNewFund = createAsyncThunk('userQuieries/saveNewFund', async (params, ThunkApi)=>{
    try{
        const {userId, amount, plan} = params

        const docRef = doc(database, 'users', userId)
        
        const getDocResponse = await getDoc(docRef)

        if(getDocResponse.exists()){
            const docData = getDocResponse.data()

            docData.savings.goals = docData.savings.goals.map( goal =>{
                const {title, current} = goal
                if(title === plan){
                    return{
                        ...goal,
                        current:[
                            ...current,
                            {
                                id: generateCompareID(plan,current),
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
            // console.log(docData);
         await setDoc(docRef,docData) 
            }


        }catch(err){

        }
})



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


    

    }
})






export default userQueriesSlice.reducer
export const {  updateId, closeLoading} = userQueriesSlice.actions
