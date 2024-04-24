import { ProductCard } from "../cards";
import { productsData } from "../../utils";
import "./index.css";
const BestSellingProduct = () => {
  return (
    <div className="best-selling-products-container">
      <div className="header-best-selling-products">
        <h1>Best Selling Products</h1>
        <button>View All</button>
      </div>
      <div className="products-cards-container">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              product_id={product.id}
              imgURL={product.imgURL}
              price={product.price}
              discount={product.discount}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BestSellingProduct;
