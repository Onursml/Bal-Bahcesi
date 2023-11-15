"use client"
import React from 'react'
import Product from './Product'
import { getproduct } from '@/firebase/firebase'
import './style.css'
function Production() {
   const products = getproduct()
   console.log(products)


    return (
        <div className='flex w-full gap-2 px-3 py-3 overflow-hidden shadow-xl procontanier rounded-2xl max-sm:w-[97%] max-sm:mx-auto h-60 '>
       {products.map((product)=>(
           <Product key={product.id} title={product.ad} text={product.text} resim={product.id} fiyat={product.fiyat} />
       ))}
         
            </div>
    )
}

export default Production
