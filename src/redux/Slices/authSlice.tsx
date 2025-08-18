import type { TLoading } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import { authRegister } from '../Thunks/authRegister'
import authLogin from '../Thunks/authLogin'
 interface AuthState {
    loading:TLoading
    error:string | null
    accessToken:string |null
    user:{
        id:string
        firstName:string
        lastName:string
        password:string
        email:string
    }|null
}
const initialState:AuthState ={
    loading:'idle',
    error:null,
    accessToken:null,
    user:null
}
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetUI:(state)=>{
            state.error=null
            state.loading='idle'
        },
        authLogout:(state) =>{
            state.user=null
            state.accessToken=null
        }
        
    },
    extraReducers(builder) {
        builder.addCase(authRegister.pending,(state) =>{
            state.error=null
            state.loading='pending'
        })

        .addCase(authRegister.fulfilled,(state) =>{
            state.loading='succeeded'
        })
        .addCase(authRegister.rejected,(state,action) =>{
             state.loading='failed'
            if(action.payload && typeof action.payload as string)
            state.error=action.payload as string 
        })


        .addCase(authLogin.pending,(state) =>{
            state.error=null
            state.loading='pending'
        })
        .addCase(authLogin.fulfilled,(state,action) =>{
            state.loading='succeeded'
            state.accessToken=action.payload.accessToken
            state.user=action.payload.user
            
        })
        .addCase(authLogin.rejected,(state,action) =>{
             state.loading='failed'
            if(action.payload && typeof action.payload as string)
            state.error=action.payload as string 
        })
        
    },
})

export default authSlice.reducer
export const {resetUI,authLogout}= authSlice.actions