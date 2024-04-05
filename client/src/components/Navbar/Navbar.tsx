import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiConcentricCrescents } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { AuthButton } from "../buttons";
import { FaBars, FaHome } from "react-icons/fa";
import { Divider } from "@mui/material";
import { IoIosContact } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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
      <button className="bars" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <FaBars className="bars-icon" />
      </button>
      {isDrawerOpen && (
        <div className="drawer-container">
          <ul className="drawer">
            <li>
              <NavLink to="/" className="nav">
                <FaHome />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav">
                <IoIosContact className="drawer-icon " />
                <p>Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav">
                <FaBlog />
                <p>Blog</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav">
                <FaHome />
                <p>About</p>
              </NavLink>
            </li>
            <Divider />
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
