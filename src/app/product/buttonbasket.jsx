import React from 'react'

function Button(p) {
const addbasket=()=>{
  console.log(p.basket)
}

  return (
    <div onClick={addbasket} className='h-10 mx-auto mt-5 text-lg text-center bg-opacity-75 cursor-pointer font-fontc text-ararenk3 w-28 backdrop-blur-3xl rounded-2xl bg-anarenk2'>
      Sepete Ekle
    </div>
  )
}

export default Button
