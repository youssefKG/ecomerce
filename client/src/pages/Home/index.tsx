import {
  useBesSellingProducts,
  useFeaturedProducts,
} from "../../hooks/useBestSellingProducts";
import "./index.css";

import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import CategoriesSection from "../../components/CategoriesSection";
import WhyUsSection from "../../components/WhyUsSection";
import BestSellingProduct from "../../components/BestSellingProduct";

const Home = () => {
  const [bestSellingProducts, setBestSelligProducts] = useBesSellingProducts();
  const [featuredProducts, setFeaturedProducts] = useFeaturedProducts();

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
