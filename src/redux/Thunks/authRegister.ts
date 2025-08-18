
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type FormData ={
  firstName:string
  lastName:string
  password:string
  email:string
}
export const authRegister = createAsyncThunk('auth/authRegister', async(formData:FormData,thunk) =>{
    const {rejectWithValue} = thunk
    try{
        const res =await axios.post("http://localhost:5000/register", {
        email: formData.email,
        password: formData.password,
        firstName:formData.firstName,
        lastName:formData.lastName
})
        return res.data
    }
    catch(error){
        return rejectWithValue(axiosErrorHandler(error))
    }
})