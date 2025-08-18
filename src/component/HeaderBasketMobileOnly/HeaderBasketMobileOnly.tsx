import { useHeaderBasket } from '../HeaderBasket/useHeaderBasket'
import style from './style.module.css'

function HeaderBasketMobileOnly() {

const {totalQuantity,isAnimate,navigate}=useHeaderBasket()

  return (
    <div className="pt-2 relative cursor-pointer block sm:hidden" onClick={() => navigate('/cart')}>
      <span className={`${style.basketQuantity} ${isAnimate ? style.pumpCartQuantity : ''}`}>
        {totalQuantity}
      </span>
      <div className="flex items-center gap-1">
        🛒
        <span className="text-sm ml-[-4px]">Cart</span>
      </div>

       
    </div>
  )
}

export default HeaderBasketMobileOnly
