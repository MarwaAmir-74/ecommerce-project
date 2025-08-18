import getProductsITemsById from "@/redux/Thunks/getProductsById"
import type { TCartState } from "@/types/types"
import { createSlice } from "@reduxjs/toolkit"

const initialState:TCartState={
    items: {},
    productFullInfo: [] ,
    loading: "idle",
    error: null
}
const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            const id = action.payload
            if(state.items[id]){
                state.items[id]++
            }else{
                state.items[id] = 1 
            }
        },
        cartRemoveItem:(state,action)=>{
            const id = action.payload
            delete state.items[action.payload]
            state.productFullInfo = state.productFullInfo.filter((el) => el.id !== id) 
        },
        cartItemChangeQuantity:(state,action) =>{
            state.items[action.payload.id] = action.payload.quantity 
        },
        cleanCartProductFullInfo:(state) =>{
            state.productFullInfo=[]
        },
        clearCartAfterPlaceOrder:(state) =>{
            state.items={}
            state.productFullInfo=[]
        }

    },
    extraReducers(builder) {
        builder
        .addCase(getProductsITemsById.pending,(state)=>{
            state.error=null
            state.loading='pending'
        })
        .addCase(getProductsITemsById.fulfilled,(state,action)=>{
            state.loading ='succeeded'

           if (!Array.isArray(action.payload)){
            state.productFullInfo=[]
            return;
            }
            state.productFullInfo = action.payload.map((item) =>({
            ...item,
            quantity : state.items[item.id] || 0
        }))
        })
        .addCase(getProductsITemsById.rejected,(state,action) =>{
            state.loading='failed'
            if(typeof action.payload === 'string'){
                state.error= action.payload as string
            }
        })
    },
})

export default cartSlice.reducer
export const {addToCart,cartItemChangeQuantity,cartRemoveItem,cleanCartProductFullInfo,clearCartAfterPlaceOrder} = cartSlice.actions