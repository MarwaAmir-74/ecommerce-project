import axiosErrorHandler from "@/util/axiosErrorHandler"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
type FormData={
    email:string
    password:string
}
type Response ={
    accessToken:string,
    user:{
        id:string
        firstName:string
        lastName:string
        password:string
        email:string
    }
}
const authLogin = createAsyncThunk('auth/authLogin', async(formData:FormData,thunkAPI) =>{
    const {rejectWithValue} =thunkAPI
    try{
        const res = await axios.post<Response>("http://localhost:5000/login",{
            email:formData.email,
            password:formData.password
        })
        return res.data
    }
    catch(error){
        return rejectWithValue(axiosErrorHandler(error))
    }
})
export default authLogin