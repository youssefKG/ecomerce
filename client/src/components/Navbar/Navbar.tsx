import { NavLink } from "react-router-dom";
import { GiConcentricCrescents } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { AuthButton } from "../buttons";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <a>
        <GiConcentricCrescents className="logo" />
      </a>
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
            <p>Contact Us</p>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <p>Blog</p>
          </NavLink>
        </li>
      </ul>
      <div className="profil">
        <CiShoppingCart className="shoppingCartIcon" />
        <AuthButton>Login</AuthButton>
      </div>
    </div>
  );
};
export default Navbar;
