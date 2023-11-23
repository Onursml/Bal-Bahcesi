import React from 'react'
import "./index.css"
import NavButton from './button'
import Image from 'next/image'
import Link from 'next/link'
import Navbasket from '../MobileUI/Navbasket'
import Menu from '../MobileUI/Menu'
import { motion } from "framer-motion"
function Navbar() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
   

    className='top-0 z-50 flex w-full max-sm:sticky max-sm:justify-around navbar min-w-fit h-14'>
      <Menu/>
      
    <Link href='/'>  <h1 className='flex p-1 ml-2 text-4xl text-white font-fonta w-fit text-anarenk2'>
       <Image src="/logo.png" alt="logo" className='w-16 h-16 scale-150' width={100} height={100}/>
        Bal Bahçesi</h1></Link>
      <div className='flex justify-around w-1/2 py-3 mx-auto max-md:hidden'>
     <NavButton title="Ürünler "/>
     <NavButton title="Hakkımızda "/>
     <NavButton title="Keşfet"/>
      </div>
     <Navbasket/>

    </motion.div>
  )
}

export default Navbar
