import "./index.css";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import CategoriesSection from "../../components/categoriesSection";
function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection />
      <CategoriesSection />
    </div>
  );
}

export default Home;
