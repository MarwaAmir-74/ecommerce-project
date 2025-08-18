import Heading from "@/component/shared/Heading/Heading"
import useRegister from "@/hooks/useRegister";


function Register() {
  const { register,handleSubmit,errors,submitForm,submitButton,inputClass} = useRegister() 

  return (
    <>
      <Heading title="User Registration" />
      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input type="text" id="firstName" className={`${inputClass} ${errors.firstName ?  "border-red-500" : ''}`} {...register("firstName")} />
              {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input type="text" id="lastName" className={`${inputClass} ${errors.lastName ? "border-red-500" :''}`} {...register('lastName')} />
              {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>)}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input type="email" id="email" className={`${inputClass} ${errors.email ? "border-red-500":''}`} {...register('email')}/>
              {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
            </div>
             <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" id="password" className={`${inputClass} ${errors.password ? "border-red-500":''}`} {...register('password')}/>
              {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input type="password" id="confirmPassword" className={`${inputClass} ${errors.confirmPassword ? "border-red-500":''}`} {...register('confirmPassword')}/>
              {errors.confirmPassword?.message}
            </div>

            <button className={submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
