import { ProductCard } from "../cards/index";
import { productData } from "../../utils/index";
import "./index.css";
// interface productType {
//   title: string;
//   description: string;
//   price: number;
//   discount: number;
//   imgURL: string;
// }
const ProductSection = () => {
  return (
    <section className="product-section">
      <div>
        <h1>Featured Products</h1>
      </div>
      <div className="cards-container">
        {productData.map((product) => {
          return (
            <ProductCard
              title={product.title}
              imgURL={product.imgURL}
              price={product.price}
              discount={product.discount}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ProductSection;
