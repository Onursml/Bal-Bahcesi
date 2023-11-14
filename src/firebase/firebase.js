"use client"
import { initializeApp } from "firebase/app";

import { addDoc, doc, } from 'firebase/firestore';
import { getFirestore,setDoc,getDoc, getDocs,collection,query, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from 'react';
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4mEeW9YNYgBqeqi2_dDFOl6p-RCwEmh0",
  authDomain: "bal-bahcesi.firebaseapp.com",
  projectId: "bal-bahcesi",
  storageBucket: "bal-bahcesi.appspot.com",
  messagingSenderId: "1089400255290",
  appId: "1:1089400255290:web:7baba5d4beb64ae5e91603",
  measurementId: "G-Z04EXHZZTW",
  databaseURL: "https://bal-bahcesi-default-rtdb.firebaseio.com/",
  storageBucket: "bal-bahcesi.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); export const storage=getStorage(app)


//  export function writeUserData(userId, name, email, imageUrl) {
//   const db =getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

 export  function setDocument() {
  // [START firestore_data_set_from_map]
  const data = {
    name: 'onur Angeles',
    state: 'CasA',
    country: 'tr'
  };
  setDoc(doc(db, 'users', "onur"), data)
    .then(() => {console.log('kayıt olundusadasd adasd')}).catch(error=>console.log(error))
}
export const getDocuments=()=>{
  const collectionref=collection(db,"users")
    const [duyuru,setduyuru]=useState([])
    useEffect(() => {
 const q=query(collectionref) 
      onSnapshot(q,snapshot=>{
     setduyuru(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
     
    })
    }, [])
    
  return duyuru
  }
//--------------------------------------------------------------------------------------------------------------------------

 export const addproduct=async (userdata)=>{
    
    const docRef=collection(db,"product")
    await addDoc(docRef,userdata)


}



export const getnotlar=()=>{
  const collectionref=collection(db,"users")
    const [not,setnot]=useState([])
    useEffect(() => {
      onSnapshot(collectionref,snapshot=>(
      setnot(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
      ))
     }, [])
     return not
     }




     export const getproduct=()=>{
      const collectionref=collection(db,"product")
        const [not,setnot]=useState([])
        useEffect(() => {
          onSnapshot(collectionref,snapshot=>(
          setnot(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
          ))
         }, [])
         return not
         }
    