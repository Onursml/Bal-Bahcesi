import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Mobile.css'


function MenuContent() {
    const visibile=useSelector(state=>state.mobileco.bar)
    console.log(visibile)
  return (
    <div className={`fixed z-40 blr  h-full transition-all duration-500  sm:hidden   ${visibile ? "w-[90%]" : "w-0" }`}>
      sadasdasd
    </div>
  )
}

export default MenuContent
