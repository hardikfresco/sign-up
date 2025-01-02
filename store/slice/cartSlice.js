import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0
}

const cartSlice = createSlice({
    name: "cart" ,
    initialState,
    reducers:{
        cart: (state,action)=>{
            state.counter = action.payload;
        }
    }
})

export const {cart} = cartSlice.actions;
export default cartSlice.reducer;