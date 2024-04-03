import { useLocation } from "react-router-dom";
import FilterProducts from "../../components/filterProducts";
import ProductsCollections from "../../components/ProductsCollection";
import "./index.css";
const Products = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="products-container">
      <FilterProducts />
      <ProductsCollections />
    </div>
  );
};
export default Products;
