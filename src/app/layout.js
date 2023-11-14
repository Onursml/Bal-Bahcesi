"use client"
import './globals.css'
import Navbar from '@/components/navbar'

import { store } from './Store'
import { Provider } from 'react-redux'





export default function RootLayout({ children }) {
  return (
    <html lang="tr">
    <Provider store={store}>
      
      <body>
        <Navbar />
        {children}
      </body>
    </Provider>
    </html>
  )
}
