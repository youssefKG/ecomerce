import { useContext, useEffect } from "react";
import { useLocation, useSearchParams, useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import HeroSection from "../../components/heroSection/index";
import ProductSection from "../../components/ProductsSection/index";
import "./index.css";
const Home = () => {
  const { handleOpenLoginBackdrop } = useContext(AuthContext);
  const [queryParams, setQueryParams] = useSearchParams();
  useEffect(() => {
    const isAuthenticated = queryParams.get("isAuthenticated");
    if (isAuthenticated === "false") {
      setQueryParams({})
      handleOpenLoginBackdrop();
    }
  }, []);
  return (
    <div className="home-container">
      <HeroSection />
      <ProductSection />
    </div>
  );
};

export default Home;
