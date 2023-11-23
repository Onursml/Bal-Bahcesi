
import Basket from '@/components/Basket/Basket'

import Gallery from '@/components/Gallery/Gallery'
import Production from '@/components/Production/Production'


export const metadata = {
  title: 'BAL BAHÇESİ',
  description: 'ASDASD',
  
}
 



export default function Home() {


  return (
 <main className= 'flex w-full h-full screen'>
  
  <div className='max-sm:w-[99%]  max-sm:px-0  gap-5 w-[80%] h-[90.5vh] flex flex-col pl-14 pr-6 '>
  <Gallery/>
 <Production/>

  </div >
  <Basket/>
 </main>
  )
}
