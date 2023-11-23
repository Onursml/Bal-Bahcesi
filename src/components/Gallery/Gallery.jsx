import './Gallery.css'
import React, {  } from 'react'
import İmage from 'next/image'
import SlideCompenets from './SlideCompenets'
import Kampanyalar from './kampanyalar'




function Gallery() {
  


   

   


  
  return (
  <div className={`w-full h-[23rem]  flex flex-row  gap-6  rounded-3xl  `}>
    <div className={`shadow-2xl w-[40rem] rounded-2xl `}>
<SlideCompenets/>
    </div>
   <Kampanyalar/>

  </div>
  )
}

export default Gallery
