import { createSlice } from "@reduxjs/toolkit";
import { LikeToggle } from "../Thunks/likeToggle";
import type { TLoading, TProduct } from "@/types/types";
 import getWishList from "../Thunks/getWishList";
import { authLogout } from "./authSlice";
export interface WishListState {
    itemsId:number[]
    error:string | null
    loading:TLoading
    productsFullInfo:TProduct[]
}
const initialState:WishListState ={
    itemsId:[],
    error:null,
    loading:'idle',
    productsFullInfo:[]
}
const wishListSlice = createSlice({
    name:'wishList',
    initialState,
    reducers:{
        productsFullInfoCleanUp:(state) =>{
            state.productsFullInfo=[]
        },
        cleanWishListProductFullInfo:(state)=>{
            state.productsFullInfo=[]
        }
    },
     extraReducers: (builder) => {
   builder.addCase(LikeToggle.pending, (state) => {
  state.error = null;
});
builder.addCase(LikeToggle.fulfilled, (state, action) => {
  if (action.payload.type === 'add') {
    state.itemsId.push(action.payload.id);
  } else {
    state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
    state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload.id);
  }
});
builder.addCase(LikeToggle.rejected, (state, action) => {
  if (action.payload && typeof action.payload === 'string') {
    state.error = action.payload;
  }
});

builder.addCase(getWishList.pending, (state) => {
  state.loading = 'pending';
  state.error = null;
});
builder.addCase(getWishList.fulfilled, (state, action) => {
  state.loading = 'succeeded';
  state.productsFullInfo = action.payload;
  state.itemsId = action.payload.map((p: TProduct) => p.id);   
});
builder.addCase(getWishList.rejected, (state, action) => {
  if (action.payload && typeof action.payload === 'string') {
    state.loading = 'failed';
    state.error = action.payload;
  }
});
        builder.addCase(authLogout,(state) =>{
            state.itemsId=[]
            state.productsFullInfo=[]
        })
  },
})
export const {productsFullInfoCleanUp} = wishListSlice.actions
export default wishListSlice.reducer