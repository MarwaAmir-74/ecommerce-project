import Loading from '@/component/feedback/Loading'
import Heading from '@/component/shared/Heading/Heading'

import OrderProducts from './OrderProducts'
import { useOrders } from '@/hooks/useOrders'

function Orders() {
const {error,loading,showModal,selectedProduct,viewDetailsHandler,orderList} = useOrders()
  return (
    <>
    <div></div>
      <Heading title={'My Order'} />
      <Loading status={loading} error={error} type='table'>

      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr  className="hover:bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-r">
              Order Number
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider border-r">
              Items
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Total Price
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((el) =>(
            <tr key={el.id}>
              <td>#{el.id}</td>
              <td>{el.items.length} items (s){" / "}
                  <span onClick={() => viewDetailsHandler(el.id)} style={{ textDecoration: "underline", cursor: "pointer" }}> Product Details
                  </span>              
              </td>
              <td>  ${(el.subTotal ?? 0).toFixed(2) }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <OrderProducts products={selectedProduct} />}
      </Loading>
    </>
  )
}

export default Orders