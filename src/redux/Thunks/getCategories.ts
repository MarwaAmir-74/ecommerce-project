import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type TResponse ={
    id:number
    title:string
    prefix:string 
    img:string

}[]
export const getCategories =createAsyncThunk('categories/getCategories', async(_,thunkAPI) =>{
    const {rejectWithValue,signal} = thunkAPI
    try{
        const response= await axios.get<TResponse>('http://localhost:5000/categories',{signal})
        return response.data
    }
    catch(error){
       return rejectWithValue(axiosErrorHandler(error))
    }
})