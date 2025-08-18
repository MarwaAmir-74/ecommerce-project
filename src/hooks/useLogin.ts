import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import UseCheckEmailAvailability from "@/hooks/UseCheckEmailAvailability"
 import { useAppDispatch } from "@/redux/hooks"
import authLogin from "@/redux/Thunks/authLogin"
import { useNavigate } from "react-router-dom"
import { signInSchema, type Input } from "@/validation/signInSchema"

const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  const {register , handleSubmit,formState:{errors},trigger,getFieldState} =useForm<Input>({
    mode:'onBlur',
    resolver: zodResolver(signInSchema),
  })
  const submitForm:SubmitHandler<Input>= (data) =>{
    dispatch(authLogin(data)).unwrap().then(()=>{navigate('/')})
  }
 const {emailAvailabilityStatus,prevEmail,checkEmailAvailability,resetCheckEmailAvailability}=UseCheckEmailAvailability()
const emailOnBlurHandler = async (e:React.FocusEvent<HTMLElement>) =>{
  await trigger('email')
  const value = (e.target as HTMLInputElement).value
  const{isDirty,invalid} = getFieldState('email')
  if(isDirty && !invalid && prevEmail !== value){
    checkEmailAvailability(value)
  }
  if(isDirty && invalid && prevEmail ){
    resetCheckEmailAvailability()
  } 
}

 const inputClass ="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm py-2 px-3";

const submitButton= "w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  return { register,handleSubmit,errors,submitForm,emailOnBlurHandler,emailAvailabilityStatus,inputClass,submitButton}
}

export default useLogin