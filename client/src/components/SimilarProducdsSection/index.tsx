import { productsData } from "../../utils";
import { ProductCard } from "../cards";
import "./index.v2.css";
const SimillarProductSection = () => {
  return (
    <section className="similar-products-section">
      <h1>Simillar Products</h1>
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
    </section>
  );
};
export default SimillarProductSection;
