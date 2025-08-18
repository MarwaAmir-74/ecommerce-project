import { useAppSelector } from "@/redux/hooks"
import type { RootState } from "@/store"
import { createSelector } from "@reduxjs/toolkit"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useHeaderBasket = () => {

const getCartTotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, curr) => acc + curr, 0)
    return totalQuantity
  }
)
     const navigate=useNavigate()
  const [isAnimate, setIsAnimate] = useState(false)
  const totalQuantity = useAppSelector(getCartTotalQuantity)
  useEffect(() => {
    setIsAnimate(true)
    const debounce = setTimeout(() => {
      setIsAnimate(false)
    }, 300)
 
    return () => clearTimeout(debounce)  
  }, [
    
  ])

  return {totalQuantity,isAnimate,navigate}
}
