import "./index.css";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import Footer from "../../components/footer/index";
import Categories from "../../components/Categories";
function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
