"use client"
import { useState } from 'react'
import { galeris } from '@/contains/galeri'
import React, { use, useEffect } from 'react'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
const SlideCompenets = () => {
 const [activeslide,setactiveslide]=useState(0)

   
 const divRef = useRef();
//  console.log(divRef);

 const nextSlide = () => {
    const nextSlide = activeslide + 1;
  if(nextSlide <galeris.length){
    setactiveslide(nextSlide)
  }else {
    setactiveslide(0)} }

    const prevSlide = () => {
        const prevSlide = activeslide - 1;
      if(prevSlide >=0){
        setactiveslide(prevSlide)
      }else {
        setactiveslide(galeris.length-1)}
    
    }

useEffect(()=>{
  const intervalId =  setInterval(()=>{
        nextSlide()
      
    
    },5000)
    return () => {
        clearInterval(intervalId);
      };
},[nextSlide])


  return (


    <div ref={divRef} className={` relative w-full max-sm:w-[95%] h-full z-0 rounded-2xl max-sm:mx-auto `}>
        {galeris.map((item,index)=>{
            return(
                <div ref={divRef} key={item.image} className={`${item.clasname} opacity-0 shadow-2xl shadow-anarenk2 rounded-2xl  ${activeslide === index ? 'opacity-100' : ''} transition-opacity duration-1000 `}>
                <img className='w-full h-full rounded-3xl' src={item.image} alt="" />
                <h1 className='absolute w-full text-2xl font-bold text-white font-fontc bottom-12 text-anarenk2' >
                    {item.title}
                
                </h1>
              </div>
          

            )
              
        })}
   

    <button onClick={nextSlide} className='absolute right-0 rounded-3xl top-1/2 text-anarenk2' ><FaChevronRight /></button>
    <button onClick={prevSlide}  className='absolute left-0 rounded-3xl top-1/2 text-anarenk2' ><FaChevronLeft/></button>

    </div>
  )
}

export default SlideCompenets
