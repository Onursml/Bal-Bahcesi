import { configureStore } from '@reduxjs/toolkit'
import basketreducer from '../Redux/Basket'
import Mobilecontrol from '../Redux/Mobilecontrol'


export const store = configureStore({
  reducer: {
    basket: basketreducer,
    mobileco: Mobilecontrol,
  
  },
})