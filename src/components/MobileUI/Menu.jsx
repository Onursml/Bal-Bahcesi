import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openbar} from '@/Redux/Mobilecontrol';


function Menu() {
    const basket = useSelector((state) => state.basket.sepet);
    const dispatch = useDispatch();

  return (
    <div onClick={()=>dispatch(openbar())} className='my-auto  text-anarenk2 sm:hidden'>
      
      <MdOutlineMenu size={25} />
    </div>
  )
}

export default Menu
