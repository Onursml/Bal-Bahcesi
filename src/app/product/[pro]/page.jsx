"use client"
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { getproduct } from '@/firebase/firebase'
import { getDownloadURL, ref   } from "firebase/storage";
import { storage } from '@/firebase/firebase'
import Basket from '@/components/Basket/Basket';
import { addBasket } from '@/Redux/Basket';
import { v4 as uuidv4 } from 'uuid';
import {motion} from 'framer-motion'




function Page({params}) {
const [resim,setresim] = useState()
const dispatch=useDispatch()
const products = getproduct()
const product = products.filter(p=>p.id==params.pro)




const storafeRef=ref(storage,`ürünler/${params.pro}`)



useEffect(()=>{
    getDownloadURL(storafeRef).then((url)=>{
      setresim(url)
      
    }).catch(error=> console.log(error))
   
    return ()=>{
      setresim()
    }

  },[])
  const addbasket=()=>{
  const fiyat= parseInt(product[0].fiyat,10)
 const id = uuidv4()

    const data={
      name:`${product[0].ad}`, price:fiyat, id:id
    }
    dispatch(addBasket(data))
   
  }
  

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        
      
        className='flex justify-around max-sm:gap-5 p-5 max-sm:flex-col sm:h-[90vh]  w-ful bg-anarenk '>


    <img className='shadow-2xl shadow-anarenk2 rounded-3xl h-96' src={resim} alt="" />
        <div className='flex flex-col w-96 max-sm:w-full text-anarenk2 h-96'>
        <h1 className='text-5xl text-center font-fontc '>{product.length > 0 ? product[0].ad : 'yükleniyor'}</h1>
        <hr className='w-full h-px my-2 bg-gray-200 border-collapse dark:bg-gray-700' />
        <p className='text-xl text-center'>{product.length > 0 ? product[0].text : 'yükleniyor'}</p>
        <hr className='w-full h-px my-2 bg-gray-200 border-collapse dark:bg-gray-700' />
        <p className='text-xl text-center'>{product.length > 0 ? product[0].fiyat : 'yükleniyor'}TL</p>
      
        <div onClick={addbasket} className='h-10 mx-auto mt-5 text-lg text-center bg-opacity-75 cursor-pointer font-fontc text-ararenk3 w-28 backdrop-blur-3xl rounded-2xl bg-anarenk2'>
      Sepete Ekle
    </div>
        </div>
      <Basket/>
        
        </motion.div>
    )
}

export default Page
