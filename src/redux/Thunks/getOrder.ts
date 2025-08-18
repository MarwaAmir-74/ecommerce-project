import type { RootState } from "@/store";
import type { TOrderItem } from "@/types/types";
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = TOrderItem[];

const actGetOrders = createAsyncThunk(
    "orders/actGetOrders",
    async (_, thunkAPI) => {
        const { rejectWithValue, getState, signal } = thunkAPI;
        const { auth } = getState() as RootState;
        
        try {
            const res = await axios.get<TResponse>(`http://localhost:5000/orders?userId=${auth.user?.id}`, {
                signal
            });
            console.log("Orders response: ", res.data)

            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetOrders;