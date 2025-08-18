import { useAppDispatch } from "@/redux/hooks"
import { authRegister } from "@/redux/Thunks/authRegister"
import type { Input } from "@/validation/signUpSchema"
import signUpSchema from "@/validation/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const useRegister = () =>{
      const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {register , handleSubmit,formState:{errors}} =useForm<Input>({
    mode:'onBlur',
    resolver: zodResolver(signUpSchema),
  })
  const submitForm:SubmitHandler<Input>= (data) =>{
    const {firstName,lastName,password,email} =data
    dispatch(authRegister({firstName,lastName,password,email})).unwrap().then(() =>{navigate('/login')})
    
  }
  const inputClass ="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm py-2 px-3";
  const submitButton="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
return {register,handleSubmit,errors,submitForm,submitButton,inputClass} 
}

export default useRegister