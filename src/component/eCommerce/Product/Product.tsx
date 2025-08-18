import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addToCart } from '@/redux/Slices/cartSlice'
import type { TProduct } from '@/types/types'
import React from 'react';
import style from './styles.module.css'
import { useState } from 'react';
import { LikeToggle } from '@/redux/Thunks/likeToggle';
import LikeFill from "../../../assets/LikeFill.svg?react";
import Like from '../../../assets/Like.svg?react'
import { useNavigate } from 'react-router-dom';

 function Product({id,title,price,img,max,isLiked,isAuthenticated}:TProduct) {
  
    const {wishList} =style
    const dispatch=useAppDispatch()
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const quantity = useAppSelector((state) => state.cart.items[id] || 0) 
    const currentQuantity = (max ?? 0) - quantity  
    const maxQuantity = currentQuantity <= 0 
    const [isLoading,setIsLoading] = useState(false)
    const [likedState, setLikedState] = useState(isLiked);
const navigate =useNavigate()
 const addToCartHandler = () => {
  if(!isAuthenticated){
    navigate('/login')
  }else
    dispatch(addToCart(id))
    setIsBtnDisabled(true)
    setTimeout(() => {
      setIsBtnDisabled(false)
    }, 300)
  }
const likeToggleHandler = async () => {
    if(!isAuthenticated){
      navigate('/login')
  }
  if (isLoading) return;
  try {
    setIsLoading(true);
    await dispatch(LikeToggle(id)).unwrap();
    setLikedState((prev) => !prev);
  } catch (err) {
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="w-64 bg-white overflow-hidden p-4 relative">
      <div className={wishList} onClick={likeToggleHandler}>
         {likedState ? (
            <LikeFill width={24} height={24} className="text-red-400" />
          ) : (
            <Like width={24} height={24} className="text-gray-400" />
          )}
      </div>
 
      <div className="w-full h-40 ">
        <img src={img} alt={title} className="w-full h-full object-cover"/>
      </div>
      <h2 className="text-sm font-semibold mb-1">{title}</h2>
      <h3 className="text-sm text-gray-700 mb-3">{price} EGP</h3>
        <p className="text-sm font-semibold mb-1">{maxQuantity ? 'you reach the limit ' : `you can add ${currentQuantity}`}</p>
      <div className="flex justify-center">
        <button className="bg-cyan-500 text-white py-1 px-2 rounded hover:bg-cyan-600 transition" onClick={addToCartHandler} disabled={isBtnDisabled || maxQuantity}>
          Add to cart
        </button>
        </div>
    </div>
  )
}

export default React.memo(Product) 