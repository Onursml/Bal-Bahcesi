import React from 'react'
import İmage from 'next/image'
function Photocomp(props) {
  return (


      <İmage className='rounded-lg ' src={`${props.foto}`} width= {800} height={500} alt="gallery" />


        
  
   
  )
}

export default Photocomp
