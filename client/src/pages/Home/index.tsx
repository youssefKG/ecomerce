import { useProducts, UseProductsI } from "../../hooks";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import CategoriesSection from "../../components/CategoriesSection";
import WhyUsSection from "../../components/WhyUsSection";
import BestSellingProduct from "../../components/BestSellingProduct";
import CardsSectionSkeleton from "../../components/skeletons/PorductsSectionSkeleton";
import "./index.css";

const Home = () => {
  const { bestSellingProducts, isBestSellingProductsLoading }: UseProductsI =
    useProducts();

  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection
        bestSellingProducts={bestSellingProducts}
        isBestSellingProductsLoading={isBestSellingProductsLoading}
      />
      <CategoriesSection />
      <BestSellingProduct bestSellingProducts={bestSellingProducts} />
      <WhyUsSection />
    </div>
  );
};

export default Home;
