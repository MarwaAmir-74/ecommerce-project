import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { cleanUpProductRecords } from "@/redux/Slices/productsSlice"
import { getProductsByCatPrefix } from "@/redux/Thunks/getProductsByCatPrefix"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const useProducts = () =>{
   const params=useParams()
  const dispatch = useAppDispatch()
  const {records,loading,error} = useAppSelector(state => state.products)
  const userAccessToken = useAppSelector(state => state.auth.accessToken)
  const cartItems = useAppSelector(state => state.cart.items)
  const wishListItemId=useAppSelector(state => state.wishList.itemsId)

  const productFullInfo = records.map((el) =>({
    ...el,
    quantity:cartItems[el.id] ||0,
    isLiked:wishListItemId.includes(el.id),
    isAuthenticated:userAccessToken?true:false
  }) )
  useEffect(()=>{
    const promise= dispatch(getProductsByCatPrefix(params.prefix as string))
    return () =>{
      promise.abort()
      dispatch(cleanUpProductRecords( ))
    }
  },[dispatch,params])
    return{loading,error,params,productFullInfo}
}
export default useProducts