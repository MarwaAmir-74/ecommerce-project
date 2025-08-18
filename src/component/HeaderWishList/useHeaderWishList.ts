import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
const useHeaderWishList = () => {
  const totalQuantity = useAppSelector(state => state.wishList.itemsId)
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  const [isAnimate, setIsAnimate] = useState(false)
 
  useEffect(() => {
    setIsAnimate(true)
    const debounce = setTimeout(() => {
      setIsAnimate(false)
    }, 300)
    return () => clearTimeout(debounce) 
  }, [totalQuantity])
  return{navigate,isAnimate,dispatch,totalQuantity,}
}

export default useHeaderWishList