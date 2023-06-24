
export const characterTest = (username) =>{
    const characterRule = /^[A-Za-z0-9]+$/
  
    if(characterRule.test(username)){
      return true
    } else{
      return false
    }
    }

    export const callTimer = (variable, setState) => {
      variable = setTimeout(()=>{
        setState(true)
     },2000)
   }
     