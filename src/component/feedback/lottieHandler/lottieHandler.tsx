import Lottie from "lottie-react"
import notFound from "./../../../assets/lottie/notFound.json"
import cart from "./../../../assets/lottie/cart.json"
import loading from "./../../../assets/lottie/loading.json"
import wishList from "./../../../assets/lottie/wishList.json"
import error from "./../../../assets/lottie/error.json"
import success from "./../../../assets/lottie/success.json"

const lottieFilesMap ={
    notFound,
    cart,
    loading,
    error,
    wishList,
    success
}
type LottieHandlerProps ={
    type: keyof typeof lottieFilesMap
    message?:string 
    className?:string
    children:React.ReactNode
    
}


export const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];

  return (
    <div className="flex flex-col items-center w-full">
      <Lottie 
        animationData={lottie}  
        style={{
          width: '30vw',   
          maxWidth: '400px',  
          minWidth: '200px', 
          maxHeight: 'auto',
        }}
      />
      {message && <h3 className="text-[19px] mt-4 text-center">{message}</h3>}
    </div>
  );
}