import Category from "@/component/eCommerce/Category/Category";
import Loading from "@/component/feedback/Loading";
import Heading from "@/component/shared/Heading/Heading";
import useCategories from "@/hooks/useCategories";

function Categories() {
const {records,loading,error}=useCategories()
   return (
    <div className="container mx-auto py-8">
      <Heading title="categories"/>
      <Loading status={loading} error={error} type='category' >
        {loading === "pending" && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-1">
          {records.map((record) => (
            <div
              key={record.id}
              className="w-32 sm:w-40 md:w-44 lg:w-48 flex justify-center" >
              <Category {...record} />
            </div>
          ))}
        </div>
      </Loading>
    </div>

  );
}

export default Categories;
