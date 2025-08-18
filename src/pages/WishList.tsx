import Product from "@/component/eCommerce/Product/Product"
import Loading from "@/component/feedback/Loading"
import { LottieHandler } from "@/component/feedback/lottieHandler/lottieHandler"
 import Heading from "@/component/shared/Heading/Heading"
import useWishList from "@/hooks/useWishList"
import { useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function WishList() {
  const {error,loading,records} = useWishList()
  const navigate=useNavigate()
  const userAccessToken=useAppSelector(state => state.auth.accessToken) 
useEffect(() =>{
  if(!userAccessToken){
    navigate('/login')
  }
},[userAccessToken,navigate])
if(!userAccessToken){
  return null
}
 if (!Array.isArray(records) || records.length === 0) {
  return <div className="text-c
  enter py-10">
    <LottieHandler type='wishList' message='Your wishList is empty' children={undefined}/>

  </div>}

  return (
    <div>
      <Loading status={loading} error={error}>
              <Heading title="Your WishList"/>
        {records.map((record) =>(
                <div key={record.id} className="w-32 sm:w-40 md:w-44 lg:w-48 flex justify-center">
                  <Product {...record}/>
                </div>
              ))}
      </Loading>
    </div>
  )
}

export default WishList 