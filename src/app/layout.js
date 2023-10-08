import './reset.css'
import './globals.css'
import Navbar from '@/components/navbar'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className=''>
        <Navbar/>
        {children}</body>
    </html>
  )
}
