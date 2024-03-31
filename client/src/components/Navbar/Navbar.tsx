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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>
        <li>
          <p>Contact Us </p>
        </li>
        <li>
          <p>Blog</p>
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
