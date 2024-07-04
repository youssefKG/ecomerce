import { productsData } from "../../utils";
import { ProductType } from "../../types";
import { ProductCard } from "../cards";
import { CardSkeleton } from "../skeletons";
import "./index.v2.css";

interface SimillarProductsSectionPropsType {
  simillarProducts: ProductType[];
  isLoading: boolean;
}

const SimillarProductSection = ({
  simillarProducts,
  isLoading,
}: SimillarProductsSectionPropsType) => {
  return (
    <section className="similar-products-section">
      <h1>Simillar Products</h1>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className="products-cards-container">
          {productsData.map((product, i: number) => (
            <ProductCard
              key={i}
              price={product.price}
              title={product.title}
              imgURL={product.imgURL}
              discount={product.discount}
              product_id={product.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SimillarProductSection;
