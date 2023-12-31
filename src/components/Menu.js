import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {MdLogout, MdSpaceDashboard} from 'react-icons/md'
import {BsBarChartSteps, BsFillBarChartFill, BsGraphDown} from 'react-icons/bs'
import { FaChartArea, FaMoneyBill, FaMoneyCheck, FaWallet } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import BWNoBg from '../resources/black-white-Logo-no-Bg.png'
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { openCloseMenu } from '../store/ui/uiStateSlice'
import { logOut } from '../store/user/userSlice'
import { auth } from '../resources/firebase'
import { signOut } from 'firebase/auth'

function Menu() {

  const myRef = useRef()
  const dispatch = useDispatch()

  const openMenu = useSelector((state)=> state.uiState.openMenu)


  useEffect(()=>{

    // console.log(myRef.current.children)

    const newArr = Array.from(myRef.current.children)



const expender = function(e,li){
  newArr.forEach(li =>{
    li.classList.remove('expand-height')
    return
  })

li.classList.add('expand-height')



// li.classList.toggle('expand-height')

// console.log(li.classList);
}


    newArr.forEach(li =>{
      li.addEventListener('click',function(e){
        
      expender(e,li)
        
      })
    })

    


    return newArr.forEach(li =>{
      li.removeEventListener('click',function(e){
        
      expender(e,li)
        
      })
    })

  },[])


  const signOutUser = () =>{
    dispatch(logOut())
    signOut(auth).then(()=> console.log('sign out ')).catch(err => console.log(err.message))
  }







  return (
<nav className={`Menu-bar z-50 ${openMenu ? 'flex ': 'flex md:hidden '} w-[180px] h-[100%] flex-col bg-orange-500 items-start fixed m-0 z-50`}>

    <div className="logo text-white self-center w-[60%] my-4 mt-8 md:hidden">
       <img src={BWNoBg} alt="logo"  />
    </div>


    <button className='text-white self-end m-4 hidden md:block text-2xl'
     onClick={()=>   dispatch(openCloseMenu())}
    >
      <ImCross/>
    </button>

      <ul ref={myRef} className="links mt-5 text-white text-[14px] ml-3">


        <li className='rounded'>
          <NavLink to={'./'} 
           className={`flex items-center p-3 px-5 rounded`}>

    <span className='mr-3 text-[18px]'>
      <AiOutlineHome/>
      </span>
    <span>Home</span>

          </NavLink> 
           </li>


        <li className='flex flex-col hover:bg-orange-400 rounded py-1'>
          <NavLink to={'expenses'} 
          
          className={`flex items-center  p-2 px-5 rounded`}> 

          <span className='mr-3 text-[18px]'>
              <BsBarChartSteps/>
          </span>

          <span>
            Expenses
          </span>
          </NavLink> 

      <ul className='ml-14 text-sm' >
       <li className='expense-child'>
       <NavLink to={'expenses'} >
          Home
        </NavLink>
       </li>

       <li className='expense-child'>
       <NavLink to={'expenses/categories'}>
          Categories
        </NavLink>
       </li>
      </ul>

           </li>

           <li className='rounded'>
          <NavLink to={'income'} 
           className={`flex items-center p-3 px-5 rounded`}>

    <span className='mr-3 text-[18px]'>
      <FaMoneyCheck/>
      </span>
    <span>Incomes</span>

          </NavLink> 
           </li>


           <li className='rounded'>
          <NavLink to={'savings'} 
           className={`flex items-center p-3 px-5 rounded`}>

    <span className='mr-3 text-[18px]'>
      <FaWallet/>
      </span>
    <span>
      Savings
      </span>

          </NavLink> 
           </li>

           <li className='rounded'>
          <button 
onClick={()=>{
  signOutUser()
 localStorage.removeItem('persist:root')
//  localStorage.clear()
}}
           className={`flex items-center p-3 px-5 rounded`}>

    <span className='mr-3 text-[18px]'>
      <MdLogout/>
      </span>
    <span>
      Logout
      </span>

          </button> 
           </li>





        {/* <li><NavLink>
        </NavLink>  </li>
        <li><NavLink></NavLink>  </li> */}

      </ul>



        </nav>
  )
}

export default Menu