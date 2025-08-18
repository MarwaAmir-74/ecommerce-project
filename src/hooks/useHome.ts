import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAllProducts } from "@/redux/Thunks/getAllProducts";
import { useState, useEffect } from "react";

const useHome = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const sortedProducts = [...records].sort((a, b) => {
    switch (sortOption) {
      case "az": return a.title.localeCompare(b.title);
      case "za": return b.title.localeCompare(a.title);
      case "low-high": return a.price - b.price;
      case "high-low": return b.price - a.price;
      default: return 0;
    }
  });

  return {setSortOption,sortedProducts,error,loading,sortOption}
}

export default useHome