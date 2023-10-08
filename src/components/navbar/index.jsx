import React from 'react'
import "./index.css"
import NavButton from './button'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='flex w-full navbar min-w-fit h-14'>
      <h1 className='flex p-1 ml-2 text-4xl text-white font-fonta w-fit text-anarenk2'>
       <Image src="/logo.png" alt="logo" className='w-16 h-16 scale-150' width={100} height={100}/>
        Bal Bahçesi</h1>
      <div className='flex justify-around w-1/2 py-3 mx-auto max-md:hidden'>
     <NavButton title="Ürünler "/>
     <NavButton title="Hakkımızda "/>
     <NavButton title="Keşfet"/>
      </div>

    </div>
  )
}

export default Navbar
