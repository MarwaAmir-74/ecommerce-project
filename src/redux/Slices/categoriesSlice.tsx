import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../Thunks/getCategories";
import type { TLoading } from "@/types/types";
interface CategoriesState {
    records:{id:number; title:string; prefix:string ;img:string}[],
    loading:TLoading,
    error:string|null
}
const initialState:CategoriesState={
    records:[],
    loading:'pending',
    error:null
}
const CategoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        cleanCategoriesFullInfo:(state)=>{
            state.records=[]
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getCategories.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        .addCase(getCategories.fulfilled,(state,action) =>{
            state.records=action.payload
            state.loading='succeeded'
        })
        .addCase(getCategories.rejected,(state,action)=>{
            if(action.payload && typeof action.payload === 'string'){
                state.error=action.payload
            }
        })
    },
})
export default CategoriesSlice.reducer
export const {cleanCategoriesFullInfo} = CategoriesSlice.actions
 