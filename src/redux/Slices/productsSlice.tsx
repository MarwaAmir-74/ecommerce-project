import { createSlice } from "@reduxjs/toolkit";
 import { getProductsByCatPrefix } from "../Thunks/getProductsByCatPrefix";
import type { TProduct } from "@/types/types";
import { getAllProducts } from "../Thunks/getAllProducts";
interface CategoriesState {
    records:TProduct[],
    loading:'idle'|'pending'|'succeeded'|'failed',
    error:string|null
}
const initialState:CategoriesState={
    records:[],
    loading:"idle",
    error:null
}
const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        cleanUpProductRecords:(state) =>{
            state.records=[]
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getProductsByCatPrefix.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        .addCase(getProductsByCatPrefix.fulfilled,(state,action) =>{
            state.records=action.payload
            state.loading='succeeded'
        })
        .addCase(getProductsByCatPrefix.rejected,(state,action)=>{
            if(action.payload && typeof action.payload === 'string'){
                state.error=action.payload
            }
        })
        
        .addCase(getAllProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    })
    .addCase(getAllProducts.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    },
})
export const {cleanUpProductRecords}=ProductsSlice.actions
export default ProductsSlice.reducer
 