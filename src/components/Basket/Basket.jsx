"use client"
import React from 'react';
import './Basket.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasket } from '@/Redux/Basket';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Basket() {
  const basket = useSelector((state) => state.basket.sepet);
  const dispatch = useDispatch();
  const [parent] = useAutoAnimate();

  const countItemsInBasket = (itemName) => {
    // Sepetteki belirli bir ürünün adedini sayan yardımcı fonksiyon
    return basket.filter((item) => item.name === itemName).length;
  };

  const uniqueBasketItems = Array.from(new Set(basket.map((item) => item.name)));

  return (
    <div ref={parent} className='w-60 mr-3 h-[29rem] min-w-60 max-md:hidden rounded-lg flex flex-col gap-1 sepet'>
      <h1 className='pt-5 text-xl font-bold text-center font-fontb text-anarenk2'>Sepetiniz</h1>
      <div ref={parent}>
        {uniqueBasketItems.map((itemName) => {
          const itemCount = countItemsInBasket(itemName);
          const item = basket.find((item) => item.name === itemName);

          return (
            <div key={item.id} className='border w-[90%] mx-auto h-6 rounded-lg whitespace-nowrap overflow-visible urun-text  mb-2 flex font-fontb  justify-evenly'>
              <div className='urun-text'>{item.name}</div>-
              <div className='urun-text'>{item.price} TL </div>
              <div onClick={() => dispatch(deleteBasket(item.id))} className='text-xs cursor-pointer text-ararenk3'>
                x{itemCount} sil
              </div>
            </div>
          );
        })}
      </div>
      <div className='h-full w-[90%] mx-auto justify-end gap-1 rounded-lg text-xs flex-col mb-3 flex font-fontb'>
        <div className=''>Toplam :{basket.reduce((a, b) => a + b.price, 0)} TL </div>
        <div className=''>KDV : {basket.reduce((a, b) => a + b.price, 0) * 0.18} TL </div>
        <div className=''>Toplam Tutar :{basket.reduce((a, b) => a + b.price, 0) * 1.18} TL </div>
        <div className='text-2xl font-bold text-center underline text-anarenk2 font-fontc'>Satın al</div>
      </div>
    </div>
  );
}

export default Basket;
