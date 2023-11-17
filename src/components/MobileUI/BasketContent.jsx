import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Mobile.css'
import { openbasket } from '@/Redux/Mobilecontrol'


function BasketContent() {
    const visibile=useSelector(state=>state.mobileco.basket)
    const basket=useSelector(state=>state.basket.sepet)
    const dispatch=useDispatch()
const handlemouse=()=>{
    console.log("handlemouse")
}
 



  return (
    <div onma className={`fixed flex  items-center flex-col z-40 mbbasket   overflow-hidden top-14 right-0  h-full transition-all duration-500  sm:hidden   ${visibile ? "w-[90%] p-4 " : "w-0 bg-opacity-100" }`}>
 <h1 className='font-fontb'>Sepetiniz</h1>
 <hr className='w-full mb-5 border'/>
<div className='flex flex-col border h-96 w-72 '>
{basket.map(item =>{
    return(
        <div key={item.id} className='flex justify-between mb-2 border-b-2 border-anarenk2'>
            <p>{item.name}</p>
            <p>{item.price} TL</p>
        </div>
    )

} )}
</div>

    </div>
  )
}

export default BasketContent
