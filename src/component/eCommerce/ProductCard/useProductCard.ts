import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addToCart } from "@/redux/Slices/cartSlice";
import { LikeToggle } from "@/redux/Thunks/likeToggle";
import type { TProduct } from "@/types/types";
import getProductsITemsById from "@/redux/Thunks/getProductsById";
import { useNavigate } from "react-router-dom";


const useProductCard = ({ id ,max ,isLiked}: TProduct) =>{
    const dispatch = useAppDispatch();
    const [isLoading,setIsLoading] = useState(false)
    const [likedState, setLikedState] = useState(isLiked);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)
    const quantity = useAppSelector((state) => state.cart.items[id] || 0) 
    const currentQuantity = (max ?? 0) - quantity  
    const maxQuantity = currentQuantity <= 0 
    const userAccessToken = useAppSelector(state => state.auth.accessToken)
    const navigate = useNavigate()
  const likeToggleHandler = () =>{
    if(!userAccessToken){
      navigate('/login')
    }
    if(!isLoading){
      setIsLoading(true)
      dispatch(LikeToggle(id))
      .unwrap()
      .then(()=>setIsLoading(false))
      setLikedState(!likedState)
    }
}

const addToCartHandler = async() =>{
      if(!userAccessToken){
      navigate('/login')
    }
    else{

      dispatch(addToCart(id))
      setIsBtnDisabled(true)
      await dispatch(getProductsITemsById())   
      setTimeout(() => {
        setIsBtnDisabled(false)
      }, 500);
    }
}
return {addToCartHandler,likeToggleHandler,maxQuantity,currentQuantity,likedState,isBtnDisabled}
}
export default useProductCard