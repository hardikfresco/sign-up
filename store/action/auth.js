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

      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (userData, {dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth', userData);
      response.data.status==1 && dispatch(addUser(response.data.user));
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);