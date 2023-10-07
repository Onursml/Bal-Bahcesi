"use client"
import React, { useEffect, useRef, useState } from 'react'
import İmage from 'next/image'
import './Gallery.css'
import Photocomp from './photocomp';
function Gallery() {
    const [scrollHeight, setScrollHeight] = useState();
    const containerRef = useRef(null)

   

   


  
  return (
    <div className='flex w-full gap-2 p-2 overflow-scroll border h-60 gallery'>
      
        <Photocomp foto="/bal.jpg"/>
        <Photocomp foto="/bal1.jpg"/>
        <Photocomp foto="/bal2.jpg"/>
        <Photocomp foto="/bal3.jpg"/>
        
      
     
      
          </div>
  )
}

export default Gallery
