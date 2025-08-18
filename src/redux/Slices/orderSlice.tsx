import { createSlice } from "@reduxjs/toolkit";
import type {TLoading, TOrderItem} from "../../types/types";
import placeOrder from "../Thunks/placeOrder";
import actGetOrders from "../Thunks/getOrder";
interface TOrderSlice{
    orderList :TOrderItem[]
    loading:TLoading
    error:null|string
    
}
const initialState:TOrderSlice={
    orderList:[],
    loading:'pending',
    error:null
}
export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(placeOrder.pending,(state) =>{
            state.error=null
            state.loading='pending'
        })
        .addCase(placeOrder.fulfilled,(state) =>{
            state.loading='succeeded'
        })
        .addCase(placeOrder.rejected,(state,action) =>{
            state.loading='failed'
            if(action.payload && typeof action.payload === 'string'){
                state.error=action.payload
            }
        })

        .addCase(actGetOrders.pending,(state) =>{
            state.error=null
            state.loading='pending'
        })
        .addCase(actGetOrders.fulfilled,(state,action) =>{
            state.loading='succeeded'
            state.orderList=action.payload
        })
        .addCase(actGetOrders.rejected,(state,action) =>{
            state.loading='failed'
            if(action.payload && typeof action.payload === 'string'){
                state.error=action.payload
            }
        })
    },
})

export default orderSlice.reducer 