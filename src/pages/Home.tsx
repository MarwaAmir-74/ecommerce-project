import ProductCard from "@/component/eCommerce/ProductCard/ProductCard";
import Loading from "@/component/feedback/Loading";
import useHome from "@/hooks/useHome";

function Home() {
const {setSortOption,sortedProducts,error,loading,sortOption} = useHome()
   return (
    <Loading status={loading} error={error} >
      <div className="p-4 sm:p-6 m-2 sm:mx-6 bg-white rounded-xl shadow-lg">
         <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}
           className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-lg mb-4 text-gray-800 font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 cursor-pointer">
          <option value="">Sort by</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Loading>
  );
}

export default Home;
