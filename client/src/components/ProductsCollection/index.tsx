import "./index.css";
import { productsData } from "../../utils";
import { ProductCard } from "../cards";
import { Pagination } from "@mui/material";

interface PropsType {
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: (value: boolean) => void;
}

const ProductsCollections = ({ toggleFilterDrawer }: PropsType) => {
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
      <div className="flex flex-wrap mx-auto">
        {productsData.map((product, i) => (
          <ProductCard
            product_id={product.id}
            key={i}
            title={product.name}
            price={product.price}
            imgURL={product.imgURL}
            discount={product.discount}
          />
        ))}
      </div>
      <Pagination count={10} size="medium" color="primary" variant="outlined" />
    </div>
  );
};

export default ProductsCollections;
