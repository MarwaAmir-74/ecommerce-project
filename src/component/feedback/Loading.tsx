import type { TLoading } from "@/types/types";
import  {LottieHandler}  from "./lottieHandler/lottieHandler";
import CartSkeleton from "./skeleton/CartSkeleton";
import CategorySkeleton from "./skeleton/CategorySkeleton";
import ProductSkeleton from "./skeleton/ProductSkeleton";
import TableSkeleton from "./skeleton/TableSkeleton";

const skeletonType ={
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
}
export type LoadingProps ={
    status:TLoading
    error:null | string
    children:React.ReactNode
    type?: keyof typeof skeletonType
} 
const Loading =({status,error,children,type }:LoadingProps)=> {
  const Component = type? skeletonType[type] :null

  if (status === "pending") {
    return Component ? <Component /> : null;
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;