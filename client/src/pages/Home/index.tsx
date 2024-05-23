import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../../context";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import CategoriesSection from "../../components/CategoriesSection";
import WhyUsSection from "../../components/WhyUsSection";
import BestSellingProduct from "../../components/BestSellingProduct";
import "./index.css";
const Home = () => {
  const { handleOpenLoginBackdrop } = useContext(AuthContext);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    const fetchFeatureProducts = async (): Promise<void> => {};
    fetchFeatureProducts();
  }, []);
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
