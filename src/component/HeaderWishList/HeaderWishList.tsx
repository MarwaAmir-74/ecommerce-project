import style from './style.module.css' 
import WishListIcon from '../../assets/icons/Icons/wishList'
import useHeaderWishList from '@/component/HeaderWishList/useHeaderWishList'

function HeaderWishList() {
const {totalQuantity,isAnimate,navigate} = useHeaderWishList()

  return (
     <div  className="relative cursor-pointer hidden sm:block border-r border-black pr-[10px] mr-[20px]" onClick={() => navigate('/wishList')} >
      <div className="flex items-center gap-1 " >
        {totalQuantity.length > 0 && (
      <span className={`${style.wishListQuantity} ${isAnimate ? style.pumpwishListQuantity : ''}`}>
        {totalQuantity.length}
      </span>
        )}
        <WishListIcon />
        <span className="text-sm ml-[-4px]">WishList</span>
      </div>
           

    </div>
  )
}

export default HeaderWishList
