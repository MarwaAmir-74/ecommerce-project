
import Like from "../../../assets/Like.svg?react";
import LikeFill from "../../../assets/LikeFill.svg?react";
import useProductCard from "@/component/eCommerce/ProductCard/useProductCard";
import type { TProduct } from "../../../types/types";

interface ProductCardProps {
  product: TProduct;
}
function ProductCard({ product }:ProductCardProps) {
  const {addToCartHandler,likeToggleHandler,maxQuantity,currentQuantity,likedState,isBtnDisabled,
  } = useProductCard(product);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.img}
          alt={product.title}
          className="w-full object-cover"
        />
        <div
          onClick={likeToggleHandler}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:scale-110 transition"
        >
          {likedState ? (
            <LikeFill width={24} height={24} className="text-red-400" />
          ) : (
            <Like width={24} height={24} className="text-gray-400" />
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-1 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-red-500 font-bold">{product.price} EGP</p>
        <p className="text-sm font-semibold mb-1">
          {maxQuantity ? "you reach the limit" : `you can add ${currentQuantity}`}
        </p>
        <button
          className="bg-cyan-500 text-white py-1 px-2 rounded hover:bg-cyan-600 transition"
          onClick={addToCartHandler}
          disabled={isBtnDisabled || maxQuantity}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
