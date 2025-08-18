import Heading from "@/component/shared/Heading/Heading"
import useLogin from "@/hooks/useLogin";

function Login() {
const{register,handleSubmit,errors,submitForm,emailOnBlurHandler,emailAvailabilityStatus,inputClass,submitButton} = useLogin()
  return (
    <>
      <Heading title="User Register" />
      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input type="email" id="email" className={`${inputClass} ${errors.email ? "border-red-500":''}`} {...register('email')} onBlur={(e) => {
                register('email').onBlur(e);
                emailOnBlurHandler(e)
              }}/>
              {emailAvailabilityStatus === 'available' ?'this email is available for use' :''}
              {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" id="password" className={`${inputClass} ${errors.password ? "border-red-500":''}`} {...register('password')}/>
              {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
            </div>
            <button className={submitButton}
            disabled={emailAvailabilityStatus === 'checking' ? true : false}
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
