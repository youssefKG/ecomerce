import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
import ProductSearch from "../ProductSearch";
import { NavLink, Link } from "react-router-dom";
import ProfileMenu from "../ProfilMenu";
import { IoLogoAppleAr } from "../../assets/icons";

const Navbar = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const searchInputDebounceValue = useDebounce(searchInputValue, 500);

  useEffect(() => {
    const fetchSearchProducts = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
  }, [searchInputDebounceValue]);

  return (
    <div className="navbarContainer">
      <Link to="/" className="brandName">
        <IoLogoAppleAr className="brandNameIcon" />
        <p>Totib</p>
      </Link>
      <ul>
        <li>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
            <p>Product</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <p>Contact Us</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <p>Blog</p>
          </NavLink>
        </li>
      </ul>
      <div className="profil">
        <ProductSearch />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;
