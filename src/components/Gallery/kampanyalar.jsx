import { kamp } from '@/contains/galeri'
import React from 'react'
import './Gallery.css'


const Kampanyalar = () => {
  return (
<div className="flex flex-col items-center overflow-y-auto kamp w-96 kampanyalar max-sm:hidden">
    <h1 className='text-2xl tracking-wider text-anarenk2 cursor-text font-fonta'>Kampanyalar</h1>
  {kamp.map((item,index)=>
  {
    return(
      <div key={index} className='flex flex-col items-center justify-center w-full h-auto gap-3 px-2  font-fontb py-2 bg-[#071952] mb-2 text-anarenk2 rounded-3xl'>
        {item.title}
      </div>
    )
  }
  )}

   </div>
  )
}

export default Kampanyalar
