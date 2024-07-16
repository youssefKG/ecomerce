import { ProductCard } from "../cards/index";
import { productsData } from "../../utils/index";
import "./index.v2.css";
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
      <div className="header-product-section-container">
        <h1 className="font-bold text-2xl">Featured Products</h1>
        <button>View All</button>
      </div>
      <div className="products-cards-container">
        {productsData.map((product: productType, i: number) => (
          <ProductCard
            product_id={product.id}
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
