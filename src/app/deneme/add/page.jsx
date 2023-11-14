"use client"
import Product from '@/components/Production/Product'
import { addproduct, storage } from '@/firebase/firebase';
import { uploadBytes,ref} from 'firebase/storage';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function page() {
  const formref = useRef()
  const [image,setimage]=useState()


const [data,setData]=useState(
  {
    id:"",
    ad:"",
    text:"",
    fiyat:""

  }
  
 
)
// useEffect(()=>{
//   const selectedImage = data.id  ;

//   if (selectedImage) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setimage(reader.result);
//     };
//     reader.readAsDataURL(selectedImage);
//   }
// },[data.id])

const addurun=(e)=>{
  e.preventDefault()
  console.log(data)


  const quid= uuidv4()
const storafeRef=ref(storage,`ürünler/${quid}`)
uploadBytes(storafeRef,image)
const üründata=
  {
    id:quid,
    ad:data.ad,
    text:data.text,
    fiyat:data.fiyat
  }

addproduct(üründata)
formref.current.reset()

 }


  return (
    <div className='w-full gap-3 flex flex-col mt-2 border p-4 h-[85vh]'>

          <form ref={formref} className='flex flex-col gap-3 ' onSubmit={addurun} action="">
          <div className='flex gap-5 '>
<label className='px-2 border rounded-lg' htmlFor="">Ürün Resmi:</label>
<input onChange={e=>setimage(e.target.files[0])
} 
 className='px-2 border rounded-md ' type="file" />
              </div>

              <div className='flex gap-5 '>
<label className='px-2 border rounded-lg' htmlFor="">Ürün Adı:</label>
<input onChange={e=>setData({...data,ad:e.target.value})} 
 className='px-2 border rounded-md ' type="text" />
              </div>



              <div className='flex gap-5 '>
<label className='px-2 border rounded-lg h-fit' htmlFor="">Ürün açıklaması:</label>
<textarea onChange={e=>setData({...data,text:e.target.value})}  rows={5} cols={50} 
 className='px-2 border rounded-md ' type="text" />

              </div>

              <div className='flex gap-5 '>
<label className='px-2 border rounded-lg' htmlFor="">Ürün Fiyatı:</label>
<input onChange={e=>setData({...data,fiyat:e.target.value})} className='px-2 border rounded-md ' type="number" />
              </div>


 <button className='px-2 border rounded-md ' onClick={()=>console.log(data)} type="submit"  >ekle</button>
    
            </form>   
    
         
    </div>
  )
}

export default page
