import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function MenuContent() {
    const visibile=useSelector(state=>state.mobileco.bar)
    console.log(visibile)
  return (
    <div className={`fixed z-40  h-full transition-all duration-500 bg-anarenk2  sm:hidden bg-opacity-50 backdrop-blur-md ${visibile ? "w-[90%]" : "w-0" }`}>
      
    </div>
  )
}

export default MenuContent
