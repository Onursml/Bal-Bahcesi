"use client"
import './globals.css'
import Navbar from '@/components/navbar'

import { store } from './Store'
import { Provider } from 'react-redux'
import MenuContent from '@/components/MobileUI/MenuContent'
import BarContent from '@/components/MobileUI/BasketContent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function RootLayout({ children }) {
  return (
    <html lang="tr">
    <Provider store={store}>
      
      <body>
        <Navbar />
        <MenuContent/>
        <BarContent/>
        <ToastContainer
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        {children}
      </body>
    </Provider>
    </html>
  )
}
