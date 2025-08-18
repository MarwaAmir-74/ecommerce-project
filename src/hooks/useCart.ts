import getProductsITemsById from '@/redux/Thunks/getProductsById';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { cleanCartProductFullInfo } from '@/redux/Slices/cartSlice';
import React, { useEffect } from 'react';

const useCart =() => {
    const dispatch = useAppDispatch()
    const {items , error,productFullInfo , loading} = useAppSelector(state => state.cart)
    const placeOrderStatus = useAppSelector(state =>  state.order.loading)
    const userAccessToken=useAppSelector(state => state.auth.accessToken)  
    useEffect(() => {
  dispatch(cleanCartProductFullInfo())
}, [dispatch])
    useEffect(() => {
   if (Object.keys(items).length > 0) {
    dispatch(getProductsITemsById());
  }
}, [dispatch, items]);
    const products = productFullInfo.map((el) => ({...el,quantity:items[el.id]}))
  return {items , error,productFullInfo , placeOrderStatus,loading,products,userAccessToken} 
}

export default useCart