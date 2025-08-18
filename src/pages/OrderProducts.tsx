import { useAppSelector } from "@/redux/hooks"
import type { TProduct } from "@/types/types"

type OrderProductsProps = {
  products: TProduct[]
}

export default function OrderProducts({ products }: OrderProductsProps) {
   const orders = useAppSelector(state => state.order.orderList)

  if (orders.length === 0) return null

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Orders List</h1>

      {orders.map((order) => {
        return (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-wrap justify-between items-center border-b pb-3 mb-4">
              <p className="font-semibold text-gray-700">
                <span className="text-gray-500">Order ID:</span> {order.id}
              </p>
              <p className="text-sm inline-block">Date: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <div className="mb-4">
              <p className="mt-1 bg-gray-50 p-2 rounded-md inline-block">
                <span className="font-medium">Subtotal:</span> {order.subTotal.toFixed(2)} EGP
              </p>
            </div>
 
            <div>
              <p className="font-medium mb-2">Items:</p>
              <div className="grid gap-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <img src={item.img} alt={item.title} className="h-20 w-20 object-cover rounded-md"/>
                    <div>
                      <p className="font-semibold text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p> 
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
