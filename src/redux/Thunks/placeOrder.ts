import type { RootState } from "@/store";
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const placeOrder = createAsyncThunk('orders/placeOrder',async(subTotal:number,thunkAPI)=>{
    const {getState,rejectWithValue} = thunkAPI
    const {cart,auth}= getState() as RootState
    const orderItems = cart.productFullInfo.map((el) => ({
        id:el.id,
        title:el.title,
        price:el.price,
        img:el.img,
        subTotal,
        quantity:cart.items[el.id]
    }))
    try{
        const res =await axios.post('http://localhost:5000/orders',{
            userId:auth.user?.id,
            items:orderItems,
            subTotal,
            createdAt: new Date().toISOString() 
        })
        return res.data
    }
    catch(error){
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default placeOrder