"use client"
import { useState,useEffect } from 'react'
import React, { useRef } from 'react'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { storage } from '@/firebase/firebase'
import Link from 'next/link';
import './style.css'

function Product(p) {
    const divref=useRef()
    const [resim,setresim]=useState()
    const storafeRef=ref(storage,`ürünler/${p.resim}`)

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
   <Link href={`/product/${p.resim}`}>
           <div  style={{}} className=' shadow-2xl pro w-32  border-spacing-8 relative rounded-lg h-[100%]' >
<img className='h-[85%] w-full'  style={{objectFit:'cover',}} src={resim} alt="" />
<h4 className='absolute bottom-0 left-0 w-full h-12 text-center border rounded-md text text-anarenk2 font-fontc'>
  <div className='flex flex-col w-full h-full '>
<h1>{p.title} </h1>
<h2>{p.fiyat}.00₺ </h2>
  </div>
</h4>

 </div>
    </Link>
    )
}

export default Product
