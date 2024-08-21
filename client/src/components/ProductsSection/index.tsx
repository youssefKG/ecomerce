import { ProductCard } from "../cards/index";
import { ProductType } from "../../types";
import CardsSectionSkeleton from "../skeletons/PorductsSectionSkeleton";
import "./index.v2.css";

interface ProductSectionI {
  bestSellingProducts: ProductType[];
  isBestSellingProductsLoading: boolean;
}

const ProductSection = ({
  bestSellingProducts,
  isBestSellingProductsLoading,
}: ProductSectionI) => {
  return (
    <section className="product-section">
      <div className="header-product-section-container">
        <h1 className="font-bold text-2xl">Featured Products</h1>
        <button className="px-2 rounded shadow-md">View All</button>
      </div>
      {!isBestSellingProductsLoading ? (
        <div className="products-cards-container">
          {bestSellingProducts &&
            bestSellingProducts.map((product: ProductType) => (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                imgURL={product.imgURLS[0]}
                price={product.price}
                discount={product.discount}
              />
            ))}
        </div>
      ) : (
        <CardsSectionSkeleton />
      )}
    </section>
  );
};
export default ProductSection;
