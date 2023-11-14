"use client"
import React, { useEffect, useState } from 'react'

import { addurun, getnotlar, geturun } from '@/firebase/firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { storage } from '@/firebase/firebase'





export default function page() {
  const [resim,setresim]=useState()
  const [resimm,setresimm]=useState()
  const storafeRef=ref(storage,'ürünler/resim')

  useEffect(()=>{
    getDownloadURL(storafeRef).then((url)=>{
      setresim(url)
    
    }).catch(error=> console.log(error))
   
    return ()=>{
      setresim()
    }

  },[])

  const  fromadd=(e)=>{
    e.preventDefault();

        const userdata={
         name:"onur",
         soysısım:"şamlı"
        }
     
        addurun(userdata)
      }
  
  const urun =getnotlar()
  console.log(urun)
 

    
  return (
    <div className='p-5'>
      selam
    <form onSubmit={fromadd}>
        <input type="text" placeholder='adınızı giriniz' className='p-2 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer wbg-red-500 hover:bg-red-600 ' />
        <input type="text" placeholder='imail' className='p-2 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer wbg-red-500 hover:bg-red-600 ' />
        <input type="text" placeholder='id giriniz' className='p-2 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer wbg-red-500 hover:bg-red-600 ' />
    <button type='submit' className='p-2 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-md cursor-pointer wbg-red-500 hover:bg-red-600 ' 
    >kayıt ol</button> 
    </form>
    <input accept='image/*' type="file" onChange={e=>{ 
      const file=  e.currentTarget.files[0]
      uploadBytes(storafeRef,file)
      setresimm(file)
      console.log(file)
       } } />
      {resim && <img src={resim} width={200} alt="" /> }
      

  <div>
    {urun.map((urun)=>urun.id)}

  </div>
    </div>
  )
}
