import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"
export const LikeToggle = createAsyncThunk(
  'wishList/likeToggle',
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const isRecordExist = await axios.get(
        `${BASE_URL}/wishlist?userId=1&productId=${id}`
      );

      if (isRecordExist.data.length > 0 && isRecordExist.data[0].id) {
        await axios.delete(`${BASE_URL}/wishlist/${isRecordExist.data[0].id}`);
        return { type: 'remove', id };
      } else {
        await axios.post(`${BASE_URL}/wishlist`, {
          userId: '1',
          productId: id,
        });
        return { type: 'add', id };
      }
    } catch (error) {
     return rejectWithValue(axiosErrorHandler(error))
    }
  }
);
