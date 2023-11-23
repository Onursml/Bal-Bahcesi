"use client"
import Product from '@/components/Production/Product'
import { addproduct, storage,addGalery } from '@/firebase/firebase';
import { uploadBytes,ref} from 'firebase/storage';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
function page() {
  const formref = useRef()
  const [image,setimage]=useState()
  const [galimage,setgalimage]=useState()


const [data,setData]=useState(
  {
    id:"",
    ad:"",
    text:"",
    fiyat:""

  }
  
 
)
const [Galery,setGalery]=useState(
  {
 
    title:"",
    content:"",
   

  })
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
 const addGaleri=(e)=>{
  e.preventDefault()
  console.log(Galery)


  const quid= uuidv4()
const storafeRef=ref(storage,`Galery/${quid}`)
uploadBytes(storafeRef,galimage)
const üründata=
  {
    id:quid,
    ttie:Galery.title,
  content:Galery.content,
   
  }

addGalery(üründata)
formref.current.reset()
toast('galeriye eklendi')
 }

  return (
    <div className='w-full gap-3 flex flex-col mt-2 border p-4 h-[85vh]'>
{/* -------------------------------ÜRÜN EKLEME---------------------------------------------------------------------------------------  */}
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
            <hr className='w-full h-2 mt-5 mb-5' />
{/* -----------------------------------------------GALERY EKLEME--------------------------------------------------------------------------------------- */}
            <form ref={formref} className='flex flex-col gap-3 ' onSubmit={addGaleri} action="">
          <div className='flex gap-5 '>
<label className='px-2 border rounded-lg' htmlFor="">kapak fotografı:</label>
<input onChange={e=>setgalimage(e.target.files[0])
} 
 className='px-2 border rounded-md ' type="file" />
              </div>

              <div className='flex gap-5 '>
<label className='px-2 border rounded-lg' htmlFor="">title:</label>
<input onChange={e=>setGalery({...Galery,title:e.target.value})} 
 className='px-2 border rounded-md ' type="text" />
              </div>



              <div className='flex gap-5 '>
<label className='px-2 border rounded-lg h-fit' htmlFor="">content:</label>
<textarea onChange={e=>setGalery({...Galery,content:e.target.value})}  rows={5} cols={50} 
 className='px-2 border rounded-md ' type="text" />

              </div>

           


 <button className='px-2 border rounded-md '  type="submit"  >ekle</button>
    
            </form>   
    
         
    </div>
  )
}

export default page
