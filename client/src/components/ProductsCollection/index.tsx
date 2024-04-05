import "./index.css";
import { IoSearch } from "react-icons/io5";
import { productsData } from "../../utils";
import { ProductCard } from "../cards";
const ProductsCollections = () => {
  return (
    <div className="products-collections-container">
      <h1> Our Collection of products</h1>
      <div className="search-container">
        <input type="text" placeholder="Search for item" />
        <button>
          <IoSearch />
        </button>
      </div>
      <div className="cards-container">
        {productsData.map((product, i) => (
          <ProductCard
            product_id={product.id}
            key={i}
            title={product.title}
            price={product.price}
            imgURL={product.imgURL}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsCollections;
