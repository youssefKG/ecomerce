import { useRef, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useClickOutside } from "../../hooks";
import { AuthContext } from "../../context";
import { Divider, Badge } from "@mui/material";
import {
  IoLogoAppleAr,
  IoMdCart,
  FaBars,
  FaHome,
  FaBlog,
  IoIosContact,
  MdOutlineAccountCircle,
  CiLogout,
  BsBag,
  CiStar,
  MdOutlineCancel,
} from "../../assets/icons";
// icons import
const Navbar = () => {
  const { setBackdropAuth, currentUser } = useContext(AuthContext);
  const drawerRef = useRef<HTMLDivElement>();
  const [isDrawerOpen, setIsDrawerOpen] = useClickOutside(drawerRef);
  const profilRef = useRef<HTMLButtonElement | null>(null);
  const [isProfilBackdropOpen, setIsProfilBackdropOpen] =
    useState<boolean>(false);
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
        {currentUser ? (
          <div className="currentUser">
            {isProfilBackdropOpen && (
              <ProfilBackfrop
                closeProfilBackdrop={(): void => setIsProfilBackdropOpen(false)}
              />
            )}
            <Link to="/cart">
              <Badge
                badgeContent={true}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                color="warning"
                variant="dot"
              >
                <IoMdCart className="shoppingCartIcon" />
              </Badge>
            </Link>
            <button
              ref={profilRef}
              onClick={() => setIsProfilBackdropOpen(!isProfilBackdropOpen)}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsz-ePYChlKmmDp0G6-3nUZOJQ3d8KmY7DA&s"
                className="profil-img"
              />
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
const ProfilBackfrop = ({
  closeProfilBackdrop,
}: {
  closeProfilBackdrop: () => void;
}) => {
  return (
    <div className="profil-backdrop-container">
      <button onClick={closeProfilBackdrop}>
        <Link to="/account" className="item">
          <MdOutlineAccountCircle className="icon" />
          <p>My Account</p>
        </Link>
      </button>
      <button onClick={closeProfilBackdrop}>
        <Link to="item" className="item">
          <BsBag className="icon" />
          <p>My Orders</p>
        </Link>
      </button>
      <button onClick={closeProfilBackdrop}>
        <Link to="" className="item">
          <MdOutlineCancel className="icon" />
          <p>MyCancelation</p>
        </Link>
      </button>
      <button onClick={closeProfilBackdrop}>
        <Link to="" className="item">
          <CiStar className="icon" />
          <p>My Reviews</p>
        </Link>
      </button>
      <button onClick={closeProfilBackdrop}>
        <Link to="item" className="item">
          <CiLogout className="icon" />
          <p>Logout</p>
        </Link>
      </button>
    </div>
  );
};
export default Navbar;
