import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sepet: [
    {name: "Elma dsadsad", price : 10  , id:345345},
    {name: "ayva dsad", price : 15  , id:345545},  
    {name: "kiraz ssadsa", price : 25 , id:355345},
    {name: "kiraz sdasd", price : 25 , id:3455345},
    {name: "kiraz sdsad", price : 25 , id:345535},
    {name: "kir sdsad", price : 25 , id:3455435}
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
    addBasket: (state, ) => {
      state.sepet.push({name: "Elma dsadsad", price : 10  , id:34345});
    
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { deleteBasket,addBasket } = basketSlice.actions

export default basketSlice.reducer