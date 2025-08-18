import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import actGetOrders from '@/redux/Thunks/getOrder'
import type { TProduct } from '@/types/types'
import { useEffect, useState } from 'react'
 
export const useOrders = () => {
      const dispatch=useAppDispatch()
  const {orderList,error,loading} = useAppSelector(state => state.order)
  const [showModal,setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

const viewDetailsHandler =(id: number) =>{
const productDetails = orderList.find((order) => order.id === id)
const newItems=productDetails?.items ?? []
setShowModal(true)
setSelectedProduct(prev => [...prev,...newItems])

}
  useEffect(() =>{
    const promise= dispatch(actGetOrders())
    return() =>{
      promise.abort()
    }
  },[dispatch])

  return {error,loading,showModal,selectedProduct,viewDetailsHandler,orderList}
}
