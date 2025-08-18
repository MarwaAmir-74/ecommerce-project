import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import getWishList from "@/redux/Thunks/getWishList"
import {productsFullInfoCleanUp} from "@/redux/Slices/wishListSlice"
import { useEffect } from "react"

const useWishList =() => {
    const dispatch = useAppDispatch()
    const {productsFullInfo,error,loading} = useAppSelector(state => state.wishList)
    const userAccessToken = useAppSelector(state => state.auth.accessToken)
    const cartItems= useAppSelector(state => state.cart)
    useEffect(() =>{
      const promise=  dispatch(getWishList())
return () => {
    promise.abort()  
    dispatch(productsFullInfoCleanUp())  
  }
    },[dispatch])
    const records=productsFullInfo.map((el) =>({
      ...el,
        quantity: cartItems.items[el.id] || 0,
      isLiked:true,
          isAuthenticated:userAccessToken?true:false

    }))
  return {productsFullInfo,error,loading,records}
}

export default useWishList