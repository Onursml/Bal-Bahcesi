import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openbasket } from '@/Redux/Mobilecontrol';


function Navbasket() {
    const basket = useSelector((state) => state.basket.sepet);
    const dispatch = useDispatch();

  return (
    <div onClick={()=>dispatch(openbasket())} className='relative my-auto text-anarenk2 sm:hidden '>
        <p className='absolute top-[-0.9rem] right-0 font-bold text-ararenk3'>{basket.length>0 ? basket.length:null }</p>
      <FaBasketShopping size={25} />
    </div>
  )
}

export default Navbasket
