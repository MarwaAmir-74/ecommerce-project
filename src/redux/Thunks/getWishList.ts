import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TWishlistItem = {
  id: number;
  userId: number;
  productId: number;
};

const getWishList = createAsyncThunk("wishlist/actGetWishList",async (_, thunkAPI) => {
  
    const { rejectWithValue, fulfillWithValue,signal } = thunkAPI;

    try {
      const userWishList = await axios.get<TWishlistItem[]>(
        "http://localhost:5000/wishlist?userId=1",
        {signal}
      );

      if (!userWishList.data.length) {
        return fulfillWithValue([]);  
      }

      const concatenatedItemsId = userWishList.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const response = await axios.get(`http://localhost:5000/products?${concatenatedItemsId}`);

      return fulfillWithValue(response.data);  
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default getWishList;
