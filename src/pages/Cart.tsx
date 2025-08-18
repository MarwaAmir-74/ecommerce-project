
import CartSubtotalPrice from '@/component/eCommerce/CartSubtotalPrice/CartSubtotalPrice'
import CartItem from '@/component/eCommerce/CartItem/CartItem'
import Loading from '@/component/feedback/Loading'
import { LottieHandler } from '@/component/feedback/lottieHandler/lottieHandler'
import Heading from '@/component/shared/Heading/Heading'
import useCart from '@/hooks/useCart'
  import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Cart() {
  
      const navigate=useNavigate()

  const { productFullInfo ,products,userAccessToken,placeOrderStatus} = useCart()
      useEffect(() =>{
      if(!userAccessToken){
        navigate('/login')
      }
    },[navigate,userAccessToken])
    if(!userAccessToken){
      return null
    }
   if (!Array.isArray(productFullInfo) || productFullInfo.length === 0) {
  return <div className="text-center pb-10">
    {placeOrderStatus === 'succeeded' ? <LottieHandler type='success' message='Your has been placed successfully'/>:
    <LottieHandler type='cart' message='Your cart is empty'   className="w-40 h-40 sm:w-32 sm:h-32 mx-auto"
/>
    
    }
  </div>
}

return (
    <>
     <Heading title="Your Cart"/>
     <Loading status={'idle'} error={null} type='cart' >
    {products.map((product) => (
      <CartItem key={product.id} product={product} />
    ))}
    <CartSubtotalPrice products={products} userAccessToken={userAccessToken}/> 
    </Loading>
    </>
)
}

export default Cart