import { configureStore } from '@reduxjs/toolkit'
import basketreducer from '../Redux/Basket'

export const store = configureStore({
  reducer: {
    basket: basketreducer,
  },
})