import ContentLoader from "react-content-loader";

function ProductSkeleton() {
  const renderList = Array(4).fill(0).map((_, idx) => (
    <div
      key={idx}
      className="flex justify-center mb-5 mt-2 w-full sm:w-1/2 md:w-1/4 px-2"
    >
      <ContentLoader
        speed={2}
        width={190}
        height={300}
        viewBox="0 0 190 300"
        backgroundColor="#f0f0f0"
        foregroundColor="#ffffff"
      >
        <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
        <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
        <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
        <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
        <rect x="31" y="239" rx="0" ry="0" width="118" height="31" />
      </ContentLoader>
    </div>
  ));

  return (
    <div className="flex flex-wrap -mx-2">
      {renderList}
    </div>
  );
};

export default ProductSkeleton