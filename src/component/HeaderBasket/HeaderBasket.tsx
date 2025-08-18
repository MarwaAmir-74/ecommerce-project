
import Logo from '../../assets/svg/cart.svg?react'
import { useHeaderBasket } from './useHeaderBasket'
import style from './style.module.css'

function HeaderBasket() {

const {totalQuantity,isAnimate,navigate}=useHeaderBasket()

  return (
    <div className="relative cursor-pointer hidden sm:block" onClick={() => navigate('/cart')}>
      <span className={`${style.basketQuantity} ${isAnimate ? style.pumpCartQuantity : ''}`}>
        {totalQuantity}
      </span>
      <div className="flex items-center gap-1">
        <Logo />
        <span className="text-sm ml-[-4px]">Cart</span>
      </div>
    </div>
  )
}

export default HeaderBasket
