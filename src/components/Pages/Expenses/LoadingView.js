import React from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoading } from '../../../store/user/userQueries'

function LoadingView() {


          const dispatch =  useDispatch()
      const loading = useSelector(state => state.userQueries.loading)
      const error = useSelector(state => state.userQueries.error)
      const success = useSelector(state => state.userQueries.successMessage)

  return (
    <div className='fixed top-0 left-0 w-screen h-[100vh] bg-orange-400 bg-opacity-70 backdrop-blur-md z-50 flex flex-col items-center justify-center' >

<button className='p-2 m-4 text-orange-600  top-8 right-10 text-lg z-50'
onClick={()=> dispatch(closeLoading())}
>
        <ImCross/>
</button>



       {( error && <div className='w-[50%] h-auto p-4 rounded-sm text-center bg-white'>
        {error}
        </div>  ) || success &&  <div className='w-[50%] h-auto p-4 rounded-sm text-center bg-white'>
        {success}
        </div> || <div>
            loading...
        </div> }



</div>
)
}
// loading...

export default LoadingView