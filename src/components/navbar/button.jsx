import React from 'react'
import './index.css'
import İmage from 'next/image'
function NavButton(props) {
  return (
    <div className='flex w-32 p-1 text-center rounded-lg navbutton min-w-fit font-fontb bg-ararenk bg-opacity-30 text-anarenk2 '>
      
      {props.title}
    </div>
  )
}

export default NavButton
