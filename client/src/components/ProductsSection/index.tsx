import { ProductCard } from "../cards/index";
import { productsData } from "../../utils/index";
import "./index.css";
type productType = {
  title: string;
  imgURL: string;
  price: number;
  discount: number;
  id: number;
};
const ProductSection = () => {
  return (
    <section className="product-section">
      <div>
        <h1>Featured Products</h1>
      </div>
      <div className="products-cards-container">
        {productsData.map((product: productType, i: number) => (
          <ProductCard
            product_id={String(product.id)}
            key={i}
            title={product.title}
            imgURL={product.imgURL}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductSection;
