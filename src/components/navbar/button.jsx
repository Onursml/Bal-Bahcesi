import React from 'react'
import './index.css'
function NavButton(props) {
  return (
    <div className='navbutton  p-1 w-32 min-w-fit font-fontb bg-ararenk bg-opacity-30 text-center rounded-lg text-anarenk2 '>
      {props.title}
    </div>
  )
}

export default NavButton
