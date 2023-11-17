"use client"
import React, { useEffect, useRef, useState } from 'react'
import İmage from 'next/image'
import './Gallery.css'
import Photocomp from './photocomp';
import {motion} from 'framer-motion'
function Gallery() {
  
    

   

   


  
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    
    className='flex w-full gap-2 p-2 overflow-scroll max-sm:w-[97%] max-sm:mx-auto  shadow-2xl h-60 gallery max-sm:p-1 max-sm:mr-0'>
      
        <Photocomp foto="/bal.jpg"/>
        <Photocomp foto="/bal1.jpg"/>
        <Photocomp foto="/bal2.jpg"/>
        <Photocomp foto="/bal3.jpg"/>
        
      
     
      
          </motion.div>
  )
}

export default Gallery
