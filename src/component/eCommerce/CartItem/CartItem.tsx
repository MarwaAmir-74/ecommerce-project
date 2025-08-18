import { useAppDispatch } from "@/redux/hooks";
import styles from "./style.module.css";
import type { TProduct } from "@/types/types";
import { cartItemChangeQuantity, cartRemoveItem } from "@/redux/Slices/cartSlice";
import { useCallback } from "react";
const { cartItem, productImg, productInfo } = styles;

type Props = {
  product: TProduct;
}

const CartItem = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  const renderOptions = Array(product.max)
  .fill(0)
  .map((_, idx) => {
    const quantity = idx + 1;
      return (
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
      );
    });
    
    const changeQuantityHandler = useCallback( (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +event.target.value;
     dispatch(cartItemChangeQuantity({id:product.id,quantity}))
  },[dispatch]);

  const removeItemHandler = (id: number) => {
  dispatch(cartRemoveItem(id));
}

  return (
    <div className={cartItem}>
      <div>
        <div className={productImg}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={productInfo}>
          <h2>{product.title}</h2>
          <h3>{product.price.toFixed(2)} EGP</h3>
          <button style={{ color: "white", backgroundColor:'red' }} className="mt-auto" onClick={() => removeItemHandler(product.id)} >
            Remove
          </button>
        </div>
      </div>

      <div className='w-30 ml-3' >
        <span className=" d-block ">Quantity</span>
        <select 
          aria-label="Default select example"
          value={product.quantity}
          onChange={changeQuantityHandler}
        >{renderOptions}
        </select>
      </div>
    </div>
  );
};

export default CartItem;
