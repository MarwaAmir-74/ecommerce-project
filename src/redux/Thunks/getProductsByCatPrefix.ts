import type { TProduct } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type TResponse = TProduct[]
export const getProductsByCatPrefix =createAsyncThunk<TResponse,string>
('products/getProductsByCatPrefix', async(prefix,thunkAPI) =>{
    const {rejectWithValue,signal} = thunkAPI
    try{
        const response= await axios.get<TResponse>(`http://localhost:5000/products?cat_prefix=${prefix}`,{signal})
        return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }else{
           return rejectWithValue('An unexpected error')
        }
    }
})