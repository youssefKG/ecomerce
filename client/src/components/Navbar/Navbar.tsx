import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { NavLink, Link } from "react-router-dom";
import { IoLogoAppleAr } from "react-icons/io5";
// import { GiConcentricCrescents } from "react-icons/gi";
// import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaHome } from "react-icons/fa";
import { Divider } from "@mui/material";
import { IoIosContact } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
const Drawer = ({ drawerRef }) => {
  return (
    <div className="drawer-container">
      <div className="drawer" ref={drawerRef}>
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
      </div>
    </div>
  );
};
const Navbar = () => {
  const { setBackdropAuth, currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const hanldeClickOutsideDrawer = (e): void => {
      if (
        isDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      )
        setIsDrawerOpen(false);
    };
    document.addEventListener("mousedown", hanldeClickOutsideDrawer);
  });
  return (
    <div className="navbarContainer">
      <Link to="/" className="brandName">
        <IoLogoAppleAr className="brandNameIcon" />
        <p>TOTIB</p>
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
        <NavLink to="/cart"></NavLink>
        <div className="auth-btns-container">
          <button
            onClick={() =>
              setBackdropAuth({ isLoginOpen: true, isSignupOpen: false })
            }
          >
            <p>Login</p>
          </button>
          <div className="devider" />
          <button
            onClick={() =>
              setBackdropAuth({ isLoginOpen: false, isSignupOpen: true })
            }
          >
            <p>Signup</p>
          </button>
        </div>
      </div>
      <button className="bars" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <FaBars className="bars-icon" />
      </button>
      {isDrawerOpen && <Drawer drawerRef={drawerRef} />}
    </div>
  );
};
export default Navbar;
