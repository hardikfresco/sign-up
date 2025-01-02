import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUser } from "../slice/authSlice";

const API_URL = 'http://localhost:5000/api/users';
// Async Thunk for Sign Up
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, {dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, userData);
      response.data.status==1 && dispatch(addUser(response.data.user));
      // Return only the user data from the API response
      return response.data; // Ensure you return only the user data, not the token
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);