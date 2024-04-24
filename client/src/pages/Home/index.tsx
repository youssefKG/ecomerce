import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../../types";
import { AuthContext } from "../../context";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import CategoriesSection from "../../components/categoriesSection";
import WhyUsSection from "../../components/WhyUsSection";
import BestSellingProduct from "../../components/BestSellingProduct";
import "./index.css";
const Home = () => {
  const { handleOpenLoginBackdrop } = useContext(AuthContext);
  const [queryParams, setQueryParams] = useSearchParams();
  const [featurredProducts, setFuturedProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const isAuthenticated = queryParams.get("isAuthenticated");
    if (isAuthenticated === "false") {
      setQueryParams({});
      handleOpenLoginBackdrop();
    }
  }, []);
  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection />
      <CategoriesSection />
      <BestSellingProduct />
      <WhyUsSection />
    </div>
  );
};

export default Home;
