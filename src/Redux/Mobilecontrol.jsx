import { createSlice } from '@reduxjs/toolkit'


const initialState = {
 basket: false,
 bar: false
}

export const Mobilecontrol  = createSlice({
  name: 'Mobilecontrol',
  initialState,
  reducers: {
    openbasket: (state ) => {
        state.basket = !state.basket;
        console.log(state.basket);
    }
,
    openbar: (state ) => {
        state.bar = !state.bar;
        console.log(state.bar);
     
   }
 
  },
})

// Action creators are generated for each case reducer function
export const { openbar,openbasket } = Mobilecontrol.actions

export default Mobilecontrol.reducer