import { ProductCard } from "../cards";
import { ProductType } from "../../types";
import CardsSectionSkeleton from "../skeletons/PorductsSectionSkeleton";
// import "./index.css";

interface PropsType {
  isLoading: boolean;
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: (value: boolean) => void;
  products: ProductType[];
}

const ProductsCollections = ({
  toggleFilterDrawer,
  products,
  isLoading,
}: PropsType) => {
  return (
    <div className="mt-4 md:mx-12 mx-2 flex flex-col justify-center items-center  gap-4 w-full">
      <h1 className="font-bold text-2xl"> Our Collection of products</h1>
      <button
        onClick={() => toggleFilterDrawer(true)}
        className="self-start font-mediu opacity-80 hover:opacity-100
        transition-all border border-solid text-sm  tracking-wide px-4 rounded-full
        text-gray-800 border-gray-700  "
      >
        Filter
      </button>
      {isLoading ? (
        <CardsSectionSkeleton cardsNumber={19} />
      ) : (
        <div className="flex flex-wrap mx-auto">
          {products.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imgURL={product.imgURLS[0]}
              discount={product.discount}
              rate={product.rate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsCollections;
