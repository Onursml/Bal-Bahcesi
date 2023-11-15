"use client"
import React, { useEffect, useState } from 'react'
import { getproduct } from '@/firebase/firebase'
import { getDownloadURL, ref   } from "firebase/storage";
import { storage } from '@/firebase/firebase'



function Page({params}) {
const [resim,setresim] = useState()
const products = getproduct()
const product = products.filter(p=>p.id==params.pro)




const storafeRef=ref(storage,`ürünler/${params.pro}`)



useEffect(()=>{
    getDownloadURL(storafeRef).then((url)=>{
      setresim(url)
      console.log(url)
    }).catch(error=> console.log(error))
   
    return ()=>{
      setresim()
    }

  },[])

    return (
        <div className='flex justify-center gap-10 p-5 w-ful '>


    <img className=' rounded-3xl w-60 h-96' src={resim} alt="" />
        <div className=' w-96 h-96'>
        <h1 className='text-5xl text-center font-fontc '>{product.length > 0 ? product[0].ad : 'yükleniyor'}</h1>
        <hr className='w-full h-px my-2 bg-gray-200 border-collapse dark:bg-gray-700' />
        <p className='text-xl text-center'>{product.length > 0 ? product[0].text : 'yükleniyor'}</p>
        <hr className='w-full h-px my-2 bg-gray-200 border-collapse dark:bg-gray-700' />
        <p className='text-xl text-center'>{product.length > 0 ? product[0].fiyat : 'yükleniyor'}TL</p>
        </div>
     
        
        </div>
    )
}

export default Page
