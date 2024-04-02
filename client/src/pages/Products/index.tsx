import FilterProducts from "../../components/filterProducts";
import ProductsCollections from "../../components/ProductsCollection";
import "./index.css";
const Products = () => {
  return (
    <div className="products-container">
      <FilterProducts />
      <ProductsCollections />
    </div>
  );
};
export default Products;
