import { ProductCard } from "../cards/index";
import { productsData } from "../../utils/index";
import "./index.css";
const ProductSection = () => {
  return (
    <section className="product-section">
      <div>
        <h1>Featured Products</h1>
      </div>
      <div className="products-cards-container">
        {productsData.map(
          (product: {
            title: string;
            imgURL: string;
            price: number;
            discount: number;
          }) => {
            return (
              <ProductCard
                title={product.title}
                imgURL={product.imgURL}
                price={product.price}
                discount={product.discount}
              />
            );
          },
        )}
      </div>
    </section>
  );
};
export default ProductSection;
