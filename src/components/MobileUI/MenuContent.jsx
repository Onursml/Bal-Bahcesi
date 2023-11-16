import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Mobile.css'


function MenuContent() {
    const visibile=useSelector(state=>state.mobileco.bar)

  return (
    <div className={`fixed flex  items-center flex-col z-40 blr overflow-hidden top-14  h-full transition-all duration-500  sm:hidden   ${visibile ? "w-[90%] p-4 " : "w-0 bg-opacity-100" }`}>
 
<div className='flex flex-col items-center justify-around w-full h-1/2'>
    <h1 className='text-center ttt' >Hakkımızda</h1>
    <h1 className='text-center ttt' >Tüm Ürünler</h1>
    <h1 className='text-center ttt' >İletişim</h1>
    <h1 className='text-center ttt' >Galeri</h1>
 
</div> 

    </div>
  )
}

export default MenuContent
