import React from 'react';
import { useSelector } from 'react-redux';
import './Mobile.css';
import { deleteBasket } from '@/Redux/Basket';
import { openbasket } from '@/Redux/Mobilecontrol';
import { useDispatch } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { toast } from 'react-toastify';

function BasketContent() {
  const visible = useSelector((state) => state.mobileco.basket);
  const basket = useSelector((state) => state.basket.sepet);
  const dispatch = useDispatch();
  const [parent] = useAutoAnimate();

  const countItemsInBasket = (itemName) => {
    return basket.filter((item) => item.name === itemName).length;
  };

  const uniqueBasketItems = Array.from(new Set(basket.map((item) => item.name)));

  return (
    <div ref={parent} className={`fixed flex items-center flex-col z-40 mbbasket overflow-hidden top-14 right-0 h-full transition-all duration-500 sm:hidden ${visible ? "w-[90%] p-4 " : "w-0 bg-opacity-100"}`}>
      <h1 className='relative font-fontb'>Sepetiniz <button onClick={() => dispatch(openbasket())} className='absolute top-0 left-[-6rem] text-xl'>x</button></h1>
      <hr className='w-full mb-5 ' />
      <div ref={parent} className='flex flex-col h-96 w-72 '>
        {uniqueBasketItems.map((itemName) => {
          const itemCount = countItemsInBasket(itemName);
          const item = basket.find((item) => item.name === itemName);

          return (
            <div key={item.id} className='flex justify-between h-10 p-1 mb-2 border border-b-2 rounded-lg text-anarenk2 bg-anarenk border-anarenk'>
              <p>
                {itemName} {itemCount > 1 && <span className="ml-2 text-sm">(x{itemCount})</span>}
              </p>
              <p>{item.price * itemCount} TL</p>
              <button className='text-[red]' onClick={() => dispatch(deleteBasket(item.id))}>sil</button>
            </div>
          );
        })}
        {basket.length < 1 && <p>Sepetinizde Ürün Bulunmamaktadır</p>}
      </div>
      <h2 className='text-xl font-fontb w-44'>Toplam Tutar: {basket.reduce((a, b) => a + b.price, 0)} TL</h2>
      <hr className='w-full mt-5 mb-5 ' />
      <button  disabled={basket.length === 0} onClick={() => toast('selam')}  className={`w-1/2 h-8 rounded-3xl text-anarenk2 font-fontc bg-anarenk ${basket.length === 0 && 'cursor-not-allowed opacity-50'}`}>Satın Al</button>
    </div>
  );
}

export default BasketContent;