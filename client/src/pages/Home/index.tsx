import { useLocation } from "react-router-dom";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import "./index.css";
function Home() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection />
    </div>
  );
}

export default Home;
