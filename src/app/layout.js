"use client"
import './globals.css'
import Navbar from '@/components/navbar'

import { store } from './Store'
import { Provider } from 'react-redux'
import MenuContent from '@/components/MobileUI/MenuContent'
import BarContent from '@/components/MobileUI/BasketContent'






export default function RootLayout({ children }) {
  return (
    <html lang="tr">
    <Provider store={store}>
      
      <body>
        <Navbar />
        <MenuContent/>
        <BarContent/>
        {children}
      </body>
    </Provider>
    </html>
  )
}
