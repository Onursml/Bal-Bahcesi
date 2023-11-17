"use client"
import React from 'react'
import Product from './Product'
import { getproduct } from '@/firebase/firebase'
import './style.css'
import { motion } from 'framer-motion'
function Production() {
   const products = getproduct()



    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        className='flex w-full gap-2 px-3 py-3 overflow-hidden shadow-xl procontanier rounded-2xl max-sm:w-[97%] max-sm:mx-auto h-60 '>
       {products.map((product)=>(
           <Product key={product.id} title={product.ad} text={product.text} resim={product.id} fiyat={product.fiyat} />
       ))}
         
            </motion.div>
    )
}

export default Production
