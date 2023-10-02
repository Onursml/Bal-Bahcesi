import React from 'react'
import "./index.css"
import NavButton from './button'
function Navbar() {
  return (
    <div className=' navbar w-full min-w-fit h-14 flex '>
      <h1 className='font-fonta ml-2  text-4xl p-1 text-white w-fit text-anarenk2'>Bal Bahçesi</h1>
      <div className='w-1/2 flex justify-around py-3  mx-auto  max-md:hidden'>
     <NavButton title="Ürünler "/>
     <NavButton title="Hakkımızda "/>
     <NavButton title="Keşfet"/>
      </div>

    </div>
  )
}

export default Navbar
