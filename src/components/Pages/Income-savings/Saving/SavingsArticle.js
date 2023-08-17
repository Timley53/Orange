import React from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'
import { MdCancel , MdDelete} from 'react-icons/md'
import { SavingsContext } from './Savings'
import { useContext } from 'react'
import { ImCross } from 'react-icons/im'

function SavingsArticle() {
  return(
    <article className="w-[30%] sm:w-[98%] flex p-2 py-3 items-center justify-between m-1 bg-emerald-700 text-white rounded-md">

    <span className='w-[45px] h-[45px] md:w-[35px] md:h-[35px] rounded-full bg-green-400 text-white text-2xl p-2 flex items-center justify-center'>
    <AiFillMoneyCollect/>
    </span>
    <div className="ml-6 md:ml-1 flex flex-col">

<span  className='text-xs md:mx-2'>
    12/03/2022
</span>


</div>


<div className='text-sm '>
  +#200
</div>

<button className='text-lg p-2  hover:text-rose-400 '>
  <MdCancel/>
</button>

</article>

  )
}



export default SavingsArticle


export function EachSavingsList({showList, setShowList,showSide}){

    const {listObject, setlistObject} = useContext(SavingsContext)

    

        return(
            <div className={`  flex-col ${!showSide ? 'w-[75%] flex sm:w-[100%] ': ' w-[75] sm:hidden'} `}>

                <header className='flex w-[100%] justify-between p-1 my-1 sm:bg-emerald-100 sm:items-center'>

                    <div className='flex items-center w-[40%] text-sm sm:w-[50%]'>
                        <span className='mx-2'>
                            {listObject?.title}
                        </span>

                        <span className='mx-2'>
                            Target: ${listObject.goals}
                        </span>

                        <span className='mx-2'>
                            Position: ${listObject.position}
                        </span>


                    </div>

                    <div className="w-[30%] text-sm flex items-end justify-end sm:text-[1rem]">
                        <button className='p-2 bg-rose-600 hover:bg-rose-300 rounded-md text-white '>
                            <span className= "hidden sm:flex">
                                <MdDelete/>
                            </span>
                            <span className='sm:hidden'>Delete</span>
                            
                        </button>

                        <button className='p-2 bg-rose-800 hover:bg-rose-500 mx-5 rounded-md text-white'
                        onClick={()=>setShowList(false)}
                        >
                            <span  className="hidden sm:flex ">
                            <ImCross/>
                            </span>

                            <span className='sm:hidden'>

                            Close
                            </span>
                        </button>
                    </div>

                </header>


                <main className='flex flex-wrap overflow-y-scroll w-[100%] sm:flex-col'>

            <SavingsArticle/>
            <SavingsArticle/>
            <SavingsArticle/>
            <SavingsArticle/>
            <SavingsArticle/>

                </main>



            </div>
        )
}