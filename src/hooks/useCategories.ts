
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cleanCategoriesFullInfo } from "@/redux/Slices/categoriesSlice";
import { getCategories } from "@/redux/Thunks/getCategories";
import { useEffect } from "react";

const useCategories =() => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector((state) => state.categories);
 
useEffect(() => {
        const promise= dispatch(getCategories());
        return () =>{
          promise.abort() 
          dispatch(cleanCategoriesFullInfo())
        }
    }, [dispatch]);
  return {error, loading, records} 
}

export default useCategories