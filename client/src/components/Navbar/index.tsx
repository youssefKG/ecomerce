import Navbar from "./Navbar";
import BrandName from "./BrandName";
import "./index.css";
function Header() {
  return (
    <div className="headerContainer">
      <BrandName />
      <Navbar />
    </div>
  );
}

export default Header;
