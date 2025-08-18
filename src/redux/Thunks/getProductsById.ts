import type { RootState } from "@/store";
import type { TProduct } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsITemsById = createAsyncThunk<
  TProduct[],
  void, 
  { state: RootState; rejectValue: string } 
>(
  'cart/getProductsById',
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart } = getState();
    const itemIds = Object.keys(cart.items);

    if (itemIds.length === 0) {
       return [];
    }

    const concatenatedItemsId = itemIds.map((el) => `id=${el}`).join('&');
    const url = `http://localhost:5000/products?${concatenatedItemsId}`;  

    try {
      const response = await axios.get<TProduct[]>(url);
       return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('❌ Axios error:', error.message);
        return rejectWithValue(error.message || 'Unknown Axios error');
      } else {
        console.error('❌ Unexpected error');
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);

export default getProductsITemsById;
