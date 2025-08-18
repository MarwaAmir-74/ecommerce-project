 import { useAppDispatch } from '@/redux/hooks'
import { clearCartAfterPlaceOrder } from '@/redux/Slices/cartSlice'
import placeOrder from '@/redux/Thunks/placeOrder'
import type { TProduct } from '@/types/types'
import { useState } from 'react'
 type CartSubtotalPriceProps ={
    products:TProduct[],
    userAccessToken:string|null
 }
const CartSubtotalPrice =({products,userAccessToken}:CartSubtotalPriceProps) => { 
  const dispatch = useAppDispatch()
    const subTotal = products.reduce((acc,el)=> {
        const price = el.price
        const quantity = el.quantity
        if(typeof quantity === 'number'){
            return acc + price * quantity 
        }else{
            return acc
        }
    },0)

    const [showModal,setShowModal] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<string | null>(null)

    const handleClose = () =>{setShowModal(false)}
      const openModal = () => setShowModal(true)
    const modalHadler = () =>{
      setShowModal(!showModal)
      setError(null)
    }
    const placeOrderHandler =()=>{ 
      setLoading(true)
      dispatch(placeOrder(subTotal))
      .unwrap()
      .then(()=>{
        dispatch(clearCartAfterPlaceOrder())
        setShowModal(false)
      })
      .catch((error) =>{
        setError(error)})
      .finally(() =>{
        setLoading(false)
      })
      setShowModal(false)
    } 
  return (
    <div>
        <div className="p-4">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded">
        Place Order
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-4">
             <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-semibold">Placing Order</h2>
              <button
                onClick={openModal}
                className="text-gray-500 hover:text-black text-xl font-bold"
              >
                &times;
              </button>
            </div>

             <div className="py-4">
              Are you sure tou want to place order with Subtotal:{''}
              {subTotal.toFixed(2)} EGP
            </div>

             <div className="flex justify-end gap-2 border-t pt-2">
              <button
                className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
                onClick={handleClose}>
                Close
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                onClick={placeOrderHandler} >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>



      <div >
        <span>Subtotal:</span>
        <span>{subTotal.toFixed(2)} EGP</span>
      </div>
            
    </div>
  )
}

export default CartSubtotalPrice