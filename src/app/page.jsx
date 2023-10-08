import Basket from '@/components/Basket/Basket'
import Gallery from '@/components/Gallery/Gallery'
import Production from '@/components/Production/Production'


export default function Home() {
  return (
 <main className='flex h-full screen '>
 
  <div className=' max-sm:hidden gap-5 w-full h-[90.5vh] flex flex-col pl-14 pr-6 '>
 <Gallery/>
 <Production/>

  </div >
  <Basket/>
 </main>
  )
}
