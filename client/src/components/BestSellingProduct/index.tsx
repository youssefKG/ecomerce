import { ProductCard } from "../cards";
import { ProductType } from "../../types";
import CardsSectionSkeleton from "../skeletons/PorductsSectionSkeleton";
import "./index.css";

interface IBestSellingProductProps {
  bestSellingProducts: ProductType[];
}
const BestSellingProduct = ({
  bestSellingProducts,
}: IBestSellingProductProps) => {
  return (
    <div className="best-selling-products-container">
      <div className="header-best-selling-products">
        <h1 className="font-bold text-2xl">Best Selling Products</h1>
        <button>View All</button>
      </div>
      {bestSellingProducts ? (
        <div className="products-cards-container">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              id={product.id}
              imgURL={product.imgURLS[0]}
              price={product.price}
              discount={product.discount}
              rate={product.rate}
            />
          ))}
        </div>
      ) : (
        <CardsSectionSkeleton cardsNumber={14} />
      )}
    </div>
  );
};
export default BestSellingProduct;
