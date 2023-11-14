"use client"
import { useState,useEffect } from 'react'
import React, { useRef } from 'react'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { storage } from '@/firebase/firebase'
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
const Handlemouse=()=>{
    

    divref.current.classList.remove('top-[100%]')
    divref.current.classList.toggle('top-0')
    

}
const Handlemousee=()=>{
    

    divref.current.classList.remove('top-0')
    divref.current.classList.toggle('top-[100%]')
 


}
    
    return (
        <div onMouseEnter={Handlemouse} onMouseLeave={Handlemousee} style={{}} className=' shadow-2xl pro w-28  border-spacing-8 relative rounded-lg h-[90%]' >
<img className='h-[85%]' src={resim} alt="" />
<h4 className='absolute bottom-0 left-0 w-full h-8 text-center border rounded-md text text-anarenk2 font-fontc'>{p.title} </h4>
<div ref={divref} className='w-full h-[80%] top-[100%] p-2 text-xs rounded-lg info'>
{p.text}
</div>
 </div>
    )
}

export default Product
