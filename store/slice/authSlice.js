'use client'
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
                state.loading = false;
                state.user = action.payload;
              },
  },
});

export const {addUser} = authSlice.actions;
export default authSlice.reducer;
