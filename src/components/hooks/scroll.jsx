"use client"
import { useEffect, useState } from 'react';

const UseScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfanın en üstünden en altına olan mesafeyi ve pencerenin yüksekliğini alalım
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Yüzdelik olarak kaydırma hesapla
      const percentage = (scrollTop / scrollHeight) * 100;
      
      // Yüzdelik değeri güncelle
      setScrollPercentage(percentage);
    };

    // Event listener'ı ekleyelim
    window.addEventListener('scroll', handleScroll);

    // Component unmount olduğunda event listener'ı kaldıralım
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // useEffect'i sadece bir kere çalıştırmak için boş bir dependency array kullanıyoruz

  return scrollPercentage;
};

export default UseScrollPercentage;