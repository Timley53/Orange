import React from 'react'
import { openCloseMenu } from '../../../store/ui/uiStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import logoNoBg from '../../../resources/logo-no-bg.png'


function HomeHeader() {
        const dispatch = useDispatch()
        const openMenu = useSelector((state)=> state.uiState.openMenu)


  return (
    <header className='mt-3 p-2 fixed w-[100%] -top-3 md:bg-[#00000016] backdrop-blur-md hidden md:block z-40'>

    <div className="name-mobileBar flex p-2  items-center justify-between">
  
  

      <button className='hidden md:block text-xl text-orange-600  z-50 md:text-2xl' 
        onClick={()=>   dispatch(openCloseMenu())}
      >
      {  
        <BsFillMenuButtonWideFill/>  }
        
        </button>

        <img src={logoNoBg} alt="logo" className='w-[12%] h-[30px] md:w-[90px] sm:w-[23%] md:h-[90%]  logoImg' />


    </div>

           

      </header>  )
}

export default HomeHeader