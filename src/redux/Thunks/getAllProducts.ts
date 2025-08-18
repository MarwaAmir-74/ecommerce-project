// redux/thunk/getAllProducts.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:5000/products`)
 
      return res.data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
