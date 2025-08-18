import z from "zod"

const signUpSchema = z.object({
  firstName:z.string().min(1,{message:'first name is required'}),
  lastName:z.string().min(1,{message:'last name is required'}),
  email:z.string().min(1,{message:'email is required'}).email(),
  password:z.string().min(8,{message:'password must be at least 8 characters'})
  .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/,{message:'password should contain 1 special character'}),
  confirmPassword:z.string().min(1,{message:'confirm password is required'})
  }).refine((input) => input.password === input.confirmPassword,{message:"password and confirm password doesn't match",
    path:['confirmPassword']
  })
 export type Input =z.infer<typeof signUpSchema>
  export default signUpSchema