import { createSlice } from '@reduxjs/toolkit'
import { data } from 'autoprefixer';

const initialState = {
  sepet: [
    
 
  ],
}

export const basketSlice  = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    deleteBasket: (state, action) => {
      const newBasket = state.sepet.filter(item => item.id !== action.payload);
      state.sepet = newBasket;
    }
,
    addBasket: (state,action ) => {

     
      state.sepet.push(action.payload);
      
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { deleteBasket,addBasket } = basketSlice.actions

export default basketSlice.reducer