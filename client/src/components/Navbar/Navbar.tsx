import { useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useClickOutside } from "../../hooks";
import { AuthContext } from "../../context/AuthContextProvider";
import { Divider } from "@mui/material";
import {
  IoLogoAppleAr,
  IoMdCart,
  FaBars,
  FaHome,
  FaBlog,
  IoIosContact,
} from "../../assets/icons";
// icons import
const Navbar = () => {
  const { setBackdropAuth, currentUser } = useContext(AuthContext);
  const drawerRef = useRef<HTMLDivElement>();
  const [isDrawerOpen, setIsDrawerOpen] = useClickOutside(drawerRef);
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
        {currentUser ? (
          <div className="currentUser">
            <Link to="/cart">
              <IoMdCart className="shoppingCartIcon" />
            </Link>
            <button>
              <img src={currentUser.photoURL} className="profil-img" />
            </button>
          </div>
        ) : (
          <div className="auth-btns-container">
            <button
              onClick={(): void =>
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
        )}
      </div>
      <button className="bars" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <FaBars className="bars-icon" />
      </button>
      {isDrawerOpen && <Drawer drawerRef={drawerRef} />}
    </div>
  );
};
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
export default Navbar;
