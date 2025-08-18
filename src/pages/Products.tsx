import Product from '@/component/eCommerce/Product/Product'
import Loading from '@/component/feedback/Loading'
import Heading from '@/component/shared/Heading/Heading'
import useProducts from '@/hooks/useProducts'
import   { memo } from 'react'
 
function Products(){
const { params,productFullInfo,loading,error } = useProducts()
  return (
    <div className="container mx-auto py-8">
      <Heading title={`${params.prefix?.toUpperCase()} Product`}/>
      <Loading status={loading} error={error} type='product' >
     <div className="flex flex-wrap justify-center gap-2">
     {productFullInfo.map((record) =>(
        <div key={record.id} className="w-32 sm:w-40 md:w-44 lg:w-48 flex justify-center">
          <Product {...record}/>
        </div>
      ))}
      </div>
      </Loading>
    </div>
  )
}

export default memo(Products)